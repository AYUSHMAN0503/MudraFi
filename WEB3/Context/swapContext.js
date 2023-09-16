import React, { useState, useEffect } from "react";
import { ethers, BigNumber, concat } from "ethers";
import Web3Modal from "web3modal";

// Internal Import

import {
  checkIfWalletConnected,
  ConnectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithMultiHopSwapToken,
  connectingWithIWTHToken,
  connectingWithDAIToken,
} from "../appFeatures";

import { IWTHABI } from "./constants";
import ERC20 from "./ERC20.json";
import { eth } from "web3";
export const SwapTokenContext = React.createContext();
export const SwapTokenContextProvider = ({ children }) => {
  // USESTATE

  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af",
    "0xde79380FBd39e08150adAA5C6c9dE3146f53029e",
  ];

  // fetch data

  const fetchingData = async () => {
    try {
      // Get User Account
      const userAccount = await checkIfWalletConnected();
      setAccount(userAccount);
      // Create a Provider
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      // Check Balance
      const balance = await provider.getBalance(userAccount);
      const convertBal = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(convertBal);
      console.log(ethValue);

      // Get Network Name

      const network = await provider.getNetwork();
      console.log(network.name);
      setNetworkConnect(network.name);

      //   All Token balance and data
      addToken.map(async (el, i) => {
        // GETTING CONTRACT
        const contract = new ethers.Contract(el, ERC20, provider);
        // Getting Balance of token
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();
        const convertTokenBal = ethers.utils.formatEther(tokenLeft);
        console.log(convertTokenBal);
        // Get name & Symbol

        const symbol = await contract.symbol();
        const name = await contract.name();

        tokenData.push({
          name: name,
          symbol: symbol,
          tokenBalance: tokenBalance,
        });

        console.log(tokenData);

        // Weth balance
        const wethContract = await connectingWithIWTHToken();
        const wethBal = await wethContract.balanceOf(userAccount);
        const wethToken = BigNumber.from(wethBal).toString();
        const convertwethTokenBal = ethers.utils.formatEther(wethToken);
        setWeth9(convertwethTokenBal);

        // Dai balance
        const daiContract = await connectingWithDAIToken();
        const daiBal = await daiContract.balanceOf(userAccount);
        const daiToken = BigNumber.from(daiBal).toString();
        const convertdaiTokenBal = ethers.utils.formatEther(daiToken);
        setDai(convertdaiTokenBal);

        console.log(dai, weth9);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  //   single swap token
  const singleSwapToken = async () => {
    try {
      let singleSwapToken;
      let weth;
      let dai;

      singleSwapToken = await connectingWithSingleSwapToken();
      weth = await connectingWithIWTHToken();
      dai = await connectingWithDAIToken();

      const amountIn = 10n ** 18n;
      await weth.deposit({ value: amountIn });
      await weth.approve(singleSwapToken.address, amountIn);

      // SWap
      await singleSwapToken.swapExactInputSingle(amountIn, {
        gasLimit: 300000,
      });

      const balance = await dai.balanceOf(account);
      const transferAmount = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(transferAmount);
      setDai(ethValue);
      console.log("DAi balance: ", ethValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleSwapToken();
  }, []);

  return (
    <SwapTokenContext.Provider
      value={{
        singleSwapToken,
        ConnectWallet,
        account,
        weth9,
        dai,
        networkConnect,
        ether,
        tokenData,
      }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};
