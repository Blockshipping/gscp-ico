pragma solidity ^0.4.21;

import 'openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol';

contract CCCCrowdSale is Crowdsale {

    constructor(uint256 _rate, address _wallet, address _tokenAddress) Crowdsale(_rate,_wallet, ERC20(_tokenAddress)) public {
    }
}
