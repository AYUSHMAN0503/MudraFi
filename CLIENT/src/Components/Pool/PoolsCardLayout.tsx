// src/components/LiquidityPoolCard.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
interface LiquidityPoolCardProps {
  currency:string|undefined;
  token: string;
  amount: any;
  icon: any; 
}

const LiquidityPoolCard: React.FC<LiquidityPoolCardProps> = ({ token, amount, icon ,currency}) => {
  return (
    <Link to="/Pools">
    <motion.div className="bg-white/90 backdrop-blur-md rounded-xl mb-2 p-8" whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div className="flex items-center mb-2 ">
       <div className="items-end px-2 bg-black text-white rounded-lg"> {icon && <FontAwesomeIcon icon={icon} className="text-blue-500 mr-2" />} {/* Icon */}{token}</div>
      </div>
      <div className="flex">{currency}</div>
      <p>Wallet Balance: {amount}</p>
    </motion.div>
    </Link>
  );
};

export default LiquidityPoolCard;
