pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import './Tether.sol';
// -- Inspired By Sablier --
// To-Do List
// [] Company and Employee decide on a salary over a fixed time
// [] Stream function (sent by sender received by receiver)
// [] Withdraw function (just receiver)
// [] Cancel function (just sender)
// []
// []
// []

contract Everpay {
  using SafeMath for uint;
  
   address public owner;
   Tether public tether;
  mapping(address => uint) public streamBalanceOf;
   
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
    uint256 _endTime
  );

  function stream(address payable _receiver, uint  _deposit, address _token, uint _startTime, uint _endTime) public {
    // Make sure that user inputed _startTime and _endTime are in seconds

    uint _timeDiff = _endTime.sub(_startTime);
    uint _dividedAmount = _deposit.div(_timeDiff);

    // Transfers tether amount from sender to receiver
    tether.transferFrom(msg.sender, _receiver, _dividedAmount);

    // Update current stream balance
     streamBalanceOf[_receiver] = streamBalanceOf[_receiver].add(_dividedAmount);

    emit Stream(msg.sender, _receiver, _deposit, _token, _startTime, _endTime);
  }
}