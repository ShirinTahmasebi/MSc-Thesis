const express = require('express');
const SimpleStorageContract = require('../../contracts/SimpleStorage');
const router = express.Router();

/* GET simple storage value. */
router.get('/', async (req, res, next) => {
  const getWeb3 = require('../../utils/getWeb3.js');
  const web3 = await getWeb3.getWeb3();
  const simpleStorageContractInstance = await getWeb3.getContractInstance(web3, SimpleStorageContract);
  let simpleStorageResponse = await simpleStorageContractInstance.methods.get().call();
  res.json({"value": simpleStorageResponse});
});

module.exports = router;