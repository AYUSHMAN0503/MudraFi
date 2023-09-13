require("@nomicfoundation/hardhat-toolbox");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    // Define your network configurations here
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    //   accounts: ["0xYOUR_PRIVATE_KEY"], // Replace with your Rinkeby account's private key
    // },
    mainnet: {
      url: "https://mainnet.infura.io/v3/65f6c8d9348d401885c820627abf8607",
      accounts: ["0x34ff93ad2bda74605e760b93c999142ad521cb8bd836ef0c1785ed1e360f3399"], // Replace with your Mainnet account's private key
    },
  },
  solidity: {
    version: "0.8.0", // Specify your preferred Solidity version here
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
