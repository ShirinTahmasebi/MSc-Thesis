const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const getDeviceProfileContractEvents = require("./utils/getContracts").getDeviceProfileContractEvents;
const CronJob = require('cron').CronJob;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

require('./routes')(app);
require('./errors')(app);

const deviceInfoMap = new Map();
const deviceJobMap = new Map();
let updatedDeviceInfoMap = new Map();
let deprecatedDeviceInfoList = [];

const getDevicesInfoJob = new CronJob(
  '0 */1 * * * *',
  // Lambda function is used - Thus, this.stop() doesn't work in this scope.
  () => {
    const date = new Date();
    console.log('Fetch device data every 1 minutes:', date);

    // Generate and store device monitoring job
    createAndUpdateDeviceMonitoringJobs();
  },
);
getDevicesInfoJob.start();


const createAndUpdateDeviceMonitoringJobs = () => {
  // Delete deprecated device monitoring jobs
  deprecatedDeviceInfoList.forEach((value, key) => {
    console.log('Previous monitoring job stopped - deviceId: ', key);
    deviceJobMap.get(key) && deviceJobMap.get(key).stop();
  });

  // Create job for newly added or updated devices
  updatedDeviceInfoMap.forEach((value, key) => {
    // TODO: Set time based on samplingRateMinute field in value
    const job = new CronJob('0 */1 * * * *', () => {
      const date = new Date();
      console.log('Fetch monitoring data every 1 minutes: ', date, ', deviceId: ', key);
    });
    job.start();

    deviceJobMap.set(key, job);
  });

  // Reset variables
  deprecatedDeviceInfoList = [];
  updatedDeviceInfoMap = new Map();
};

const createEventWatcher = async () => {
  const deviceProfileContractEvents = await getDeviceProfileContractEvents();
  deviceProfileContractEvents.events.DeviceAdded({fromBlock: 0}, (error, event) => {
    error && console.log(error);
    const deviceInfo = {
      deviceId: event.returnValues.deivceId,
      deviceIp: event.returnValues.deviceIp,
      deviceModel: event.returnValues.deviceModel,
    };
    deviceInfoMap.get(deviceInfo.deviceId) && deprecatedDeviceInfoList.push(deviceInfo.deviceId);
    deviceInfoMap.set(deviceInfo.deviceId, {deviceIp: deviceInfo.deviceIp, deviceModel: deviceInfo.deviceModel});
    updatedDeviceInfoMap.set(deviceInfo.deviceId, {deviceIp: deviceInfo.deviceIp, deviceModel: deviceInfo.deviceModel});
  });
};

createEventWatcher();

module.exports = app;
