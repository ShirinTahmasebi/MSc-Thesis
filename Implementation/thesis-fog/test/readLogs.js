const txStageEnum = require("./utils").txStageEnum;

const txTypeRegex = /(?:.*)txStage=(.*)\s\s(?:.*)/;
const txSubmittedRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=(\d+)\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxStage=TX_SUBMITTED\s\sgasUsed=\-[\n|\r|\r\n]?/;
const txHashReceivedRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=\-\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxStage=TX_HASH_RECEIVED\s\sgasUsed=\-[\n|\r|\r\n]?/;
const txReceiptReceivedRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=(\d*)\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxHash=(.*)\s\stxStage=TX_RECEIPT_RECEIVED\s\sgasUsed=(\d*)[\n|\r|\r\n]?/;
const txFirstConfirmationRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=(\d*)\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxHash=(.*)\s\stxStage=TX_RECEIPT_CONFIRMED_1\s\sgasUsed=(\d*)[\n|\r|\r\n]?/;

const callTypeRegex = /(?:.*)txStage=(.*)/;
const callSubmittedResponseRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=(\d*)\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxStage=CALL_SUBMITTED[n|\r|\r\n]?/;
const callReceivedResponseRegex = /Date=(.*)\s\stimestamp=(\d+)\s\sblockNumber=(\d*)\s\stxUUID=(.*)\s\sdeviceId=(\d*)\s\saccountIndex=(.*)\s\stxStage=CALL_RECEIVED_RESPONSE[n|\r|\r\n]?/;

const getAddDeviceLogFilePath = require("./utils").getAddDeviceLogFilePath;
const getAddAttributeLogFilePath = require("./utils").getAddAttributeLogFilePath;
const getFetchAttributesLogFilePath = require("./utils").getFetchAttributesLogFilePath;
const getFetchIpfsHashesLogFilePath = require("./utils").getFetchIpfsHashesLogFilePath;

