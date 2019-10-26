const getWeb3 = () => {
  const HDWalletProvider = require("truffle-hdwallet-provider");
  const Web3 = require("web3");
  // TODO: Remove hard coded mnemonic
  // TODO: Enable using provider via mnemonic and account index
  // TODO: Enable using provider via private key
  const mnemonic = "physical note champion that uphold stamp hobby steak beach pink help trap"; // 12 word mnemonic
  let provider = new HDWalletProvider(mnemonic, "http://localhost:7545");
  return new Web3(provider);
};

const getContractInstance = async (web3, contract) => {
  const networkId = await web3.eth.net.getId();

  const deployedNetwork = contract.networks[networkId];

  return new web3.eth.Contract(
    contract.abi,
    deployedNetwork && deployedNetwork.address,
  );
};


module.exports = {getWeb3, getContractInstance};