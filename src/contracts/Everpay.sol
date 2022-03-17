pragma solidity ^0.5.0;

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
   address public owner;
   
   constructor() public {
    
    owner = msg.sender;
  }

  function stream(_sender, _receiver, _deposit, _token, _startTime, _endTime) public {

  }
}