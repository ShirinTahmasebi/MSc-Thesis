const express = require('express');
const DeviceProfilesContract = require('../../contracts/DeviceProfiles');
const router = express.Router();

/* GET device profile by id. */
router.get('/deviceId/:device_id', async (req, res, next) => {
  const getWeb3 = require('../../utils/getWeb3.js');
  const web3 = await getWeb3.getWeb3();
  const deviceProfilesContractInstance = await getWeb3.getContractInstance(web3, DeviceProfilesContract);
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

module.exports = router;