import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export async function getTokenPrices(tokenSymbols) {

  const ids = tokenSymbols.join('%2C');

  const response = await axios.get(`${COINGECKO_API}/simple/price?ids=${ids}&vs_currencies=usd`);

  return response.data;

}