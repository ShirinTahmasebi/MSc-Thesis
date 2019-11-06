const getDeviceProfileContract = async () => {
  const getWeb3 = require('./getWeb3.js');
  const DeviceProfilesContract = require('../contracts/DeviceProfiles');
  const web3 = await getWeb3.getWeb3();
  return await getWeb3.getContractInstance(web3, DeviceProfilesContract);
};

const getDeviceProfileContractEvents = async () => {
  const getWeb3 = require('./getWeb3.js');
  const DeviceProfilesContract = require('../contracts/DeviceProfiles');
  const web3 = await getWeb3.getWeb3WebSocket();
  return await getWeb3.getContractInstance(web3, DeviceProfilesContract);
};

module.exports = {getDeviceProfileContract, getDeviceProfileContractEvents};