import React, { useState } from "react";

const Swap: React.FC = () => {
  const [inputToken, setInputToken] = useState("");
  const [outputToken, setOutputToken] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const handleSwap = () => {
    // Swap logic here
    setOutputAmount(inputAmount);
    setInputAmount("");
  };

  const containerStyle = {
    boxShadow: "0 0 10px ",
    width: "90%",
    maxWidth: "600px",
    margin: "0 auto",
    background: "#FFFFFF",
    border: "3px solid blue",
    borderRadius: "10px"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-app-bg">
      <div
        style={containerStyle}
        className="container mx-auto p-5 border-3 shadow-xl hover:shadow-2xl transition duration-500 ease-in-out rounded-lg "
      >
        <h1 className="text-3xl font-bold mb-5 text-blue-400">Swap</h1>
        <div className="mb-5 ">
          <label className="block text-black">From (estimated)</label>
          <div className="mt-1 relative rounded-md shadow-sm ">
            <input
              type="text"
              placeholder="0.0"
              className="form-input block w-full pl-7 pr-12 sm:text-sm md:text-lg lg:text-xl h-20 rounded-lg bg-gradient-to-r from-gray-200 to-cyan-300"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <label className="sr-only">Currency</label>
              <select
                aria-label="Currency"
                className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-black sm:text-sm md:text-lg lg:text-xl"
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
              >
                {/* Replace with list of tokens */}
                <option>ETH</option>
                <option>DAI</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-black">To (estimated)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              placeholder="0.0"
              className="form-input block w-full pl-7 pr-12 sm:text-sm md:text-lg lg:text-xl h-20 rounded-lg  bg-gradient-to-r from-gray-200 to-cyan-300"
              value={outputAmount}
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
              <label className="sr-only">Currency</label>
              <select
                aria-label="Currency"
                className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-black sm:text-sm md:text-lg lg:text-xl "
                value={outputToken}
                onChange={(e) => setOutputToken(e.target.value)}
              >
                {/* Replace with list of tokens */}
                <option>ETH</option>
                <option>DAI</option>
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={handleSwap}
          className="w-full py-4 px-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-cyan-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mt-auto"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
