const getMonitoringMockData = (deviceId) => {
  const date = new Date();
  return `{attribute1: \'${deviceId} - attribute 1 - ${date}\', attribute2: \'${deviceId} - attribute 2 - ${date}\'}`;
};

module.exports = {getMonitoringMockData};