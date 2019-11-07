const getMonitoringMockData = (deviceId) => {
  return `{attribute1: ${deviceId} - attribute 1, attribute2: ${deviceId} - attribute 2}`;
};


module.exports = {getMonitoringMockData};