const calculateReadCallStatistics = (size, getFileName) => {

  const submitCall = {};
  const receiveResponseCall = {};

  require('fs').readFileSync(getFileName(size), 'utf-8')
    .split('\n')
    .map(line => {
      const txType = line.match(callTypeRegex);
      if (!txType) return;
      const txTypeStr = txType[1];

      if (txTypeStr === txStageEnum.CALL_SUBMITTED.toString()) {
        const matched = line.match(callSubmittedResponseRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const blockNumber = matched[3];
        const txUUID = matched[4];
        const deviceId = matched[5];
        const accountIndex = matched[6];
        submitCall[txUUID] = {date, timestamp, blockNumber, deviceId, accountIndex};
      } else if (txTypeStr === txStageEnum.CALL_RECEIVED_RESPONSE.toString()) {
        const matched = line.match(callReceivedResponseRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const blockNumber = matched[3];
        const txUUID = matched[4];
        const deviceId = matched[5];
        const accountIndex = matched[6];
        receiveResponseCall[txUUID] = {date, timestamp, blockNumber, deviceId, accountIndex};
      }
    });

  let totalExecutionTimeDiff = 0;
  for (let submissionInfo in submitCall) {
    const start = submitCall[submissionInfo].timestamp;
    const end = receiveResponseCall[submissionInfo].timestamp;
    totalExecutionTimeDiff += (end - start);
    console.log(`Start = ${start}   Mined = ${end}    Diff = ${end - start}`);
  }


  const averageExecutionTime = totalExecutionTimeDiff / size;
  console.log(`Size = ${size} - Average execution time = ${averageExecutionTime}ms`);

  console.log('---------------------------------------');
};

const calculateWriteTxStatistics = (size, getFileName) => {

  const addDeviceLogSubmissionInfo = {};
  const addDeviceLogHashReceivedInfo = {};
  const addDeviceLogReceiptReceivedInfo = {};
  const addDeviceLogFirstConfirmationInfo = {};

  require('fs').readFileSync(getFileName(size), 'utf-8')
    .split('\n')
    .map(line => {
      const txType = line.match(txTypeRegex);
      if (!txType) return;
      const txTypeStr = txType[1];

      if (txTypeStr === txStageEnum.TX_SUBMITTED.toString()) {
        const matched = line.match(txSubmittedRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const blockNumber = matched[3];
        const txUUID = matched[4];
        const deviceId = matched[5];
        const accountIndex = matched[6];
        addDeviceLogSubmissionInfo[txUUID] = {date, timestamp, blockNumber, deviceId, accountIndex};
      } else if (txTypeStr === txStageEnum.TX_HASH_RECEIVED.toString()) {
        const matched = line.match(txHashReceivedRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const txUUID = matched[3];
        const deviceId = matched[4];
        const accountIndex = matched[5];
        addDeviceLogHashReceivedInfo[txUUID] = {date, timestamp, deviceId, accountIndex};
      } else if (txTypeStr === txStageEnum.TX_RECEIPT_RECEIVED.toString()) {
        const matched = line.match(txReceiptReceivedRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const blockNumber = matched[3];
        const txUUID = matched[4];
        const deviceId = matched[5];
        const accountIndex = matched[6];
        const txHash = matched[7];
        const gasUsed = matched[8];
        addDeviceLogReceiptReceivedInfo[txUUID] = {
          date,
          timestamp,
          blockNumber,
          deviceId,
          accountIndex,
          txHash,
          gasUsed,
        };
      } else if (txTypeStr === txStageEnum.TX_RECEIPT_CONFIRMED_1.toString()) {
        const matched = line.match(txFirstConfirmationRegex);
        const date = matched[1];
        const timestamp = matched[2];
        const blockNumber = matched[3];
        const txUUID = matched[4];
        const deviceId = matched[5];
        const accountIndex = matched[6];
        const txHash = matched[7];
        const gasUsed = matched[8];
        addDeviceLogFirstConfirmationInfo[txUUID] = {
          date,
          timestamp,
          blockNumber,
          deviceId,
          accountIndex,
          txHash,
          gasUsed,
        };
      }
    });

  let totalExecutionTimeDiff = 0;
  for (let submissionInfo in addDeviceLogSubmissionInfo) {
    const start = addDeviceLogSubmissionInfo[submissionInfo].timestamp;
    const end = addDeviceLogHashReceivedInfo[submissionInfo].timestamp;
    totalExecutionTimeDiff += (end - start);
  }

  const averageExecutionTime = totalExecutionTimeDiff / size;
  console.log(`Size = ${size} - Average execution time = ${Math.round(averageExecutionTime / 1000)}s`);

  let totalMiningTimeDiff = 0;
  for (let submissionInfo in addDeviceLogSubmissionInfo) {
    const start = addDeviceLogSubmissionInfo[submissionInfo].blockNumber;
    const mined = addDeviceLogReceiptReceivedInfo[submissionInfo].blockNumber;
    totalMiningTimeDiff += (mined - start);
    // console.log(`Start = ${start}   Mined = ${mined}    Diff = ${mined - start}`);
  }

  const averageMiningTime = totalMiningTimeDiff / size;
  console.log(`Size = ${size} - Average Mining time = ${averageMiningTime} blocks`);

  let totalGasUsed = .0;
  for (let submissionInfo in addDeviceLogSubmissionInfo) {
    totalGasUsed += (addDeviceLogFirstConfirmationInfo[submissionInfo].gasUsed / 100);
    // console.log(addDeviceLogFirstConfirmationInfo[submissionInfo].gasUsed);
  }

  const averageGasUsed = totalGasUsed * 100 / size;
  console.log(`Size = ${size} - Average Gas Used = ${averageGasUsed}`);


  let totalFirstConfirmationTimeDiff = 0;
  for (let submissionInfo in addDeviceLogSubmissionInfo) {
    const start = addDeviceLogSubmissionInfo[submissionInfo].blockNumber;
    const firstConfirm = addDeviceLogFirstConfirmationInfo[submissionInfo].blockNumber;
    totalFirstConfirmationTimeDiff += (firstConfirm - start);
    // console.log(`Start = ${start}   Mined = ${mined}    Diff = ${mined - start}`);
  }

  const averageConfirmationTime = totalFirstConfirmationTimeDiff / size;
  console.log(`Size = ${size} - Average Confirmation Time = ${averageConfirmationTime} blocks`);

  console.log('---------------------------------------');
};

calculateReadCallStatistics(50, getFetchAttributesLogFilePath);
calculateReadCallStatistics(100, getFetchAttributesLogFilePath);
calculateReadCallStatistics(150, getFetchAttributesLogFilePath);
calculateReadCallStatistics(200, getFetchAttributesLogFilePath);
calculateReadCallStatistics(300, getFetchAttributesLogFilePath);
calculateReadCallStatistics(500, getFetchAttributesLogFilePath);
calculateReadCallStatistics(1000, getFetchAttributesLogFilePath);

calculateReadCallStatistics(50, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(100, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(150, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(200, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(300, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(500, getFetchIpfsHashesLogFilePath);
calculateReadCallStatistics(1000, getFetchIpfsHashesLogFilePath);

calculateWriteTxStatistics(50, getAddDeviceLogFilePath);
calculateWriteTxStatistics(100, getAddDeviceLogFilePath);
calculateWriteTxStatistics(150, getAddDeviceLogFilePath);
calculateWriteTxStatistics(200, getAddDeviceLogFilePath);
// calculateWriteTxStatistics(300, getAddDeviceLogFilePath);
// calculateWriteTxStatistics(500, getAddDeviceLogFilePath);
// calculateWriteTxStatistics(1000, getAddDeviceLogFilePath);

calculateWriteTxStatistics(50, getAddAttributeLogFilePath);
calculateWriteTxStatistics(100, getAddAttributeLogFilePath);
calculateWriteTxStatistics(150, getAddAttributeLogFilePath);
calculateWriteTxStatistics(200, getAddAttributeLogFilePath);
// calculateWriteTxStatistics(300, getAddAttributeLogFilePath);
// calculateWriteTxStatistics(500, getAddAttributeLogFilePath);
// calculateWriteTxStatistics(1000, getAddAttributeLogFilePath);