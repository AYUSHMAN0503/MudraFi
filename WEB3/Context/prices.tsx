// prices.tsx

import { useState, useEffect } from 'react';
import { getTokenPrices } from './priceApi'; 

export default function useTokenPrices() {

  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getTokenPrices(['ETH', 'DAI']);
      setPrices(prices);
    }

    fetchPrices();
  }, []);

  return prices;

}