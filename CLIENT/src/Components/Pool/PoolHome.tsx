// src/pages/LiquidityPool.tsx
import React from "react";

import LiquidityPoolCard from "./PoolsCardLayout";
import { faDollarSign,} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { TransactionsTable } from "./List";
import Animatedpage from "../AnimatedPage";
const LiquidityPool: React.FC = () => {
  // Mock data for the liquidity pool
  const liquidityPoolData = [

    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    { token: "BitTorrent(BTT)", amount: "_", icon: faDollarSign, currency:"USDC" },
    // Add more tokens with different icons as needed
  ];

  return (
   <Animatedpage>
      <div className=" p-10">
        <div className=" mx-auto">
          <h1 className="text-2xl underline mr-12 font-semibold text-cyan-400 mb-4">Top Pools</h1>

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
  </Animatedpage>
  );
};

export default LiquidityPool;
