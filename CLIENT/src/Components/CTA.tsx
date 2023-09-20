import React, { useState } from "react";
import { ethers } from "ethers";
import Axios from "axios";
const CTA = () => {
  
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [defaultAccount, setDefaultAccount] = useState(null);
  // const [userBalance, setUserBalance] = useState(null); #kjslkdlsdfkjsf

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
      // .then(result => {
      //   accountChanged([result[0]])
      // })
    } else {
      console.log("Install MetaMask please!!");
      window.location.href = "https://metamask.io/";
    }
  };

  // const accountChanged = (accountName) => {
  //   setDefaultAccount(accountName)
  //   getUserBalance(accountName)

  // }

  // const getUserBalance = (accountAddress: unknown) => {
  //   window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
  //   .then(balance => {
  //     setUserBalance(ethers.utils.formatEther(balance));
  //   })
  // }
  return (
    <div>
      <div className="bg-cover bg-center flex  justify-center items-center mb-0 mt-20 ">
        <div
          className=" p-24 pl-10 rounded-t-3xl"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top",
            width: "100%",
          }}
        >
          <p className="text-5xl lg:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r bg-text">
            Trade Now
          </p>
          <p className="lg:text-2xl md:text-xl sm:text-lg mb-5 mt-0 text-white">
            Sync your crypto wallet to start
          </p>
          <button
            className="bg-button text-white py-2 px-4 rounded-lg"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
