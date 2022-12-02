pragma solidity ^0.5.0;

import "ERC20Token.sol";

contract ERC20Tether {

  function transfer(address _to, uint256 _amount) external {
    ERC20Token usdt = ERC20Token(0x509Ee0d083DdF8AC028f2a56731412edD63223B9);
    usdt.transfer(_to, _amount);
  }
}