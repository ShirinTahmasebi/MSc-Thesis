// const path = require("path");
//
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   // networks: {
//   //   develop: {
//   //     port: 8545
//   //   }
//   // }
//   // contracts_build_directory: path.join(__dirname, "../thesis-front/src/contracts"),
//   compilers: {
//     solc: {
//       version: "0.5.12",
//     },
//   },
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*",
//     },
//   },
// };

const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  compilers: {
    solc: {
      version: "0.5.12",
    },
  },
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider("banner push rocket mutual age agree thrive private goat video anchor mercy", "https://ropsten.infura.io/v3/044d4f53bdb7433f8e0442085ef38ea6");
      },
      network_id: 3,
    },
  },
};