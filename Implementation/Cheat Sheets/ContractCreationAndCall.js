var ropstenAccountKey2 = "0xfbEe587D013Ac75d8C35f83f766FadC6788e1DBA";
// Highly Unsecure! - Use Node Environment Variables (process.env)
var ropstenAccountPrivateKey2 = "430715F29E026CA042DD09443DB1A12E190082EF92222C877B099CE8BEF1CEA3";

var ropstenAccountKey1 = "0x2dA6E5b273d8B3Fa4E545Dc2239203fdc292636D";
// Highly Unsecure! - Use Node Environment Variables (process.env)
var ropstenAccountPrivateKey1 = "E54FA835C7FCF858C963FB4C72A830909CECF82297FC60155FBD19CFE73D5395";

var Web3 = require("web3");
var web3 = new Web3("https://ropsten.infura.io/v3/044d4f53bdb7433f8e0442085ef38ea6");

var p1 = web3.eth.getTransactionReceipt("0xb8844fb2499837d92d2690a41377a680055b78c0c665d8e19733036b37122695");
var p2 = web3.eth.getTransactionCount(ropstenAccountKey1);

Promise.all([p1, p2]).then(values => { 

    var contractAddress = values[0].contractAddress;
    var nonce = values[1];

    console.log("contract address: " + contractAddress);
    console.log("nonce: " + nonce);

    // Get ABI
    var solc = require('solc')
     
    var input = {
        language: 'Solidity',
        sources: {
            'test.sol': {
                content: 'pragma solidity ^0.5.0; contract FirstContractNewVersion {string value; constructor() public {value = "Initial Value"; } function setValue(string memory x ) public {value = x;} function getValue() public view returns(string memory) {return value;}}'
            }
        },
        settings: {
            outputSelection: {
                '*': {
                    '*': [ '*' ]
                }
            },
            optimizer: {
              enabled: true,
              runs: 200
            },
        }
    }
     
    var output = JSON.parse(solc.compile(JSON.stringify(input)))
    var abi = output.contracts['test.sol']['FirstContractNewVersion'].abi    
    var contract = new web3.eth.Contract(abi, contractAddress);    
    
    console.log(contract.methods);
    console.log(contract.methods.getValue);
    // console.log(contract.methods.setValue('a'));

    // Build Transaction
    const txObject = {
        nonce: web3.utils.toHex(nonce),
        to: contractAddress,
        data: contract.methods.setValue("Value Changed!").encodeABI(),
        gasLimit:  web3.utils.toHex(4000000),
        gasPrice:  web3.utils.toHex(web3.utils.toWei('100', 'gwei'))
    };
    
    // Sign Transaction
    var Tx = require("ethereumjs-tx").Transaction;
    const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'});
    const privateKeyBuffer = Buffer.from(ropstenAccountPrivateKey1, "hex");
    tx.sign(privateKeyBuffer);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString('hex');
                
    // Broadcast Transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log("Transaction Hash:", txHash);
        if(txHash == undefined){
            console.log("Transaction Error:", err);
        }
    });
});