// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";

import './Tether.sol';
// -- Inspired By Sablier --
// To-Do List
// [X] Stream function (sent by sender received by receiver)
// [X] Withdraw function (have to create so the receiver doesnt have to accept a million transfer requests)
// [X] Cancel function (just sender)

contract Everpay is ReentrancyGuard {
  using SafeMath for uint;
  
   address public owner;
   Tether public tether;
   uint256 public streamId;
   uint256 public cancelId;
   mapping(uint => mapping(address => uint))public streamBalanceOf;
   mapping(address => mapping(address => uint)) public depositAmountRemaining;
   mapping(uint256 => _Stream) public streams;
   mapping(address => bool) public isStreaming;

   constructor(Tether _tether) public {
    tether = _tether;
    owner = msg.sender;
  }

  struct _Stream {
    uint256 deposit;
    uint256 ratePerSecond;
    uint256 remainingBalance;
    uint256 endTime;
    address receiver;
    address sender;
    address token;
  }

  event Stream(
    uint256 _streamId,
    bool _isStreaming,
    address _sender, 
    address _receiver, 
    uint256 _deposit, 
    address _token,
    uint256 _rate,
    uint256 _depositRemaining,
    uint256 _streamBalanceOf,
    uint256 _endTime,
    uint256 _timestamp
  );

  event Cancel(
    uint256 _streamId,
    uint256 _cancelId,
    bool _isStreaming,
    address _sender, 
    address _receiver, 
    uint256 _depositAmountRemaining, 
    uint256 _timestamp
  );

  event Withdraw(
    uint256 _streamId,
    address _receiver, 
    uint256 _depositAmountRemaining, 
    uint256 _streamBalanceOf,
    uint256 _timestamp
  );

   /** 
  * @notice Creates a stream to a receiver with a specified token, amount and time interval
  * @dev Throws if the address is trying to send more token than they own
  * Throws if amount sent is 0 or less
  * Throws if the amount of tokens still able to be withdrawn is less than the currenct amount able to withdraw 
  * @param _receiver the address receiving the funds
  * @param _deposit the amount being streamed
  * @param _token address of streamed token
  * @param _endTime how long the stream will take to end in seconds
  */

  function stream(address _receiver, uint _deposit, address _token, uint _endTime) public {
    // Make sure that user inputed _startTime and _endTime are in seconds
     if(!isStreaming[_receiver]){

    // Set initial depositAmountRemaining
    depositAmountRemaining[msg.sender][_receiver] = _deposit;

    require(tether.balanceOf(msg.sender) >= _deposit);

     // Transfers full tether amount from sender to this contract address to distribute it to receiver
    tether.approve(address(this), _deposit);
    tether.transferFrom(msg.sender, address(this), _deposit);
    }
    require(_deposit > 0);
    require(depositAmountRemaining[msg.sender][_receiver] > 0);

    // Create rate per second
    uint _dividedAmount = _deposit.div(_endTime);

    // require(_deposit % _dividedAmount == 0);

    //  Set streaming to true for receiver address
    isStreaming[_receiver] = true;

    // Increment stream ID
    streamId = streamId.add(1);

    // Add stream to stream mapping
    streams[streamId] = _Stream(_deposit, _dividedAmount, depositAmountRemaining[msg.sender][_receiver], _endTime, _receiver, msg.sender, _token);

    emit Stream(streamId, isStreaming[_receiver], msg.sender, _receiver, _deposit, _token, _dividedAmount, depositAmountRemaining[msg.sender][_receiver], streamBalanceOf[streamId][msg.sender], _endTime, block.timestamp);
  }

  /** 
  * @notice Withdraws currenct balance streamed based on time passed
  * @dev Throws if the currenct balance is less than 0
  * Throws if address isn't streaming
  * Throws if the amount of tokens still able to be withdrawn is less than the currenct amount able to withdraw 
  * @param _balance the amount able to withdraw
  * @param _sender the address streaming
  */

  function withdraw(uint _balance, address _sender) public {
    require(_balance > 0);
    require(isStreaming[msg.sender] == true);
    // Transfer available balance to receiver (criteria for whats available to withdraw is made in JS)
    _balance = _balance.sub(streamBalanceOf[streamId][msg.sender]);
    require(depositAmountRemaining[_sender][msg.sender] >= _balance);

    // Subtract from depositAmountRemaining
    depositAmountRemaining[_sender][msg.sender] = depositAmountRemaining[_sender][msg.sender].sub(_balance);


    // Add to current stream balance incase receiver withdraws midway through stream
    streamBalanceOf[streamId][msg.sender] = streamBalanceOf[streamId][msg.sender].add(_balance);

    tether.transfer(msg.sender, _balance);


    emit Withdraw(streamId, msg.sender, depositAmountRemaining[_sender][msg.sender], streamBalanceOf[streamId][msg.sender],  block.timestamp);

    if(depositAmountRemaining[_sender][msg.sender] == 0){
      cancel(msg.sender);
    }
  }

  /** 
  * @notice Cancels the stream and returns the non-withdrawn funds back to streamer
  * @dev Throws if the currenct address isn't streaming
  * @param _receiver the address being streamed to
  */

  function cancel(address _receiver) public {
    // Has to be streaming to be able to cancel
    require(isStreaming[_receiver]);

    // After cancel, receiver won't be streaming anymore
    isStreaming[_receiver] = false;

    // Transfer remaing deposit back to sender from contract
    tether.transfer(msg.sender, depositAmountRemaining[msg.sender][_receiver]);

    // Reset stream balance and depositAmountRemaining of receiver for this sender
    streamBalanceOf[streamId][_receiver] = 0;
    depositAmountRemaining[msg.sender][_receiver] = 0;

    // Increment cancel ID
    cancelId = cancelId.add(1);

    emit Cancel(streamId, cancelId, isStreaming[_receiver], msg.sender, _receiver, depositAmountRemaining[msg.sender][_receiver], block.timestamp);
  }

  /** 
  * @notice Receives 100 test tether tokens to test this project on Goerli
  */

  function requestFunds() public {
    tether.transfer(msg.sender, 100000000000000000000);
  }
}