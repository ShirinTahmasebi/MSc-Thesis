const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const getDeviceProfileContractEvents = require("./utils/getContracts").getDeviceProfileContractEvents;
const getDeviceMockData = require("./utils/generateMockData").getDeviceMockData;
const CronJob = require('cron').CronJob;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

require('./routes')(app);
require('./errors')(app);

const deviceInfoMap = new Map();
const updatedDeviceInfoMap = new Map();
const deviceJobMap = new Map();

const getDevicesInfoJob = new CronJob(
  // TODO: Modify time
  '0 */1 * * * *',
  // Lambda function is used - Thus, this.stop() doesn't work in this scope.
  () => {
    const date = new Date();
    console.log('Fetch device data every 1 minutes:', date);
    // TODO: Connect to smart contracts and get monitoring data
    // TODO: Add monitoring data by device id to hash map (deviceId => monitoring data)

    // Fill device map
    getDeviceMockData().forEach((value, key) => {
      deviceInfoMap.set(key, value);
      updatedDeviceInfoMap.set(key, value);
    });

    // Generate and store device monitoring job
    createAndUpdateDeviceMonitoringJobs();
  },
);
getDevicesInfoJob.start();


const createAndUpdateDeviceMonitoringJobs = () => {
  updatedDeviceInfoMap.forEach((value, key) => {
    if (deviceJobMap.get(key) !== undefined) {
      console.log('Previous monitoring job stopped - deviceId: ', key);
      deviceJobMap.get(key).stop();
    }

    // TODO: Set time based on samplingRateMinute field in value
    const job = new CronJob('0 */1 * * * *', () => {
      const date = new Date();
      console.log('Fetch monitoring data every 1 minutes: ', date, ', deviceId: ', key);
    });
    job.start();

    deviceJobMap.set(key, job);
  });
};

const createEventWatcher = async () => {
  const deviceProfileContractEvents = await getDeviceProfileContractEvents();
  console.log(deviceProfileContractEvents.events);
  deviceProfileContractEvents.events.DeviceAdded({
    fromBlock: 0,
  }, (error, event) => {
    if (error) {
      console.log(error);
    }
    console.log(event);
  });
};

createEventWatcher();

module.exports = app;
