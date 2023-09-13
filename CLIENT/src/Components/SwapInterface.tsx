import React, { useState } from "react";
const { ethers } = require('ethers');

const Swap: React.FC = () => {
  const [inputToken, setInputToken] = useState("");
  const [outputToken, setOutputToken] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  // const handleSwap = () => {
  //   // Swap logic here
  //   setOutputAmount(inputAmount);
  //   setInputAmount("");
  // };

  const handleSwap = async () => {
    try {
      // Ensure input and output amounts are valid and greater than zero
      const inputAmountFloat = parseFloat(inputAmount);
      const outputAmountFloat = parseFloat(outputAmount);
  
      if (isNaN(inputAmountFloat) || isNaN(outputAmountFloat) || inputAmountFloat <= 0 || outputAmountFloat <= 0) {
        throw new Error('Invalid input or output amount');
      }
  
      // Initialize ethers provider (e.g., Infura)
      const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/65f6c8d9348d401885c820627abf8607');
  
      // Set your contract address and ABI
      const contractAddress = '0x...'; // Replace with your contract's address
      const contractABI = [...]; // Replace with your contract's ABI
  
      // Create a contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
      // Determine the input and output tokens (addresses)
      const inputTokenAddress = ethers.utils.getAddress(inputToken);
      const outputTokenAddress = ethers.utils.getAddress(outputToken);
  
      // Convert inputAmount to Wei or other units based on the token
      const inputAmountInWei = ethers.utils.parseUnits(inputAmount, 'wei');
      const outputAmountInWei = ethers.utils.parseUnits(outputAmount, 'wei');
  
      // Get the user's wallet or connect to a wallet provider like MetaMask
      const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Replace with your private key
  
      // Call your contract's swapTokens function
      const tx = await contract.connect(wallet).swapTokens(
        inputTokenAddress,
        outputTokenAddress,
        inputAmountInWei,
        outputAmountInWei
      );
  
      // Wait for the transaction to be mined and get the receipt
      const receipt = await tx.wait();
  
      // Check if the transaction was successful
      if (receipt.status !== 1) {
        throw new Error('Transaction failed');
      }
  
      // Handle the transaction receipt (e.g., display success message, update balances)
      console.log('Transaction successful:', receipt);
  
      // Clear input fields or update UI as needed
      setInputAmount('');
      setOutputAmount('');
    } catch (error) {
      console.error('Swap failed:', error);
      // Optionally, display an error message to the user
    }
  };
  

  const containerStyle = {
    boxShadow: "0 0 10px ",
    width: "90%",
    maxWidth: "600px",
    margin: "0 auto",
    background: "#1F1F1F",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-app-bg">
      <div
        style={containerStyle}
        className="container mx-auto p-5 bg-white rounded shadow-lg h-96 border-orange-400 border-3 shadow-xl hover:border-orange-500 hover:shadow-2xl transition duration-500 ease-in-out rounded-lg h-1/2 "
      >
        <h1 className="text-3xl font-bold mb-5 text-orange-400">Swap</h1>
        <div className="mb-5 ">
          <label className="block text-gray-700">From (estimated)</label>
          <div className="mt-1 relative rounded-md shadow-sm ">
            <input
              type="text"
              placeholder="0.0"
              className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5 text-xl h-20 rounded-lg bg-gradient-to-r from-gray-600 to-gray-400"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <label className="sr-only">Currency</label>
              <select
                aria-label="Currency"
                className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5 text-lg"
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
              >
                {/* Replace with your list of tokens */}
                <option>ETH</option>
                <option>DAI</option>
                <option>USDC</option>
                {/* <option>WBTC</option>A */}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700">To (estimated)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              placeholder="0.0"
              className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5 text-xl h-20 rounded-lg  bg-gradient-to-r from-gray-600 to-gray-400"
              value={outputAmount}
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <label className="sr-only">Currency</label>
              <select
                aria-label="Currency"
                className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5 text-lg "
                value={outputToken}
                onChange={(e) => setOutputToken(e.target.value)}
              >
                {/* Replace with your list of tokens */}
                <option>ETH</option>
                <option>DAI</option>
                <option>USDC</option>
                {/* <option>WBTC</option> */}
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={handleSwap}
          className="w-full py-4 px-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mt-4"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
