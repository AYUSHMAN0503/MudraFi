// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/interfaces/IERC20.sol";
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

    address payable public owner;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 initialSupply) public {
        owner = msg.sender;
        totalSupply = initialSupply * 10**uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(to != address(0), "Invalid address");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        uint256 commission = (value * commissionRate) / 100;
        uint256 netValue = value - commission;

        balanceOf[msg.sender] -= value;
        balanceOf[to] += netValue;
        owner.transfer(commission); // Transfer commission to the owner

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

    function transferOwnership(address payable newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function deposit() public payable returns (bool success) {
        require(msg.value > 0, "Deposit value must be greater than 0");

        // Increase the user's balance within this contract
        balanceOf[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);

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

    function calculateSwapAmount(address toToken, uint256 amount) internal returns (uint256) {
    require(toToken != address(0), "Invalid toToken address");
    require(amount > 0, "Amount must be greater than 0");

    // In a real-world scenario, you would fetch the swap ratio from an oracle or DEX
    // For demonstration, we assume a 1-to-1 swap ratio
    uint256 swapRatio = 1e18; // 1-to-1 ratio (18 decimal places)

    // Calculate the amount to be received in the new token
    uint256 swappedAmount = (amount * swapRatio) / 1e18;

    // Ensure the swapped amount is valid
    require(swappedAmount > 0, "Invalid swapped amount");

    return swappedAmount;
}


    function calculateInterest(InvestmentOption option) internal view returns (uint256) {
        if (option == InvestmentOption.LowRisk) {
            return (investors[msg.sender].investments[option] * INTEREST_RATE_LOW) / 100;
        } else if (option == InvestmentOption.MediumRisk) {
            return (investors[msg.sender].investments[option] * INTEREST_RATE_MEDIUM) / 100;
        } else if (option == InvestmentOption.HighRisk) {
            return (investors[msg.sender].investments[option] * INTEREST_RATE_HIGH) / 100;
        }

        return 0;
    }

    function getBalance() public view returns (uint256) {
        return balanceOf[msg.sender];
    }

    function assignInvestorRole(address investorAddress) external onlyOwner {
        require(roles[investorAddress] == Role.Investor, "Already an investor");
        roles[investorAddress] = Role.Investor;
    }

    function revokeInvestorRole(address investorAddress) external onlyOwner {
        require(roles[investorAddress] == Role.Investor, "Not an investor");
        roles[investorAddress] = Role.Owner;
    }
}