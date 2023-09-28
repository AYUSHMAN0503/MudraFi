import React, { useState, useEffect } from 'react';
import { ethers, BigNumberish } from 'ethers';


import { 
//   checkIfWalletConnected,
//   ConnectWallet,
  connectingWithIWTHToken,
  connectingWithDAIToken,
  connectingWithSingleSwapToken
} from '../utils/appFeatures';

// import { IWETHABI } from './constants';
// import ERC20 from './ERC20.json';

interface Token {
  tokenAddress: {
    tokenAddress: string;
  }
}

export const useSingleSwap = () => {

  const [account, setAccount] = useState<string>('');

  const singleSwapToken = async ({ 
    token1, 
    token2, 
    swapAmount 
  }: {
    token1: Token,
    token2: Token,
    swapAmount: string
  }) => {

    try {

      let singleSwapToken: any;
      let weth: any;
      let dai: any;

      singleSwapToken = await connectingWithSingleSwapToken();
      weth = await connectingWithIWTHToken();
      dai = await connectingWithDAIToken();

      const decimal0 = 18;
      const inputAmount = swapAmount;
      const amountIn: BigNumberish = ethers.utils.parseUnits(inputAmount, 18); 

      await weth.deposit({ value: amountIn });
      await weth.approve(singleSwapToken.address, amountIn);

      const transaction = await singleSwapToken.swapExactInputSingle(
        token1.tokenAddress.tokenAddress,
        token2.tokenAddress.tokenAddress,
        amountIn,
        { gasLimit: 300000 }  
      );
      
      await transaction.wait();

      const balance = await dai.balanceOf(account);
      const transferAmount: BigNumberish = ethers.utils.parseUnits(balance.toString(), 18);
      const ethValue = ethers.utils.formatUnits(transferAmount, 18);
      
      return ethValue;

    } catch (error) {
      console.log(error);
    }

  }

  return { singleSwapToken };

}

export default useSingleSwap;