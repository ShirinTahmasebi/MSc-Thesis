const getWeb3 = require("../utils/getWeb3").getWeb3;
const getDeviceProfileContract = require("../utils/getContracts").getDeviceProfileContract;
const generateUUID = require("./utils").generateUUID;
const getAddDeviceLogFilePath = require("./utils").getAddDeviceLogFilePath;
const getAddDeviceLogRowTemplate = require("./utils").getAddDeviceLogRowTemplate;
const web3 = getWeb3();
const fs = require('fs');

const baseDeviceModel = 10000;
const txStageEnum = {
  TX_SUBMITTED: 'TX_SUBMITTED',
  TX_HASH_RECEIVED: 'TX_HASH_RECEIVED',
  TX_RECEIPT_RECEIVED: 'TX_RECEIPT_RECEIVED',
  TX_RECEIPT_CONFIRMED_1: 'TX_RECEIPT_CONFIRMED_1',
  TX_ERROR: 'TX_ERROR',
};

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
  const accountAddress = "0xd22f9E46718d7f3A37698490E2373BE250e4150D";

  for (let i = 0; i < counter; i++) {
    const txUUID = generateUUID();
    const deviceId = baseDeviceModel + i + 1;
    const now = new Date();
    const blockNumber = await web3.eth.getBlockNumber();

    fs.appendFile(
      logFilePath,
      getAddDeviceLogRowTemplate(now, now.getTime(), blockNumber, txUUID, deviceId, accountAddress, "-", txStageEnum.TX_SUBMITTED),
      (err) => {
        if (err) throw err;
      },
    );

    deviceProfileInstance
      .methods
      .addDevice(`${deviceId}.${deviceId}.${deviceId}.${deviceId}`, "model 1", deviceId)
      .send({from: accountAddress})
      .on('transactionHash', (hash) => {
        const now = new Date();
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), "-", txUUID, deviceId, accountAddress, hash, txStageEnum.TX_HASH_RECEIVED),
          (err) => {
            if (err) throw err;
          },);
      })
      .on('receipt', (receipt) => {
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, txStageEnum.TX_RECEIPT_RECEIVED),
          (err) => {
            if (err) throw err;
          },
        );
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        if (confirmationNumber === 1) {
          fs.appendFile(
            logFilePath,
            getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, txStageEnum.TX_RECEIPT_CONFIRMED_1),
            (err) => {
              if (err) throw err;
            },
          );
        }
      }).on('error', (receipt) => {
        fs.appendFile(
          logFilePath,
          getAddDeviceLogRowTemplate(now, now.getTime(), receipt.blockNumber, txUUID, deviceId, accountAddress, receipt.transactionHash, txStageEnum.TX_ERROR),
          (err) => {
            if (err) throw err;
          },);
      },
    );

  }
};

const init = async () => {
  const shouldCreateUsers = false;
  shouldCreateUsers && createUsers();

  // TODO: Uncomment later if necessary
  // const data = fs.readFileSync('created_users_info_local_bc.txt');
  // accountsInfo = JSON.parse(data);

  deviceProfileInstance = await getDeviceProfileContract();

  // Create/Reset log files
  fs.writeFileSync(getAddDeviceLogFilePath(50), "");
  fs.writeFileSync(getAddDeviceLogFilePath(100), "");
  fs.writeFileSync(getAddDeviceLogFilePath(150), "");
  fs.writeFileSync(getAddDeviceLogFilePath(200), "");
};

const main = async () => {
  await init();
  await createAndLogAddDeviceMockTx(50);
// createAndLogAddDeviceMockTx(100);
// createAndLogAddDeviceMockTx(150);
// createAndLogAddDeviceMockTx(200);
};


main();