// const hre = require("hardhat");

async function main(){

  // SingleSwapToken

    const [SingleSwapToken] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", SingleSwapToken.address);
  
    const singleSwapToken = await ethers.deployContract("SingleSwapToken");
  
    console.log("SingleSwap address:", await singleSwapToken.getAddress());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });