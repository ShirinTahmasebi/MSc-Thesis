let web3WebSocketProvider;
let web3HttpProvider;

const getWeb3 = () => {
  if (web3HttpProvider !== undefined && web3HttpProvider.currentProvider !== undefined) {
    return web3HttpProvider;
  }
  const HDWalletProvider = require("truffle-hdwallet-provider");
  const Web3 = require("web3");
  // TODO: Remove hard coded mnemonic
  // TODO: Enable using provider via mnemonic and account index
  // TODO: Enable using provider via private key
  const mnemonic = "pupil state popular consider slab defense pet almost claw arm know report"; // 12 word mnemonic
  let provider = new HDWalletProvider(mnemonic, "http://localhost:7545");
  web3HttpProvider = new Web3(provider);
  return web3HttpProvider;
};

const getWeb3WebSocket = () => {
  if (web3WebSocketProvider !== undefined && web3WebSocketProvider.currentProvider !== undefined) {
    return web3WebSocketProvider;
  }
  const Web3 = require("web3");
  web3WebSocketProvider = new Web3();
  const eventProvider = new Web3.providers.WebsocketProvider('ws://localhost:7545');
  web3WebSocketProvider.setProvider(eventProvider);
  return web3WebSocketProvider;
};

const getContractInstance = async (web3, contract) => {
  const networkId = await web3.eth.net.getId();

  const deployedNetwork = contract.networks[networkId];

  return new web3.eth.Contract(
    contract.abi,
    deployedNetwork && deployedNetwork.address,
  );
};


module.exports = {getWeb3, getWeb3WebSocket, getContractInstance};