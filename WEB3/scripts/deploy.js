// const hre = require("hardhat");

async function main(){
  // bootoken
    const [BooToken] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", BooToken.address);
  
    const booToken = await ethers.deployContract("BooToken");
  
    console.log("Boo Token address:", await booToken.getAddress());
  
  // Lifetoken
    const [LifeToken] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", LifeToken.address);
  
    const lifeToken = await ethers.deployContract("LifeToken");
  
    console.log("Life Token address:", await lifeToken.getAddress());

  // SingleSwapToken

    const [SingleSwapToken] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", SingleSwapToken.address);
  
    const singleSwapToken = await ethers.deployContract("SingleSwapToken");
  
    console.log("SingleSwap address:", await singleSwapToken.getAddress());

  // SwapMultiHop
    const [SwapMultiHop] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", SwapMultiHop.address);
  
    const swapMultiHop = await ethers.deployContract("SwapMultiHop");
  
    console.log("MultiHopSwap address:", await swapMultiHop.getAddress());

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });