require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stomach cost often minor inflict another army gasp'; 
let testAccounts = [
"0xa917a3338c971038ce17e379c62cc7e3857e3d306b074217b0866767ed165b01",
"0xe23b55447c2ef8d239e4bdd32d132231a01735f460f7117ba9c43d7a4ca5d789",
"0xea8212357175113d45116d1a27968201830759a53ba02d77cebae5a2b2f399d3",
"0xdc6f86ac0d1cc73d30e24c6ae09c51580b0a42cb277a962c9e9d76fd48060030",
"0x97eb46fa2d2e89da7a25c514876782868a5f50a939444251171f06576306f2b0",
"0xdd66a1b1e34577dc6926db6d559bca55aac575bedb7aee3e7df66314658ef806",
"0xb495edc0e9748035b8fb5430de0f55df590efe47653c88604370c798f413de94",
"0x41aa1e2c98e7e0af4e686d956e124b58419cefb7bda25519a990e94ebfa56dca",
"0xd46ea40116ab6ade4d3391618ec348cd991753cea510c22ad1533e7b28ce9fa6",
"0x99b7bb381557af68bdf44a14b3d867c8ef57913882e8e9b07eb46f187b1bdb36"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
