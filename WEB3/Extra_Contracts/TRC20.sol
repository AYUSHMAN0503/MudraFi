// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./TRC20Interface.sol";   

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TRC20Token {
    string public name = "My TRC20 Token";
    string public symbol = "MTT";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    // Mapping of token pairs and their swap ratios
    mapping(address => mapping(address => uint256)) public swapRatios;

    event Swap(
        address indexed fromToken,
        address indexed toToken,
        address indexed user,
        uint256 fromAmount,
        uint256 toAmount
    );

    ERC20 public token; // Reference to the TRC20 token contract

    address public owner;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    uint256 public commissionRate = 10; // 10% commission rate
    uint256 private constant INTEREST_RATE_LOW = 2; // 2% interest
    uint256 private constant INTEREST_RATE_MEDIUM = 5; // 5% interest
    uint256 private constant INTEREST_RATE_HIGH = 10; // 10% interest

    enum InvestmentOption {
        LowRisk,
        MediumRisk,
        HighRisk
    }

    struct Investor {
        uint256 balance;
        uint256 lastDepositTimestamp;
        mapping(InvestmentOption => uint256) investments;
        UserProfile profile; // Added user profile
    }
    mapping(address => Investor) public investors;
    mapping(address => Role) public roles;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event Burn(address indexed from, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Commission(address indexed from, uint256 value);
    event Deposit(address indexed from, uint256 value);
    event NotificationSent(address indexed to, string message);
    event ProfileUpdated(address indexed user, string newName, string newEmail, uint256 newBirthdate);
    event TokenSwapped(address indexed fromToken, address indexed toToken, address indexed user, uint256 amount);
    event RoleAssigned(address indexed user, string roleName);
    event RoleRevoked(address indexed user, string roleName);

    enum Role {
        Owner,
        Investor
    }

    // Notifications data structure
    struct Notification {
        string message;
        uint256 timestamp;
    }
    mapping(address => Notification[]) public notifications;

    struct UserProfile {
        string name;
        string email;
        uint256 birthdate;
    }
    mapping(address => UserProfile) public userProfiles;

    modifier onlyRole(Role role) {
        require(roles[msg.sender] == role, "Unauthorized access");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(uint256 initialSupply, address _tokenAddress) {
        owner = msg.sender;
        totalSupply = initialSupply * 10**uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
        token = ERC20(_tokenAddress); // Initialize the token reference
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(to != address(0), "Invalid address");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        uint256 commission = (value * commissionRate) / 100;
        uint256 netValue = value - commission;

        balanceOf[msg.sender] -= value;
        balanceOf[to] += netValue;
        balanceOf[owner] += commission; // Commission to the owner

        emit Transfer(msg.sender, to, netValue);
        emit Commission(msg.sender, commission);

        return true;
    }

    function approve(address spender, uint256 value) public returns (bool success) {
        require(spender != address(0), "Invalid address");
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public returns (bool success) {
        require(from != address(0), "Invalid address");
        require(to != address(0), "Invalid address");
        require(balanceOf[from] >= value, "Insufficient balance");
        require(allowance[from][msg.sender] >= value, "Allowance exceeded");
        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(from, to, value);
        return true;
    }

    function burn(uint256 value) public onlyOwner returns (bool success) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        totalSupply -= value;
        emit Burn(msg.sender, value);
        return true;
    }

    function mint(address to, uint256 value) public onlyOwner returns (bool success) {
        require(to != address(0), "Invalid address");
        totalSupply += value;
        balanceOf[to] += value;
        emit Mint(to, value);
        emit Transfer(address(0), to, value);
        return true;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function deposit(uint256 value) public returns (bool success) {
        require(value > 0, "Deposit value must be greater than 0");
        require(token.transferFrom(msg.sender, address(this), value), "Token transfer failed");

        // Increase the user's balance within this contract
        balanceOf[msg.sender] += value;

        emit Deposit(msg.sender, value);

        // Send a notification to the investor
        notifications[msg.sender].push(
            Notification({
                message: "You have successfully made a deposit.",
                timestamp: block.timestamp
            })
        );

        return true;
    }

    function sendNotification(address to, string memory message) public {
        require(msg.sender != to, "Cannot send notification to yourself");

        notifications[to].push(Notification({
            message: message,
            timestamp: block.timestamp
        }));

        emit NotificationSent(to, message);
    }

    // Function to get the user's profile
    function getProfile() public view returns (string memory Name, string memory email, uint256 birthdate) {
        UserProfile memory userProfile = userProfiles[msg.sender];
        return (userProfile.name, userProfile.email, userProfile.birthdate);
    }

    // Function to update the user's profile
    function updateProfile(string memory newName, string memory newEmail, uint256 newBirthdate) public {
        UserProfile storage userProfile = userProfiles[msg.sender];
        userProfile.name = newName;
        userProfile.email = newEmail;
        userProfile.birthdate = newBirthdate;

        emit ProfileUpdated(msg.sender, newName, newEmail, newBirthdate);
    }

    // // Function to swap tokens
    // function swapTokens(address toToken, uint256 amount) public returns (bool success) {
    //     require(toToken != address(0), "Invalid toToken address");
    //     require(amount > 0, "Amount must be greater than 0");

    //     // Ensure that the user has enough tokens to swap
    //     require(balanceOf[msg.sender] >= amount, "Insufficient balance for swapping");

    //     // Calculate the swap ratio based on your swapping logic
    //     uint256 swappedAmount = calculateSwapAmount(toToken, amount);

    //     // Ensure the swapped amount is valid
    //     require(swappedAmount > 0, "Invalid swapped amount");

    //     // Transfer the user's tokens to this contract
    //     require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

    //     // Perform the actual swapping logic here
    //     // Implement the secure swapping logic based on your specific use case

    //     // Transfer the swapped tokens to the user in the new token
    //     require(toToken.transfer(msg.sender, swappedAmount), "Token transfer to user failed");

    //     // Deduct the swapped amount from the user's balance in the old token
    //     balanceOf[msg.sender] -= amount;

    //     // Emit an event to record the token swap
    //     emit TokenSwapped(address(token), toToken, msg.sender, amount);

    //     return true;
    // }

    // Owner sets the swap ratio for a token pair
    function setSwapRatio(address fromToken, address toToken, uint256 ratio) external onlyOwner {
        require(fromToken != toToken, "Tokens must be different");
        require(ratio > 0, "Ratio must be greater than 0");
        swapRatios[fromToken][toToken] = ratio;
        swapRatios[toToken][fromToken] = ratio; // Assume a symmetric ratio for simplicity
    }

    // Perform a token swap
    function swapTokens(address fromToken, address toToken, uint256 amount) external {
        require(fromToken != toToken, "Tokens must be different");
        require(amount > 0, "Amount must be greater than 0");
        require(swapRatios[fromToken][toToken] > 0, "Swap ratio not set");

        // Calculate the amount of the 'toToken' the user will receive
        uint256 toAmount = (amount * swapRatios[fromToken][toToken]) / 1e18;

        // Transfer 'fromToken' from the user to this contract
        require(
            IERC20(fromToken).transferFrom(msg.sender, address(this), amount),
            "Transfer of 'fromToken' failed"
        );

        // Transfer 'toToken' to the user
        require(
            IERC20(toToken).transfer(msg.sender, toAmount),
            "Transfer of 'toToken' failed"
        );

        emit Swap(fromToken, toToken, msg.sender, amount, toAmount);
    }

    // // Function to calculate the swapped amount
    // function calculateSwapAmount(address toToken, uint256 amount) internal returns (uint256) {
    //     // Implement your secure swapping logic here
    //     // Calculate the amount to be received in the new token

    //     // For demonstration, assume a simple 1-to-1 swap ratio
    //     return amount;
    // }

    /**
     * @dev Calculates the interest earned for a specific investment option.
     * @param option The investment option to calculate interest for.
     * @return The calculated interest amount.
     */
    function calculateInterest(
        InvestmentOption option
    ) internal view returns (uint256) {
        if (option == InvestmentOption.LowRisk) {
            return
                (investors[msg.sender].investments[option] *
                    INTEREST_RATE_LOW) / 100;
        } else if (option == InvestmentOption.MediumRisk) {
            return
                (investors[msg.sender].investments[option] *
                    INTEREST_RATE_MEDIUM) / 100;
        } else if (option == InvestmentOption.HighRisk) {
            return
                (investors[msg.sender].investments[option] *
                    INTEREST_RATE_HIGH) / 100;
        }

        return 0;
    }

    // Function to get the user's balance
    function getBalance() public view returns (uint256) {
        return balanceOf[msg.sender];
    }

    /**
     * @dev Allows the owner to assign the Investor role to an address.
     * @param investorAddress The address to assign the Investor role to.
     */
    function assignInvestorRole(address investorAddress) external onlyOwner {
        require(roles[investorAddress] == Role.Investor, "Already an investor");
        roles[investorAddress] = Role.Investor;
    }

    /**
     * @dev Allows the owner to revoke the Investor role from an address.
     * @param investorAddress The address to revoke the Investor role from.
     */
    function revokeInvestorRole(address investorAddress) external onlyOwner {
        require(roles[investorAddress] == Role.Investor, "Not an investor");
        roles[investorAddress] = Role.Owner;
    }


}
