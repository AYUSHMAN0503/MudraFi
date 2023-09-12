const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Contract with the account:", deployer.address);

  // Deploy the Contract
  const Contract = await ethers.getContractFactory("Contract"); 
  const contractInstance = await Contract.deploy(); // Deploy the contract
  await contractInstance.deployed(); // Wait for the contract to be mined

  console.log("Contract deployed to address:", contractInstance.address);

  console.log("Deployment complete.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
