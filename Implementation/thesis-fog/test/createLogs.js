const getWeb3 = require("../utils/getWeb3").getWeb3;
const getDeviceProfileContract = require("../utils/getContracts").getDeviceProfileContract;
const generateUUID = require("./utils").generateUUID;
const getAddDeviceLogFilePath = require("./utils").getAddDeviceLogFilePath;
const getAddDeviceLogRowTemplate = require("./utils").getAddDeviceLogRowTemplate;
const getAddAttributeLogFilePath = require("./utils").getAddAttributeLogFilePath;
const getAddAttributeLogRowTemplate = require("./utils").getAddAttributeLogRowTemplate;
const getFetchAttributesLogFilePath = require("./utils").getFetchAttributesLogFilePath;
const getFetchAttributesLogRowTemplate = require("./utils").getFetchAttributesLogRowTemplate;
const getFetchIpfsHashesLogFilePath = require("./utils").getFetchIpfsHashesLogFilePath;
const getFetchIpfsHashesLogRowTemplate = require("./utils").getFetchIpfsHashesLogRowTemplate;
const getFetchIpfsContentsLogFilePath = require("./utils").getFetchIpfsContentsLogFilePath;
const getFetchIpfsContentsLogRowTemplate = require("./utils").getFetchIpfsContentsLogRowTemplate;
const txStageEnum = require("./utils").txStageEnum;

const web3 = getWeb3();
const fs = require('fs');

const baseDeviceModel = 10000;
const accountAddress = "0xa99D9ee6f9a5B42bc9A91A57742eb1975c1E3526";

let deviceProfileInstance;

const createUsers = async () => {
  const accountsInfo = [];

  for (let i = 0; i < 200; i++) {
    const newAccount = await web3.eth.accounts.create();
    // TODO: Problem occurred in creating accounts
    await web3.eth.personal.unlockAccount(newAccount.address, newAccount.privateKey, 100000)
      .then(() => console.log(`Account unlocked! - Account address: ${newAccount.address}`))
      .catch(reason => console.log(reason + `: account address ${newAccount.address}`))
    ;
    accountsInfo.push({address: newAccount.address.toString(), key: newAccount.privateKey.toString()});
  }

  fs.appendFileSync("created_users_info_local_bc.txt", JSON.stringify(accountsInfo), (error) => {
    error && console.log("Error occurred in writing users to file" + error);
  });
};

const createAndLogAddDeviceMockTx = async (counter) => {
  const logFilePath = getAddDeviceLogFilePath(counter);

  // Create/Reset log file
  fs.writeFileSync(logFilePath, "");

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getAddDeviceLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, "-", "-", txStageEnum.TX_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );

    deviceProfileInstance
      .methods
      .addDevice(`${deviceId}.${deviceId}.${deviceId}.${deviceId}`, "model 1", deviceId)
      // .send({from: accountAddress})
      .send({from: accountAddress})
      .on('transactionHash', (hash) => {
        const now = new Date();
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), "-", txUUID, deviceId, accountAddress, hash, "-", txStageEnum.TX_HASH_RECEIVED),
          (err) => {
            if (err) throw err;
          },);
      })
      .on('receipt', (receipt) => {
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, receipt.gasUsed, txStageEnum.TX_RECEIPT_RECEIVED),
          (err) => {
            if (err) throw err;
          },
        );
        // }).on('confirmation', (confirmationNumber, receipt) => {
        // if (confirmationNumber === 1) {
        //   let txStageEnum;
        //   fs.appendFile(
        //     logFilePath,
        //     getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, receipt.gasUsed, txStageEnum.TX_RECEIPT_CONFIRMED_1),
        //     (err) => {
        //       if (err) throw err;
        //     },
        //   );
        // }
      }).on('error', (receipt) => {
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, receipt.gasUsed, txStageEnum.TX_ERROR),
          (err) => {
            if (err) throw err;
          },);
      },
    );

  }
};

const createAndLogAddAttributeMockTx = async (counter) => {
  const logFilePath = getAddAttributeLogFilePath(counter);

  // Create/Reset log file
  fs.writeFileSync(logFilePath, "");

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getAddAttributeLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, "-", "-", txStageEnum.TX_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );

    const minThreshold = 10;
    const maxThreshold = 100;
    const minViolationCount = 5;
    const maxViolationCount = 10;
    const minCritically = 1;
    const maxCritically = 2;

    deviceProfileInstance
      .methods
      .addAttributeToDeviceById(
        deviceId, `Attribute Name ${deviceId}`,
        minThreshold, minViolationCount, minCritically,
        maxThreshold, maxViolationCount, maxCritically,
      ).send({from: accountAddress})
      .on('transactionHash', (hash) => {
        const now = new Date();
        fs.appendFile(
          logFilePath,
          getAddAttributeLogRowTemplate(now, now.getTime(), "-", txUUID, deviceId, accountAddress, hash, "-", txStageEnum.TX_HASH_RECEIVED),
          (err) => {
            if (err) throw err;
          },);
      })
      .on('receipt', (receipt) => {
        fs.appendFile(
          logFilePath,
          getAddAttributeLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, receipt.gasUsed, txStageEnum.TX_RECEIPT_RECEIVED),
          (err) => {
            if (err) throw err;
          },
        );
      })
      .on('error', (receipt) => {
          fs.appendFile(
            logFilePath,
            getAddAttributeLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, receipt.gasUsed, txStageEnum.TX_ERROR),
            (err) => {
              if (err) throw err;
            },);
        },
      );

  }
};

const createAndLogFetchAttributesMockCall = async (counter) => {
  const logFilePath = getFetchAttributesLogFilePath(counter);

  // Create/Reset log file
  fs.writeFileSync(logFilePath, "");

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getFetchAttributesLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );

    deviceProfileInstance.methods.getDeviceAttributes(deviceId)
      .call()
      .then(value => {
        const now = new Date();
        fs.appendFile(
          logFilePath,
          getFetchAttributesLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_RECEIVED_RESPONSE),
          (err) => {
            if (err) throw err;
          },
        );
      });
  }
};

const createAndLogFetchIpfsHashesMockCall = async (counter) => {
  const logFilePath = getFetchIpfsHashesLogFilePath(counter);

  // Create/Reset log file
  fs.writeFileSync(logFilePath, "");

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getFetchIpfsHashesLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );

    deviceProfileInstance.methods.getMonitoringDataByDeviceId(deviceId)
      .call()
      .then(value => {
        const now = new Date();
        fs.appendFile(
          logFilePath,
          getFetchIpfsHashesLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_RECEIVED_RESPONSE),
          (err) => {
            if (err) throw err;
          },
        );
      });
  }
};

const createAndLogFetchIpfsContentsMockCall = async (counter) => {
  const logFilePath = getFetchIpfsContentsLogFilePath(counter);

  // Create/Reset log file
  fs.writeFileSync(logFilePath, "");

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getFetchIpfsContentsLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );


    deviceProfileInstance.methods.getMonitoringDataByDeviceId(deviceId)
      .call()
      .then(async deviceProfileResponse => {
        const now = new Date();
        let jsonArrayResponse = [];
        if (deviceProfileResponse != null) {
          const totalHashCount = deviceProfileResponse.length;
          for (let i = totalHashCount; i >= totalHashCount - 10; i--) {
            try {
              const getFromIpfsByHash = require("../utils/getIpfs").getFromIpfsByHash;
              jsonArrayResponse[totalHashCount - i - 1] = (await getFromIpfsByHash(deviceProfileResponse[i])).toString();
            } catch (ex) {
              console.error(`Error occured in reading data for ${deviceId} - hashCode: ${deviceProfileResponse[i]}`);
            }
          }
        }
        fs.appendFile(
          logFilePath,
          getFetchIpfsContentsLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, txStageEnum.CALL_RECEIVED_RESPONSE),
          (err) => {
            if (err) throw err;
          },
        );
      });
  }
};

const init = async () => {
  const shouldCreateUsers = false;
  shouldCreateUsers && createUsers();

  // TODO: Uncomment later if necessary
  // const data = fs.readFileSync('created_users_info_local_bc.txt');
  // accountsInfo = JSON.parse(data);

  deviceProfileInstance = await getDeviceProfileContract();
};

const main = async () => {
  await init();
  await createAndLogAddDeviceMockTx(50);
  await createAndLogAddDeviceMockTx(100);
  await createAndLogAddDeviceMockTx(150);
  await createAndLogAddDeviceMockTx(200);
  // await createAndLogAddDeviceMockTx(300);
  // await createAndLogAddDeviceMockTx(500);
  // await createAndLogAddDeviceMockTx(1000);

  await createAndLogAddAttributeMockTx(50);
  await createAndLogAddAttributeMockTx(100);
  await createAndLogAddAttributeMockTx(150);
  await createAndLogAddAttributeMockTx(200);
  // await createAndLogAddAttributeMockTx(300);
  // await createAndLogAddAttributeMockTx(500);
  // await createAndLogAddAttributeMockTx(1000);

  await createAndLogFetchAttributesMockCall(50);
  await createAndLogFetchAttributesMockCall(100);
  await createAndLogFetchAttributesMockCall(150);
  await createAndLogFetchAttributesMockCall(200);
  // // await createAndLogFetchAttributesMockCall(300);
  // // await createAndLogFetchAttributesMockCall(500);
  // // await createAndLogFetchAttributesMockCall(1000);
  // // await createAndLogFetchAttributesMockCall(5000);
  //
  await createAndLogFetchIpfsHashesMockCall(50);
  await createAndLogFetchIpfsHashesMockCall(100);
  await createAndLogFetchIpfsHashesMockCall(150);
  await createAndLogFetchIpfsHashesMockCall(200);
  // await createAndLogFetchIpfsHashesMockCall(300);
  // await createAndLogFetchIpfsHashesMockCall(500);
  // await createAndLogFetchIpfsHashesMockCall(1000);

  // await createAndLogFetchIpfsContentsMockCall(50);
  // await createAndLogFetchIpfsContentsMockCall(100);
  // await createAndLogFetchIpfsContentsMockCall(150);
  // await createAndLogFetchIpfsContentsMockCall(200);
  // await createAndLogFetchIpfsContentsMockCall(300);
  // await createAndLogFetchIpfsContentsMockCall(500);
  // await createAndLogFetchIpfsContentsMockCall(1000);

};


main();