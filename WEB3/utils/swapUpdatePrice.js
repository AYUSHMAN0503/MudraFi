import { AlphaRouter } from "@uniswap/smart-order-router";  
// this package installed if of older version, if error update it(smart-order-router)
import { ethers, BigNumber } from "ethers";
import { Token, CurrencyAmount, TradeType, Percent, CurrencyAmount } from "@uniswap/sdk-core";

// GET DATA  RIGHT
const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";

// Get Price
const chainId = 1;

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/34qnSHH20zuO9wOM7dnJNd83zn1Pxr5W"
);

const router = new AlphaRouter({chainId: chainId, provider: provider});

const name0 = "Wrapped Ether";
const symbol0 = "WETH";
const decimals0 = 18;
const address0 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

const name1 = "DAI";
const symbol1 = "DAI";
const decimals1 = 18;
const address1 = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const WETH = new Token(chainId, address0, decimals0, symbol0, name0);
const DAI = new Token(chainId, address1, decimals1, symbol1, name1);

export const swapUpdatePrice = async (
  inputAmount,
  slippageAmount,
  deadline,
  walletAddress
) => {
    const percentSlippage = new Percent(slip, 100);
    const wei = ethers.utils.parseUnits(inputAmount.toString(), decimals0);
    const CurrencyAmount = CurrencyAmount.fromRawAmount(
        WETH,
        BigNumber.from(wei)
    );
    const route = await router.route(CurrencyAmount, DAI, TradeType.EXACT_INPU, {
        recipient: walletAddress,
        slippageTolerance: percentSlippage,
        deadline: deadline,
    });

    const transaction = {
        data: route.methodParameters.calldata,
        to: V3_SWAP_ROUTER_ADDRESS,
        value: BigNumber.from(route.methodParameters.value),
        from: walletAddress,
        gasPrice: BigNumber.from(route.gasPriceWei),
        gasLimit: ethers.utils.hexlify(1000000),

    }

    const qouteAmountOut = route.quote.toFixed(6);
    const ratio = (inputAmount / qouteAmountOut).toFixed(3);

    console.log(qouteAmountOut, ratio);
    return[transaction, qouteAmountOut, ratio];
};
