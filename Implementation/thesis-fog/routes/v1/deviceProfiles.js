const express = require('express');
const getWeb3 = require("../../utils/getWeb3").getWeb3;
const router = express.Router();
let deviceProfilesContractInstance;

/* GET device profile by id. */
router.get('/profile/deviceId/:device_id', async (req, res) => {
  let deviceProfileResponse = await deviceProfilesContractInstance.methods.getDeviceAttributes(req.params.device_id).call();
  let jsonArrayResponse = [];
  if (deviceProfileResponse != null) {
    const totalDevicesCount = deviceProfileResponse.length;
    for (let i = 0; i < totalDevicesCount; i++) {
      const deviceProfile = deviceProfileResponse[i];
      jsonArrayResponse[i] = {
        "name": deviceProfile.name,
        "minimunThreshold": deviceProfile.minimunThreshold,
        "minimunViolationCount": deviceProfile.minimunViolationCount,
        "minimumCriticality": deviceProfile.minimumCriticality,
        "maximumThreshold": deviceProfile.maximumThresold,
        "maximumViolationCount": deviceProfile.maximumViolationCount,
        "maximumCriticality": deviceProfile.maximumCriticality,
      };
    }
  }
  res.json({"deviceProfiles": jsonArrayResponse});
});


/* GET add device. */
router.get('/addTestDevice', async (req, res) => {
  const web3 = getWeb3();
  const accounts = await web3.eth.getAccounts();
  await deviceProfilesContractInstance.methods.addDevice("1.1.1.1", "model 1", 1).send({from: accounts[0]});
  res.json({"result": "ok"});
});

/* GET add test data to IPFS. */
router.get('/addToIpfs', async (req, res) => {
  const getMonitoringMockData = require("../../utils/generateMockData").getMonitoringMockData;

  const addToIpfs = require("../../utils/getIpfs").addToIpfs;
  const content = getMonitoringMockData();
  const results = await addToIpfs(content);

  res.json({"hashCode": `${results[0].hash}`});
});

/* GET device monitoring data hash by id. */
router.get('/monitoringDataHash/deviceId/:device_id', async (req, res) => {
  let deviceProfileResponse = await deviceProfilesContractInstance.methods.getMonitoringDataByDeviceId(req.params.device_id).call();
  let jsonArrayResponse = [];
  if (deviceProfileResponse != null) {
    const totalHashCount = deviceProfileResponse.length;
    for (let i = 0; i < totalHashCount; i++) {
      jsonArrayResponse[i] = deviceProfileResponse[i];
    }
  }
  res.json({"monitoringDeviceDataHash": jsonArrayResponse});
});

/* GET device monitoring data content by hash. */
router.get('/monitoringDataContent/hash/:hash', async (req, res) => {
  const getFromIpfsByHash = require("../../utils/getIpfs").getFromIpfsByHash;
  const content = await getFromIpfsByHash(req.params.hash);
  res.json({"hashContent": content.toString()});
});

/* GET device monitoring data content by id. (TOP 10) */
router.get('/monitoringDataContent/deviceId/:device_id', async (req, res) => {
  let deviceProfileResponse = await deviceProfilesContractInstance.methods.getMonitoringDataByDeviceId(req.params.device_id).call();
  let jsonArrayResponse = [];
  if (deviceProfileResponse != null) {
    const totalHashCount = deviceProfileResponse.length;
    for (let i = totalHashCount; i >= totalHashCount - 10; i--) {
      try {
        const getFromIpfsByHash = require("../../utils/getIpfs").getFromIpfsByHash;
        jsonArrayResponse[totalHashCount - i - 1] = (await getFromIpfsByHash(deviceProfileResponse[i])).toString();
      } catch (ex) {
        console.error(`Error occured in reading data for ${req.params.device_id} - hashCode: ${deviceProfileResponse[i]}`);
      }
    }
  }
  res.json({"monitoringDeviceDataContent": jsonArrayResponse});
});

const initializeDeviceProfileContractInstance = (deviceProfilesContract) => {
  deviceProfilesContractInstance = deviceProfilesContract;
};

module.exports = {router, initializeDeviceProfileContractInstance};