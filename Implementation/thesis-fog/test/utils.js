const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const getAddDeviceLogFilePath = (usersCount) => `${__dirname}/logs/add_device/log_addDevice_${usersCount}.txt`;

const getAddDeviceLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txHash, gasUsed, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txHash=${txHash}  txStage=${txStage}  gasUsed=${gasUsed}\n`;
};

const getAddAttributeLogFilePath = (usersCount) => `${__dirname}/logs/add_attribute/log_addAttribute_${usersCount}.txt`;

const getAddAttributeLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txHash, gasUsed, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txHash=${txHash}  txStage=${txStage}  gasUsed=${gasUsed}\n`;
};

const getFetchDevicesLogFilePath = (usersCount) => `${__dirname}/logs/fetch_devices/log_fetchDevices_${usersCount}.txt`;

const getFetchDevicesLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txStage=${txStage}\n`;
};

module.exports = {
  generateUUID,
  getAddDeviceLogFilePath,
  getAddDeviceLogRowTemplate,
  getAddAttributeLogFilePath,
  getAddAttributeLogRowTemplate,
  getFetchDevicesLogFilePath,
  getFetchDevicesLogRowTemplate,
};