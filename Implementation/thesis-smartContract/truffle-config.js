const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // networks: {
  //   develop: {
  //     port: 8545
  //   }
  // }
  // contracts_build_directory: path.join(__dirname, "../thesis-front/src/contracts"),
  compilers: {
    solc: {
      version: "0.5.12",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
};
