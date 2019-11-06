const getDeviceMockData = () => {
  const deviceMap = new Map();
  deviceMap.set("deviceId1", {
    deviceModel: 'raspberryPi', deviceIp: '1.1.1.1',
    samplingRateMinute: 1, softwareIpfsHash: 'IPFS_HASH',
    attributes: [
      {
        name: 'attribute1',
        minimunThreshold: 1,
        minimunViolationCount: 11,
        maximumThresold: 111,
        maximumViolationCount: 1111,
      },
      {
        name: 'attribute2',
        minimunThreshold: 2,
        minimunViolationCount: 22,
        maximumThresold: 222,
        maximumViolationCount: 2222,
      },
      {
        name: 'attribute3',
        minimunThreshold: 3,
        minimunViolationCount: 33,
        maximumThresold: 333,
        maximumViolationCount: 3333,
      },
    ],
  });

  deviceMap.set("deviceId2", {
    deviceModel: 'raspberryPi', deviceIp: '2.2.2.2',
    samplingRateMinute: 1, softwareIpfsHash: 'IPFS_HASH_2',
    attributes: [
      {
        name: 'attribute1',
        minimunThreshold: 1,
        minimunViolationCount: 11,
        maximumThresold: 111,
        maximumViolationCount: 1111,
      },
      {
        name: 'attribute2',
        minimunThreshold: 2,
        minimunViolationCount: 22,
        maximumThresold: 222,
        maximumViolationCount: 2222,
      },
      {
        name: 'attribute3',
        minimunThreshold: 3,
        minimunViolationCount: 33,
        maximumThresold: 333,
        maximumViolationCount: 3333,
      },
    ],
  });

  return deviceMap;
};


module.exports = {getDeviceMockData};