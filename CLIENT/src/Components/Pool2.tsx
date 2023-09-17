// src/pages/LiquidityPool.tsx
import React from "react";

import LiquidityPoolCard from "./PoolsCardLayout";
import { faDollarSign,} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { faEthereum , faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { TransactionsTable } from "./List";
const LiquidityPool: React.FC = () => {
  // Mock data for the liquidity pool
  const liquidityPoolData = [
    { token: "Ethereum (ETH)", amount:"_", icon:faEthereum, currency:"USDC"},
    { token: "Bitcoin (BTC)", amount: "_", icon:faBitcoin, currency:"USDC" },
    { token: "US Dollar (USD)", amount: "_", icon: faDollarSign , currency:"USDC"},
    { token: "Ethereum (ETH)", amount: "_", icon:faEthereum, currency:"USDC" },
    { token: "Bitcoin (BTC)", amount: "_", icon:faBitcoin  , currency:"USDC"},
    { token: "US Dollar (USD)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "Bitcoin (BTC)", amount: "_", icon:faBitcoin , currency:"USDC"},
    { token: "US Dollar (USD)", amount: "_", icon: faDollarSign, currency:"USDC" },
    // Add more tokens with different icons as needed
  ];

  return (
   <>
      <div className=" p-10">
        <div className=" mx-auto">
          <h1 className="text-2xl underline mr-12 font-semibold text-white mb-4">Top Pools</h1>

          {/* Liquidity Pool Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {liquidityPoolData.map((entry, index) => (
              <LiquidityPoolCard
                key={index}
                token={entry.token}
                amount={entry.amount}
                icon={entry.icon}
                currency={entry.currency}
              />
            ))}
          </div>
        </div>
      </div>
      <TransactionsTable/>
  </>
  );
};

export default LiquidityPool;
