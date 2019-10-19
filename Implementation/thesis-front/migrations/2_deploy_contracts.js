// Full Documentation
// https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations

var DeviceDefaultAttributes = artifacts.require("./DeviceDefaultAttributes.sol");
var DeviceProfiles = artifacts.require("./DeviceProfiles.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Users = artifacts.require("./Users.sol");

module.exports = function (deployer) {

  // Deploy DeviceDefaultAttributes, then deploy DeviceProfiles, passing in DeviceDefaultAttributes's newly deployed address
  deployer.deploy(DeviceDefaultAttributes).then(function () {
    return deployer.deploy(DeviceProfiles, DeviceDefaultAttributes.address);
  });
  deployer.deploy(SimpleStorage);
  deployer.deploy(Users);
};
