const CCCToken = artifacts.require('./CCCToken.sol');

module.exports = function(deployer) {
  deployer.deploy(CCCToken);
};
