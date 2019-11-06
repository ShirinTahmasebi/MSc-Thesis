const version = 'v1';
const baseURL = `/api/${version}`;

module.exports = async (app) => {
  require("../utils/getContracts").getDeviceProfileContract().then(deviceProfileInstance => {
    require(`./${version}/deviceProfiles`).initializeDeviceProfileContractInstance(deviceProfileInstance);
  });
  app.use(`${baseURL}/`, require(`./${version}/index`));
  app.use(`${baseURL}/deviceProfiles`, require(`./${version}/deviceProfiles`).router);
};