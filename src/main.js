const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('54b4a6832684fc620cf7e7044dc6286528a6a817e6202612e4447000a458bbd7');
const myWalletAddress = myKey.getPublic('hex');

let simpleCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
simpleCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
simpleCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance is', + simpleCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', simpleCoin.isChainValid());

console.log(simpleCoin.getLatestBlock());