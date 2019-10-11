var ropstenAccountKey2 = "0xfbEe587D013Ac75d8C35f83f766FadC6788e1DBA";
// Highly Unsecure! - Use Node Environment Variables (process.env)
var ropstenAccountPrivateKey2 = "430715F29E026CA042DD09443DB1A12E190082EF92222C877B099CE8BEF1CEA3";

var ropstenAccountKey1 = "0x2dA6E5b273d8B3Fa4E545Dc2239203fdc292636D";
// Highly Unsecure! - Use Node Environment Variables (process.env)
var ropstenAccountPrivateKey1 = "E54FA835C7FCF858C963FB4C72A830909CECF82297FC60155FBD19CFE73D5395";

var Web3 = require("web3");
var web3 = new Web3("https://ropsten.infura.io/v3/044d4f53bdb7433f8e0442085ef38ea6");

web3.eth.getBalance(ropstenAccountKey1, (err, result)=> {console.log(result);});
web3.eth.getBalance(ropstenAccountKey2, (err, result)=> {console.log(result);});


// https://github.com/ethereum/solc-js
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

// Fetch abi of the compiled contract
console.log(output.contracts['test.sol']['FirstContractNewVersion'].abi);
 
// `output` here contains the JSON output as specified in the documentation
for (var contractName in output.contracts['test.sol']) {
    console.log(contractName + ': ' + output.contracts['test.sol'][contractName].evm.bytecode.object)
}

web3.eth.getTransactionCount(ropstenAccountKey1).then(
    (transactionCount) => {
        nonce = transactionCount;
        // Build Transaction
        const txObject = {
            nonce: web3.utils.toHex(nonce),
            gasLimit:  web3.utils.toHex(4000000),
            gasPrice:  web3.utils.toHex(web3.utils.toWei('100', 'gwei')),
            data: "0x" + output.contracts['test.sol']['FirstContractNewVersion'].evm.bytecode.object
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
    }
);
