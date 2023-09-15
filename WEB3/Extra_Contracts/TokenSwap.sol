// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract TokenSwap is Ownable {
//     IUniswapV2Router02 public uniswapRouter;
//     address public token1; // Address of Token1 (e.g., DAI)
//     address public token2; // Address of Token2 (e.g., USDC)

//     event SwapExecuted(
//         address indexed caller,
//         uint256 amountIn,
//         uint256 amountOut,
//         uint256 timestamp
//     );

//     constructor(address _uniswapRouter, address _token1, address _token2) {
//         uniswapRouter = IUniswapV2Router02(_uniswapRouter);
//         token1 = _token1;
//         token2 = _token2;
//     }

//     function swap(uint256 amountIn, uint256 amountOutMin) external onlyOwner {
//         require(amountIn > 0, "Amount must be greater than zero");

//         // Check the contract's token1 balance before the swap
//         uint256 token1BalanceBefore = IERC20(token1).balanceOf(address(this));

//         // Approve the router to spend the token1 tokens
//         IERC20(token1).approve(address(uniswapRouter), amountIn);

//         // Define the path for the swap (token1 -> token2)
//         address[] memory path = new address[](2);
//         path[0] = token1;
//         path[1] = token2;

//         // Perform the swap through Uniswap
//         (uint256[] memory amounts) = uniswapRouter.swapExactTokensForTokens(
//             amountIn,
//             amountOutMin,
//             path,
//             address(this),
//             block.timestamp
//         );

//         // Check the contract's token2 balance after the swap
//         uint256 token2BalanceAfter = IERC20(token2).balanceOf(address(this));

//         // Calculate the amount of token2 received in the swap
//         uint256 amountOut = token2BalanceAfter - token1BalanceBefore;

//         emit SwapExecuted(msg.sender, amountIn, amountOut, block.timestamp);
//     }

//     // Withdraw tokens accidentally sent to this contract
//     function withdrawToken(address token, uint256 amount) external onlyOwner {
//         require(token != token1 && token != token2, "Cannot withdraw swapped tokens");
//         require(IERC20(token).transfer(owner(), amount), "Transfer failed");
//     }

//     // Withdraw ETH accidentally sent to this contract
//     function withdrawETH(uint256 amount) external onlyOwner {
//         payable(owner()).transfer(amount);
//     }
// }
