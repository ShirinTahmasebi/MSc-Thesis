const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const getAddDeviceLogFilePath = (usersCount) => `${__dirname}/logs/add_device/log_addDevice_${usersCount}.txt`;

const getAddDeviceLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txHash, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txHash=${txHash}  txStage=${txStage}\n`;
};

module.exports = {generateUUID, getAddDeviceLogFilePath, getAddDeviceLogRowTemplate};