const {expect} = require("chai");
const{ethers} = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SwapMultiHop", () => {
    let swapMultiHop;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async()=> {
        accounts = await ethers.getSigners(1);

        const SwapMultiHop = await ethers.getContractFactory("swapMultiHop");
        swapMultiHop = await SwapMultiHop.deploy();

        await swapMultiHop.deployed();

        weth = await ethers.getContractAt("IWETH", WETH9);
        dai = await ethers.getContractAt("IERC20", DAI);
        usdc = await ethers.getContractAt("IERC20", USDC);
        
        
    });
    it("swapExactInputMultihop", async() => {
        const amountIn = 10n ** 18n;
    
        // Let's Deposit WETH
        await weth.deposit({value: amountIn});
        await weth.approve(swapMultiHop.address, amountIn);

        // Swap
        await swapMultiHop.swapExactInputMultihop(amountIn);
        console.log("Dai Balance: ", await dai.balanceOf(accounts[0].address));

    });

    it("swapExactInputMultihop", async() => { 
        const wethAmountInMax = 10n ** 18n;
        const daiAmountOut = 100n * 10n **18n;    
        // deposit WETH

        await weth.deposit({value : wethAmountInMax});
        await weth.approve(swapMultiHop.address, wethAmountInMax);

        // SWAP
        await swapMultiHop.swapExactInputMultihop(daiAmountOut, wethAmountInMax);
        console.log(accounts[0].address);
        console.log("dai balance", await dai.balanceOf(accounts[0].address));
    })

})

