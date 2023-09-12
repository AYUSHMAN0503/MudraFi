const {BigNumber} = require("@ethersproject/bignumber");
const {expect} = require("chai");
const {ethers} = require("hardhat");


const ERC20ABI = require("@uniswap/v2-core/build/ERC20.json").abi;
describe("Test Swap", function (){
    const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const MyAddress = "0x9BBCa42A12b5389337Bd22b5307976e63b71838F";
    const DAIHolder = "0x5d38b4e4783e34e2301a2a36c39a03c45798c4dd";
    let TestSwapContract;

    beforeEach(async () => {
        const TestSwapFactory = await ethers.getContractFactory("testSwap");
        TestSwapContract = await TestSwapFactory.deploy();
        await TestSwapContract.deployed();
    })

    it("should swap", async () => { 
        // impersonate account
    await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [DAIHolder],
    });
    const impersonateSigner = await ethers.getSigner(DAIHolder);

    const DAIContract = new ethers.Contract(DAIAddress, ERC20ABI, impersonateSigner)
    const DAIHolderBalance = await DAIContract.balanceOf(impersonateSigner.address)
    await DAIContract.approve(TestSwapContract.address, DAIHolderBalance)

    const WETHContract = new ethers.Contract(WETHAddress, ERC20ABI, impersonateSigner)
    const myBalance = await WETHContract.balanceOf(MyAddress);
    console.log("Initial WETH Balance:", ethers.utils.formatUnits(myBalance.toString()));
    await TestSwapContract.connect(impersonateSigner).swap(
        DAIAddress,
        WETHAddress,
        DAIHolderBalance,
        MyAddress,
        timestamp + 1000 // adding 100 milliseconds to the current blocktime
    )
    
    const myBalance_updated = await WETHContract.balanceOf(MyAddress);
    console.log("Balance after Swap:", ethers.utils.formatUnits(myBalance_updated.toString()));
    const DAIHolderBalance_updated = await DAIContract.balanceOf(impersonateSigner.address);
    expect(DAIHolderBalance_updated.eq(BigNumber.from(0))).to.be.true;
    expect(myBalance_updated.gt(myBalance)).to.be.true;
    })
});