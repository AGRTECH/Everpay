pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import './Tether.sol';
// -- Inspired By Sablier --
// To-Do List
// [X] Stream function (sent by sender received by receiver)
// [X] Withdraw function (have to create so the receiver doesnt have to accept a million transfer requests)
// [X] Cancel function (just sender)

contract Everpay {
  using SafeMath for uint;
  
   address public owner;
   Tether public tether;
   uint256 public streamId;
   mapping(address => mapping(address => uint))public streamBalanceOf;
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
    address _sender, 
    address _receiver, 
    uint256 _deposit, 
    address _token,
    uint256 _rate,
    uint256 _depositRemaining,
    uint256 _endTime,
    uint256 _timestamp
  );

  event Cancel(
    uint256 _streamId,
    address _sender, 
    address _receiver, 
    uint256 _depositAmountRemaining, 
    uint256 _timestamp
  );

  event Withdraw(
    uint256 _streamId,
    address _receiver, 
    uint256 _depositAmountRemaining, 
    uint256 _timestamp
  );

  function stream(address _receiver, uint  _deposit, address _token, uint _endTime) public {
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

    // Transfer divided amount from contract to receiver
    // tether.transfer(_receiver, _dividedAmount);

    // Update current stream balance of this particular sender to receiver
    // streamBalanceOf[msg.sender][_receiver] = streamBalanceOf[msg.sender][_receiver].add(_dividedAmount);

    //  Store and sub deposit amount remaining in mapping
    // depositAmountRemaining[msg.sender][_receiver] = depositAmountRemaining[msg.sender][_receiver].sub(_dividedAmount);

    //  Set streaming to true for receiver address
    isStreaming[_receiver] = true;

    // Increment stream ID
    streamId = streamId.add(1);

    // Add stream to stream mapping
    streams[streamId] = _Stream(_deposit, _dividedAmount, depositAmountRemaining[msg.sender][_receiver], _endTime, _receiver, msg.sender, _token);

    emit Stream(streamId, msg.sender, _receiver, _deposit, _token, _dividedAmount, depositAmountRemaining[msg.sender][_receiver], _endTime, now);
  }

  function withdraw(uint _balance, address _sender) public {
    require(_balance > 0);
    require(isStreaming[msg.sender] == true);

    // Transfer available balance to receiver (criteria for whats available is made in JS)
    tether.transfer(msg.sender, _balance);

    emit Withdraw(streamId, msg.sender, depositAmountRemaining[_sender][msg.sender], now);
  }

  function cancel(address _receiver) public {
    // Has to be streaming to be able to cancel
    require(isStreaming[_receiver]);

    // After cancel, receiver won't be streaming anymore
    isStreaming[_receiver] = false;

    // Transfer remaing deposit back to sender from contract
    tether.transfer(msg.sender, depositAmountRemaining[msg.sender][_receiver]);

    // Reset stream balance of receiver for this sender
    streamBalanceOf[msg.sender][_receiver] = 0;

    emit Cancel(streamId, msg.sender, _receiver, depositAmountRemaining[msg.sender][_receiver], now);
  }
}