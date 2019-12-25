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

const getFetchAttributesLogFilePath = (usersCount) => `${__dirname}/logs/fetch_attributes/log_fetchAttributes_${usersCount}.txt`;

const getFetchAttributesLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txStage=${txStage}\n`;
};

const getFetchIpfsHashesLogFilePath = (usersCount) => `${__dirname}/logs/fetch_ipfs_hashes/log_fetchIpfsHashes_${usersCount}.txt`;

const getFetchIpfsHashesLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txStage=${txStage}\n`;
};

const getFetchIpfsContentsLogFilePath = (usersCount) => `${__dirname}/logs/fetch_ipfs_contents/log_fetchIpfsContents_${usersCount}.txt`;

const getFetchIpfsContentsLogRowTemplate = (date, timestamp, blockNumber, txUUID, deviceId, accountAddress, txStage) => {
  return `Date=${date}  timestamp=${timestamp}  blockNumber=${blockNumber}  txUUID=${txUUID}  deviceId=${deviceId}  accountIndex=${accountAddress}  txStage=${txStage}\n`;
};

const txStageEnum = {
  TX_SUBMITTED: 'TX_SUBMITTED',
  TX_HASH_RECEIVED: 'TX_HASH_RECEIVED',
  TX_RECEIPT_RECEIVED: 'TX_RECEIPT_RECEIVED',
  TX_RECEIPT_CONFIRMED_1: 'TX_RECEIPT_CONFIRMED_1',
  TX_ERROR: 'TX_ERROR',
  CALL_SUBMITTED: 'CALL_SUBMITTED',
  CALL_RECEIVED_RESPONSE: 'CALL_RECEIVED_RESPONSE',
};

module.exports = {
  generateUUID,
  getAddDeviceLogFilePath,
  getAddDeviceLogRowTemplate,
  getAddAttributeLogFilePath,
  getAddAttributeLogRowTemplate,
  getFetchAttributesLogFilePath,
  getFetchAttributesLogRowTemplate,
  getFetchIpfsHashesLogFilePath,
  getFetchIpfsHashesLogRowTemplate,
  getFetchIpfsContentsLogFilePath,
  getFetchIpfsContentsLogRowTemplate,
  txStageEnum
};