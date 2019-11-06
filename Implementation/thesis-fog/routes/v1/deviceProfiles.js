const express = require('express');
const getWeb3 = require("../../utils/getWeb3").getWeb3;
const router = express.Router();
let deviceProfilesContractInstance;

/* GET device profile by id. */
router.get('/deviceId/:device_id', async (req, res, next) => {
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


/* GET device profile by id. */
router.get('/addTestDevice', async (req, res, next) => {
  const web3 = getWeb3();
  const accounts = await web3.eth.getAccounts();
  await deviceProfilesContractInstance.methods.addDevice("1.1.1.1", "model 1", 1).send({from: accounts[0]});
  res.json({"result": "ok"});
});

const initializeDeviceProfileContractInstance = (deviceProfilesContract) => {
  deviceProfilesContractInstance = deviceProfilesContract;
};

module.exports = {router, initializeDeviceProfileContractInstance};