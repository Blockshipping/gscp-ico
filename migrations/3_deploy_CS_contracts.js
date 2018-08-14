const CCCCrowdSale = artifacts.require('./CCCCrowdSale.sol');

module.exports = function(deployer, network) {

//  if (network === undefined) {
//      network = 'development';
//  }

 var walletAddress = "0x31491f06c581F2c9A852b0B99a1b8863CaB77b14";
 var tokenAddress = "0x9E3359f862b6c7F5c660CfD6d1Aa6909b1D9504d";
 var rate = new web3.BigNumber(680); // tokens per eth

  if (network == 'ropsten') {
      walletAddress = "0xA0cFdbC69215D8aAeD69dCc6C8933035dcCFfdD5";
      tokenAddress = "0x6E67CCD648244b3B8E2F56149b40BA8de9D79b09";
      rate = new web3.BigNumber(800); // tokens per eth
    }

    if (network == 'development') {
        walletAddress = "0xA0cFdbC69215D8aAeD69dCc6C8933035dcCFfdD5";
        tokenAddress = "0xbca3d918b32bd1d7baa346e864e5d6c840cc5cd1";
        rate = new web3.BigNumber(800); // tokens per eth
      }

  deployer.deploy(CCCCrowdSale,rate, walletAddress, tokenAddress);
};
