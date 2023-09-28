import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenABI,
  LifeTokenAddress,
  LifeTokenABI,
  SingleSwapTokenAddress,
  SingleSwapTokenABI,
  SwapMultiHopAddress,
  SwapMultiHopABI,
  IWETHAddress,
  IWETHABI,
} from "./../Context/constants";

// Check if wallet is connected
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

// Connect Wallet
export const ConnectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......boo token fetching..........
export const fetchBooContract = (signerorProvider) =>
  new ethers.Contract(BooTokenAddress, BooTokenABI, signerorProvider);

// Connecting with Boo token
export const connectingWithBooToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchBooContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......Life token fetching..........
export const fetchLifeContract = (signerorProvider) =>
  new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerorProvider);

// Connecting with Life token
export const connectingWithLifeToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchLifeContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......single swap token fetching..........
export const fetchSingleSwapContract = (signerorProvider) =>
  new ethers.Contract(
    SingleSwapTokenAddress,
    SingleSwapTokenABI,
    signerorProvider
  );

// Connecting with singleSwap
export const connectingWithSingleSwapToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchSingleSwapContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......MultiHopSwap fetching..........
export const fetchMultiHopSwapContract = (signerorProvider) =>
  new ethers.Contract(SwapMultiHopAddress, SwapMultiHopABI, signerorProvider);

// Connecting with MultiHopSwap
export const connectingWithMultiHopSwapToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchMultiHopSwapContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......IWTH fetching..........
export const fetchIWTHContract = (signerorProvider) =>
  new ethers.Contract(IWETHAddress, IWETHABI, signerorProvider);

// Connecting with IWTH
export const connectingWithIWTHToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchIWTHContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// -------------------Fetching contract----------------------

// .......DAI fetching..........
const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const fetchDAIContract = (signerorProvider) =>
  new ethers.Contract(DAIAddress, IWETHABI, signerorProvider);
// using same ABI as of IWTH as all ERC20's have same interface :)

// Connecting with DAI
export const connectingWithDAIToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};


