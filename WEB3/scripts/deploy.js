const { ethers } = require("hardhat");

async function deployMyDEX() {
  try {
    // Get the contract factories
    const MyDEX = await ethers.getContractFactory("MyDEX");

    // Replace the following placeholders with actual addresses
    const positionManagerAddress = "0x..."; // Replace with the real address
    const positionDescriptorAddress = "0x..."; // Replace with the real address
    const tokenA = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI address
    const tokenB = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // ETH address
    const tokenC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC address

    // Uniswap V3 pool addresses for token pairs
    const daiEthPool = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"; // DAI-ETH pool
    const ethDaiPool = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"; // Replace with the real address
    const ethUsdcPool = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"; // Replace with the real address
    const usdcEthPool = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"; // Replace with the real address

    // Deploy the contract with constructor arguments
    const myDex = await MyDEX.deploy(
      positionManagerAddress,
      positionDescriptorAddress,
      tokenA,
      tokenB,
      tokenC
    );

    // Wait for the deployment to be confirmed
    await myDex.deployed();

    // Set Uniswap V3 pool addresses for token pairs
    await myDex.setTokenPool(tokenA, daiEthPool);
    await myDex.setTokenPool(tokenB, ethDaiPool);
    await myDex.setTokenPool(tokenB, ethUsdcPool);
    await myDex.setTokenPool(tokenC, usdcEthPool);

    console.log("MyDEX deployed to:", myDex.address);

    // Log the ABI
    const abi = MyDEX.interface.format("json");
    console.log("MyDEX ABI:");
    console.log(JSON.stringify(abi, null, 2));

    return myDex;
  } catch (error) {
    console.error("Error deploying MyDEX:", error);
    throw error;
  }
}

// async function main() {
//   try {
//     // Deploy the MyDEX contract
//     const myDex = await deployMyDEX();

//     // Perform additional actions after deployment if needed
//     // For example, you can call functions on the deployed contract here

//     // Example: Call a function on the deployed contract
//     // const result = await myDex.someFunction();

//     // Handle the result or perform other actions as needed

//     process.exit(0);
//   } catch (error) {
//     console.error("Deployment failed:", error);
//     process.exit(1);
//   }
// }

// main();
