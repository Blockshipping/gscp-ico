require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex");
var mainNetAddress    = process.env["MAINNET_ADDRESS"];
var mainNetWallet     = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider   = new WalletProvider(mainNetWallet, mainNetAddress);

var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex");
var ropstenAddress    = process.env["ROPSTEN_ADDRESS"];
var ropstenWallet     = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider   = new WalletProvider(ropstenWallet, ropstenAddress);

//var devPrivateKey = new Buffer(process.env["DEVELOPMENT_PRIVATE_KEY"], "hex")
//var devWallet = Wallet.fromPrivateKey(devPrivateKey);
//var devProvider = new WalletProvider(devProvider, "http://localhost:7545/");


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },

    ropsten: {
      provider: ropstenProvider,
      // You can get the current gasLimit by running
      // truffle deploy --network ropsten
      // truffle(ropsten)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "3",
    },
    mainnet: {
      provider: mainNetProvider,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "1",
    }
  }
};
