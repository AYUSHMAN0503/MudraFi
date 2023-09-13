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