// import React, { useState, useEffect } from "react";
// // import { ethers, BigNumber, concat } from "ethers";
// import { ethers, BigNumberish } from "ethers";
// import Web3Modal from "web3modal";
// // import { Token, CurrencyAmount, Tradetype, Percent } from "@uniswap/sdk-core";
// import { utils, providers } from 'ethers';

// // Internal Import

// import {
//   checkIfWalletConnected,
//   ConnectWallet,
//   connectingWithBooToken,
//   connectingWithLifeToken,
//   connectingWithSingleSwapToken,
//   connectingWithMultiHopSwapToken,
//   connectingWithIWTHToken,
//   connectingWithDAIToken,
// } from "../utils/appFeatures";

// import { IWETHABI } from "./constants";
// import ERC20 from "./ERC20.json";

// import { getPrice } from "../utils/fetchingPrice";
// import { swapUpdatePrice } from "../utils/swapUpdatePrice";

// export const SwapTokenContext = React.createContext();

// export const SwapTokenContextProvider = ({ children }) => {
//   // USESTATE

//   const [account, setAccount] = useState("");
//   const [ether, setEther] = useState("");
//   const [networkConnect, setNetworkConnect] = useState("");
//   const [weth9, setWeth9] = useState("");
//   const [dai, setDai] = useState("");

//   const [tokenData, setTokenData] = useState([]);

//   const addToken = [
//     "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", //UNISWAP token
//     "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc", //Boba token
//     "0x68749665FF8D2d112Fa859AA293F07A622782F38", //Tether token
//     "0xe3c408BD53c31C085a1746AF401A4042954ff740", //GMT token
//     "0x50327c6c5a14DCaDE707ABad2E27eB517df87AB5", // Tron
//     "0x6B175474E89094C44Da98b954EedeAC495271d0F", //DAI Stable coin
//     "0x7D1AFA7B718fb893dB30A3aBc0cfc608AacfeBB0", // matic token
//     "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC
//     "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //weth
//   ];

//   // fetch data

//   const fetchingData = async () => {
//     try {
//       // Get User Account
//       const userAccount = await checkIfWalletConnected();
//       setAccount(userAccount);
//       // Create a Provider
//       const web3modal = new Web3Modal();
//       const connection = await web3modal.connect();
//       const provider = new ethers.providers.Web3Provider(connection);
//       // Check Balance
//       const balance = await provider.getBalance(userAccount);
//       const convertBal: BigNumberish = ethers.utils.parseUnits(balance.toString(), 18);
//       const ethValue = ethers.utils.formatUnits(convertBal, 18);

//       console.log(ethValue);

//       // Get Network Name

//       const network = await provider.getNetwork();
//       console.log(network.name);
//       setNetworkConnect(network.name);

//       //   All Token balance and data
//       addToken.map(async (el, i) => {
//         // GETTING CONTRACT
//         const contract = new ethers.Contract(el, ERC20, provider);
//         // Getting Balance of token
//         const userBalance = await contract.balanceOf(userAccount);  
//         const tokenLeft: BigNumberish = ethers.utils.parseUnits(userBalance.toString(), 18);
//         const convertTokenBal = ethers.utils.formatUnits(tokenLeft, 18);
//         console.log(convertTokenBal);
//         // Get name & Symbol

//         const symbol = await contract.symbol();
//         const name = await contract.name();

//         tokenData.push({
//           name: name,
//           symbol: symbol,
//           tokenBalance: tokenBalance,
//           tokenAddress: el,
//         });

//         console.log(tokenData);

//         // Weth balance
//         const wethContract = await connectingWithIWTHToken();
//         const wethBal = await wethContract.balanceOf(userAccount);
//         const wethToken: BigNumberish = ethers.utils.parseUnits(wethBal.toString(), 18);
//         const convertwethTokenBal = ethers.utils.formatUnits(wethToken, 18);
//         setWeth9(convertwethTokenBal);

//         // Dai balance
//         const daiContract = await connectingWithDAIToken();
//         const daiBal = await daiContract.balanceOf(userAccount);
//         const daiToken: BigNumberish = ethers.utils.parseUnits(daiBal.toString(), 18); 
//         const convertdaiTokenBal = ethers.utils.formatUnits(daiToken, 18);
//         setDai(convertdaiTokenBal);

//         console.log(dai, weth9);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchingData();
//   }, []);

//     // single swap token
//     const singleSwapToken = async ({ token1, token2, swapAmount }) => {
//     console.log(
//       token1.tokenAddress.tokenAddress,
//       token2.tokenAddress.tokenAddress,
//       swapAmount
//     );
//     try {
//       let singleSwapToken;
//       let weth;
//       let dai;

//       singleSwapToken = await connectingWithSingleSwapToken();
//       weth = await connectingWithIWTHToken();
//       dai = await connectingWithDAIToken();

//       const decimal0 = 18;
//       const inputAmount = swapAmount;
//       const amountIn: BigNumberish = ethers.utils.parseUnits(inputAmount.toString(), 18);

//       console.log(amountIn);

//       await weth.deposit({ value: amountIn });
//       await weth.approve(singleSwapToken.address, amountIn);

//       // SWap
//       const transaction = await singleSwapToken.swapExactInputSingle(
//         token1.tokenAddress.tokenAddress,
//         token2.tokenAddress.tokenAddress,
//         amountIn,
//         {
//           gasLimit: 300000,
//         }
//       );
      
//       await transaction.wait();
//       console.log(transaction);

//       const balance = await dai.balanceOf(account); 
//       const transferAmount: BigNumberish = ethers.utils.parseUnits(balance.toString(), 18);  
//       const ethValue = ethers.utils.formatUnits(transferAmount, 18);
//       setDai(ethValue);
//       console.log("DAi balance: ", ethValue);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     singleSwapToken();
//   }, []);

//   return (
//     <SwapTokenContext.Provider
//       value={{
//         singleSwapToken,
//         ConnectWallet,
//         getPrice,
//         swapUpdatePrice,
//         account,
//         weth9,
//         dai,
//         networkConnect,
//         ether,
//         tokenData,
//       }}
//     >
//       {children}
//     </SwapTokenContext.Provider>
//   );

// };
