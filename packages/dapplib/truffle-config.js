require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy crawl pumpkin huge grace forum fringe genre'; 
let testAccounts = [
"0x5e026fbe2c133c8989c3467f80173075a3e1a3dc7548823605660a517023ce3c",
"0x431e7e809956f3e51594aa80be7bf1fe320151da5fc9497c6c5e7cda862bb295",
"0xdc3b63546cedd4115caed3b5d19d4c68e54be2a2dd79db9fcc967b6c15d13243",
"0x7d6e461b598f774ce1c87956845b96f148bfeccae7771e9d8a7d25d194551135",
"0x7c7cedc8a5d84b837ac9994bc44e34f76099f7af69ec4a2a6954c807ed21b372",
"0x2f465f032e712e3b363c7793b4e19303c1a0684df6a8bbaedc39d771d3f26e4f",
"0xc7c1e41ba1d2ba07ae0d2d78723bcb48325e5437c4c578dd5ca4d4e933b77f7d",
"0x4653723808e6b138d509c55a8f9a5a0c4ec216b283fd34bbb32a65e470a2ccf5",
"0x2b8e8255a5bc4ed6ebd4370b3e3f06d64530cc24c17191a0b4929cca1a6bff17",
"0x72ede103115b941676ae5dbe13e0448ff35d22fad51f1416fd5de46e4aa6c615"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

