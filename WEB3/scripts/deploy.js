// const hre = require("hardhat");

async function main(){
  // ERC20 - Boo token
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`BOO deployed to ${booToken.address}`);

  // // bootoken
  //   const [BooToken] = await ethers.getSigners();
  
  //   console.log("Deploying contracts with the account:", BooToken.address);
  
  //   const booToken = await ethers.deployContract("BooToken");
  
  //   console.log("Boo Token address:", await booToken.getAddress());
  
  // // Lifetoken
  //   const [LifeToken] = await ethers.getSigners();
  
  //   console.log("Deploying contracts with the account:", LifeToken.address);
  
  //   const lifeToken = await ethers.deployContract("LifeToken");
  
  //   console.log("Life Token address:", await lifeToken.getAddress());

  // // SingleSwapToken

  //   const [SingleSwapToken] = await ethers.getSigners();
  
  //   console.log("Deploying contracts with the account:", SingleSwapToken.address);
  
  //   const singleSwapToken = await ethers.deployContract("SingleSwapToken");
  
  //   console.log("SingleSwap address:", await singleSwapToken.getAddress());

  // // SwapMultiHop
  //   const [SwapMultiHop] = await ethers.getSigners();
  
  //   console.log("Deploying contracts with the account:", SwapMultiHop.address);
  
  //   const swapMultiHop = await ethers.deployContract("SwapMultiHop");
  
  //   console.log("MultiHopSwap address:", await swapMultiHop.getAddress());
  

  // ERC20 - Life token
  const LifeToken = await hre.ethers.getContractFactory("BooToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`Life deployed to ${lifeToken.address}`);

  // SingleSwapToken
  const SingleSwapToken = await hre.ethers.getContractFactory("BooToken");
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`Life deployed to ${singleSwapToken.address}`);

  // SwapMultiHop
  const SwapMultiHop = await hre.ethers.getContractFactory("BooToken");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`Life deployed to ${swapMultiHop.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });