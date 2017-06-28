var crypto = require('crypto');
var ethUtil = require('expansejs-util');
var ecdsa = require('secp256k1');

var privateKey = crypto.randomBytes(32);
console.log('Your Private Key Is:');
console.log(privateKey.toString('hex'));

var publicKey = ecdsa.createPublicKey(privateKey);
var address = ethUtil.pubToAddress(publicKey).toString('hex');

console.log('Your Expanse address is:');
console.log(address);
