const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const getWeb3 = require('../../utils/getWeb3.js');
  const web3 = await getWeb3.getWeb3();
  // Use web3 to get the user's accounts.
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  res.json({"accounts": accounts});
});

module.exports = router;