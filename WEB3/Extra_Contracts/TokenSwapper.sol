// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungibleTokenPositionDescriptor.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyDEX is Ownable {
    INonfungiblePositionManager public positionManager;
    INonfungibleTokenPositionDescriptor public positionDescriptor;
    IERC20 public tokenA;
    IERC20 public tokenB;
    IUniswapV3Pool public uniswapPool;

    // Mapping to store Uniswap V3 pool addresses for different token pairs
    mapping(address => IUniswapV3Pool) public tokenPools;   

    constructor(
        address _positionManagerAddress,
        address _positionDescriptorAddress,
        address _tokenA,
        address _tokenB,
        address _tokenC
    ) {
        positionManager = INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
        positionDescriptor = INonfungibleTokenPositionDescriptor(0x91ae842A5Ffd8d12023116943e72A606179294f3);
        tokenA = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
        tokenB = IERC20(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
        tokenC = IERC20(0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48);
        // the commented code below was present previously , the above code contains the addresses
        // tokenA = IERC20(_tokenA);
        // tokenB = IERC20(_tokenB);
        // tokenC = IERC20(_tokenC);
        
        // Set the Uniswap V3 pool address for the DAI-ETH pair
        tokenPools[0x6B175474E89094C44Da98b954EedeAC495271d0F] = IUniswapV3Pool(0xa478c2975ab1ea89e8196811f51a7b7ade33eb11);
        
        // Set the Uniswap V3 pool address for the ETH-DAI pair
        tokenPools[0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2] = IUniswapV3Pool(0xa478c2975ab1ea89e8196811f51a7b7ade33eb11);

        // Set the Uniswap V3 pool address for the ETH-USDC pair
        tokenPools[0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2] = IUniswapV3Pool(0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc);

        // Set the Uniswap V3 pool address for the USDC-ETH pair
        tokenPools[0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48] = IUniswapV3Pool(0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc);

        // Set the contract owner to the deployer
        transferOwnership(msg.sender);
    }

    // Function to set or update the Uniswap V3 pool address for a token pair
    function setTokenPool(address token, address pool) external onlyOwner {
        tokenPools[token] = IUniswapV3Pool(pool);
    }

    // Swap tokens (ETH to token or token to token) with fees
    function swapTokens(
        address inputToken,
        address outputToken,
        uint256 inputAmount,
        uint256 outputAmount,
        uint256 tokenId
    ) external payable {
        require(inputAmount > 0 && outputAmount > 0, "Amounts must be greater than 0");
        require(inputToken != outputToken, "Input and output tokens must be different");

        // Determine the Uniswap V3 pool for the token pair
        IUniswapV3Pool pool = tokenPools[inputToken];
        require(address(pool) != address(0), "Pool not found for input token");

        // Transfer tokens or ETH from the user to the contract
        if (inputToken == address(0)) {
            // ETH transfer
            require(msg.value == inputAmount, "Incorrect ETH amount sent");
        } else {
            // Token transfer
            require(tokenA.transferFrom(msg.sender, address(this), inputAmount), "Transfer of input token failed");
            // Approve the transfer
            require(tokenA.approve(address(positionManager), inputAmount), "Approval for input token failed");
        }

        // Calculate the swap fee (customize this function according to your fee structure)
        uint256 swapFee = calculateSwapFee(inputAmount);

        // Deduct the swap fee from the input amount
        uint256 inputAmountAfterFee = inputAmount - swapFee;

        // Construct the exact input parameters for the Uniswap V3 pool
        (uint256 amount0, uint256 amount1, uint256 fees) = positionManager.increaseLiquidity(
            INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: inputAmountAfterFee,  // Deduct the fee
                amount1Desired: outputAmount,
                amount0Min: 0,
                amount1Min: 0,
                deadline: block.timestamp
            })
        );

        // Transfer the swapped tokens to the user
        if (outputToken == address(0)) {
            // ETH transfer
            payable(msg.sender).transfer(outputAmount - amount1);
        } else {
            // Token transfer
            require(tokenB.transfer(msg.sender, outputAmount - amount1), "Transfer of output token failed");
            // Approve the transfer
            require(tokenB.approve(address(positionManager), outputAmount - amount1), "Approval for output token failed");
        }

        // Refund any remaining input tokens (ETH or token) to the user
        if (inputToken == address(0)) {
            // Refund ETH
            if (msg.value - inputAmount > 0) {
                payable(msg.sender).transfer(msg.value - inputAmount);
            }
        } else {
            // Refund tokens
            require(tokenA.transfer(msg.sender, inputAmountAfterFee - amount0), "Refund of input token failed");
        }

        // Collect fees and distribute them
        if (fees > 0) {
            // Distribute a portion of the fees to the contract owner
            uint256 ownerFeeShare = calculateOwnerFeeShare(fees);
            require(IERC20(tokenA).transfer(owner(), ownerFeeShare), "Transfer of owner fee share failed");

            // Distribute the remaining fees to liquidity providers (implement this logic)
            uint256 liquidityProvidersFeeShare = fees - ownerFeeShare;
            distributeFeesToLiquidityProviders(pool, tokenId, liquidityProvidersFeeShare);
        }
    }

    // Calculate the swap fee (customize this function according to your fee structure)
    function calculateSwapFee(uint256 inputAmount) internal pure returns (uint256) {
        // Example: Charge a 1% fee on the input amount
        return (inputAmount * 1) / 100;
    }

    // Calculate the owner's fee share (customize this function as needed)
    function calculateOwnerFeeShare(uint256 totalFees) internal pure returns (uint256) {
        // Example: The owner gets 20% of the total fees
        return (totalFees * 20) / 100;
    }

    // Remove liquidity and receive TokenA and TokenB
    function removeLiquidity(uint256 tokenId) external onlyOwner {
        // Withdraw liquidity from the pool
        (uint256 collectedAmount0, uint256 collectedAmount1) = positionManager.collect(
            INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: address(this),
                amount0Max: type(uint256).max,
                amount1Max: type(uint256).max
            })
        );

        // Transfer the withdrawn tokens to the owner
        require(tokenA.transfer(owner(), collectedAmount0), "Transfer of withdrawn TokenA failed");
        require(tokenB.transfer(owner(), collectedAmount1), "Transfer of withdrawn TokenB failed");
    }

    // // Get the position information for a given token ID
    // function getPositionInfo(uint256 tokenId) external view returns (string memory) {
    //     (
    //        uint256 _tokenId,
    //         address token0,
    //         address token1,
    //         uint256 fee,
    //         int24 tickLower,
    //         int24 tickUpper,
    //         uint128 liquidity,
    //         uint256 feeGrowthInside0LastX128,
    //         uint256 feeGrowthInside1LastX128,
    //         uint256 tokensOwed0,
    //         uint256 tokensOwed1
    //     ) = positionDescriptor.positions(tokenId);
    
    //     // Format and return position information
    //      string memory info = string(
    //         abi.encodePacked(
    //             "Token ID: ", _tokenId, "\n",
    //             "Token0: ", token0, "\n",
    //             "Token1: ", token1, "\n",
    //             "Fee: ", fee, "\n",
    //             "Tick Lower: ", tickLower, "\n",
    //             "Tick Upper: ", tickUpper, "\n",
    //             "Liquidity: ", liquidity, "\n",
    //             "Fee Growth Inside0 (X128): ", feeGrowthInside0LastX128, "\n",
    //             "Fee Growth Inside1 (X128): ", feeGrowthInside1LastX128, "\n",
    //             "Tokens Owed0: ", tokensOwed0, "\n",
    //          "Tokens Owed1: ", tokensOwed1
    //          )
    //     );
    //     return info;
    // }
}

// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.0;

// // Import the ERC-20 interface for token interaction
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract TokenSwap is Ownable {
//     // Address of the two ERC-20 tokens to be swapped
//     IERC20 public token1;
//     IERC20 public token2;
    
//     // Exchange rate: how many token2 you get for 1 token1
//     uint256 public exchangeRate;

//     // Events to log token swaps
//     event TokensSwapped(
//         address indexed user,
//         uint256 amountToken1,
//         uint256 amountToken2
//     );

//     constructor(address _token1Address, address _token2Address, uint256 _initialRate) {
//         require(_token1Address != address(0) && _token2Address != address(0), "Token addresses must be valid");
//         require(_initialRate > 0, "Initial exchange rate must be greater than 0");

//         token1 = IERC20(_token1Address);
//         token2 = IERC20(_token2Address);
//         exchangeRate = _initialRate;
//     }

//     // Function to set a new exchange rate
//     function setExchangeRate(uint256 _newRate) external onlyOwner {
//         require(_newRate > 0, "Exchange rate must be greater than 0");
//         exchangeRate = _newRate;
//     }

//     // Function to swap token1 for token2
//     function swap(uint256 _amountToken1) external {
//         require(_amountToken1 > 0, "Amount must be greater than 0");

//         uint256 amountToken2 = (_amountToken1 * exchangeRate) / 1e18; // Adjust for different decimals

//         // Ensure the contract has enough token2 to perform the swap
//         require(token2.balanceOf(address(this)) >= amountToken2, "Insufficient balance in the contract");

//         // Transfer token1 from the sender to this contract
//         require(token1.transferFrom(msg.sender, address(this), _amountToken1), "Transfer of token1 failed");

//         // Transfer token2 to the sender
//         require(token2.transfer(msg.sender, amountToken2), "Transfer of token2 failed");

//         // Emit an event to log the token swap
//         emit TokensSwapped(msg.sender, _amountToken1, amountToken2);
//     }

//     // Function to withdraw any remaining tokens in the contract
//     function withdrawTokens(address _tokenAddress, uint256 _amount) external onlyOwner {
//         IERC20 token = IERC20(_tokenAddress);
//         uint256 balance = token.balanceOf(address(this));
//         require(balance >= _amount, "Insufficient balance in the contract");
//         require(token.transfer(owner(), _amount), "Transfer failed");
//     }
// }
