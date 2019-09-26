var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Users = artifacts.require("./Users.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Users);
};
