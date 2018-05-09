pragma solidity ^0.4.21;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract CCCToken is StandardToken {
    string public name = "Container Crypto Coin";
    string public symbol = "CCC";
    uint8 public decimals = 18;

    // Issuing 50 Million CCC
    uint256 public INITIAL_SUPPLY = 50000000 * (uint256(10) ** decimals);

    constructor() public {
      totalSupply_ = INITIAL_SUPPLY;
      balances[msg.sender] = INITIAL_SUPPLY;
    }
}
