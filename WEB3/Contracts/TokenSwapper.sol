// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungibleTokenPositionDescriptor.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";

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
        address _uniswapPool // Initialize with the Uniswap V3 pool for TokenA-TokenB pair
    ) {
        positionManager = INonfungiblePositionManager(_positionManagerAddress);
        positionDescriptor = INonfungibleTokenPositionDescriptor(_positionDescriptorAddress);
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
        uniswapPool = IUniswapV3Pool(_uniswapPool);
    }

    // Function to set or update the Uniswap V3 pool address for a token pair
    function setTokenPool(address token, address pool) external onlyOwner {
        tokenPools[token] = IUniswapV3Pool(pool);
    }

    // Swap tokens (ETH to token or token to token)
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
        }

        // Construct the exact input parameters for the Uniswap V3 pool
        (uint256 amount0, uint256 amount1, uint256 fees) = positionManager.increaseLiquidity(
            INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: inputAmount,
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
        }

        // Refund any remaining input tokens (ETH or token) to the user
        if (inputToken == address(0)) {
            // Refund ETH
            if (msg.value - inputAmount > 0) {
                payable(msg.sender).transfer(msg.value - inputAmount);
            }
        } else {
            // Refund tokens
            require(tokenA.transfer(msg.sender, inputAmount - amount0), "Refund of input token failed");
        }

        // Collect fees
        if (fees > 0) {
            (address token0, address token1) = (pool.token0(), pool.token1());
            (uint256 collectedAmount0, uint256 collectedAmount1) = positionManager.collect(
                INonfungiblePositionManager.CollectParams({
                    tokenId: tokenId,
                    recipient: address(this),
                    amount0Max: type(uint256).max,
                    amount1Max: type(uint256).max
                })
            );

            // Distribute the fees to the contract owner
            if (collectedAmount0 > 0) {
                require(IERC20(token0).transfer(owner(), collectedAmount0), "Transfer of fee Token0 failed");
            }
            if (collectedAmount1 > 0) {
                require(IERC20(token1).transfer(owner(), collectedAmount1), "Transfer of fee Token1 failed");
            }
        }
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

    // Get the position information for a given token ID
    function getPositionInfo(uint256 tokenId) external view returns (string memory) {
        (, , , , , , , , , , , ) = positionDescriptor.positions(tokenId);
        // You can format and return position information here
    }

    // Add other functions and logic as needed.
}
