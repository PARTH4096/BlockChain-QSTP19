const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('82f4d8706c4ca021c6d5606d19b7f7ac5cdc021dd7d9f01798b17fbe73f081f4');
const myWalletAddress = myKey.getPublic('hex');


let savejeeCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
savejeeCoin.addTransaction(tx1);
console.log('\n Starting the miner...');
savejeeCoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of xavier is', savejeeCoin.getBalanceOfAddress(myWalletAddress));
savejeeCoin.chain[1].transactions[0].amount=10;
console.log('Is chain valid? ', savejeeCoin.isChainValid());
//console.log(savejeeCoin.chain[1].transactions);