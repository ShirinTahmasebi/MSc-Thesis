import Web3 from "web3";

const getWeb3 = (shouldUseMetaMaskProvider) => {
  if (shouldUseMetaMaskProvider) {
    new Promise((resolve, reject) => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:7545",
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  }
  else {
    const HDWalletProvider = require("truffle-hdwallet-provider");
    const Web3 = require("web3");
    // TODO: Remove hard coded mnemonic
    // TODO: Enable using provider via mnemonic and account index
    // TODO: Enable using provider via private key
    const mnemonic = "physical note champion that uphold stamp hobby steak beach pink help trap"; // 12 word mnemonic
    let provider = new HDWalletProvider(mnemonic, "http://localhost:7545");
    return new Web3(provider);
  }
};

const getContractInstance = async (web3, contract) => {
  const networkId = await web3.eth.net.getId();

  const deployedNetwork = contract.networks[networkId];

  return new web3.eth.Contract(
    contract.abi,
    deployedNetwork && deployedNetwork.address,
  );
};


export {getWeb3};
export {getContractInstance};
