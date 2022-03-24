pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import './Tether.sol';
// -- Inspired By Sablier --
// To-Do List
// [X] Stream function (sent by sender received by receiver)
// [X] Withdraw function (automatically does in stream func)
// [X] Cancel function (just sender)
// []
// []
// []

contract Everpay {
  using SafeMath for uint;
  
   address public owner;
   Tether public tether;
   mapping(address => uint) public streamBalanceOf;
   mapping(address => uint) public depositAmountRemaining;
   mapping(address => bool) public isStreaming;
   constructor(Tether _tether) public {
    tether = _tether;
    owner = msg.sender;
  }

  event Stream(
    address _sender, 
    address _receiver, 
    uint256 _deposit, 
    address _token, 
    uint256 _startTime, 
    uint256 _endTime,
    uint256 _timestamp
  );

  event Cancel(
    address _sender, 
    address _receiver, 
    uint256 _depositAmountRemaining, 
    address _token, 
    uint256 _timestamp
  );

  function stream(address _receiver, uint  _deposit, address _token, uint _startTime, uint _endTime) public {
    // Make sure that user inputed _startTime and _endTime are in seconds
     if(!isStreaming[_receiver]){

    // Set initial depositAmountRemaining
    depositAmountRemaining[_receiver] = _deposit;

    require(tether.balanceOf(msg.sender) >= _deposit);

     // Transfers full tether amount from sender to this contract address to distribute it to receiver
    tether.transferFrom(msg.sender, address(this), _deposit);
    }
    require(_deposit > 0);
    require(depositAmountRemaining[_receiver] > 0);

    uint _timeDiff = _endTime.sub(_startTime);
    uint _dividedAmount = _deposit.div(_timeDiff);

    // Transfer divided amount from contract to receiver
    tether.transfer(_receiver, _dividedAmount);

    // Update current stream balance
    streamBalanceOf[_receiver] = streamBalanceOf[_receiver].add(_dividedAmount);

    //  Store deposit amount remaining in mapping
   
    depositAmountRemaining[_receiver] = depositAmountRemaining[_receiver].sub(_dividedAmount);

    //  Set streaming to true for receiver address
    isStreaming[_receiver] = true;

    emit Stream(msg.sender, _receiver, _deposit, _token, _startTime, _endTime, now);
  }

  function cancel(address _receiver, address _token) public {
    // Has to be streaming to be able to cancel
    require(isStreaming[_receiver]);

    // After cancel, receiver won't be streaming anymore
    isStreaming[_receiver] = false;

    // Transfer remaing deposit back to sender from contract
    tether.transfer(msg.sender, depositAmountRemaining[_receiver]);

    emit Cancel(msg.sender, _receiver, depositAmountRemaining[_receiver], _token, now);
  }

  
}