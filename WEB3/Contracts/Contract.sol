    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.0;

    import "./escrow.sol";
    import "./TokenSwapper.sol";
    import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
    import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
    import "@uniswap/v3-periphery/contracts/interfaces/INonfungibleTokenPositionDescriptor.sol";
    import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";

    /**
     * @title Decentralized Investment Platform
     * @dev This contract represents a decentralized platform for saving and investing assets using blockchain technology.
     * Users can deposit funds, invest in different options, earn interest, and manage access roles.
     */
    contract DecentralizedInvestmentPlatform {
        address public owner;
        TokenSwapper public tokenSwapper; // Add a state variable for the TokenSwapper contract
        // Initialize the TokenSwapper contract
            tokenSwapper = new TokenSwapper(_tokenA, _tokenB);


        enum Role {
            Owner,
            Investor
        }
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

        struct Notification {
            string message;
            uint256 timestamp;
        }

        struct UserProfile {
            string name;
            string email;
            uint256 birthdate;
        }

        mapping(address => Notification[]) public notifications;
        mapping(address => Investor) public investors;
        mapping(address => Role) public roles;
        mapping(address => address) public referrals; // Referral mapping
        // Mapping to track escrow contracts for deposits and withdrawals
        mapping(address => Escrow) public depositEscrows;
        mapping(address => Escrow) public withdrawalEscrows;

        uint256 public referralBonus = 100; // Referral bonus amount (adjust as needed)
        uint256 private constant INTEREST_RATE_LOW = 2; // 2% interest
        uint256 private constant INTEREST_RATE_MEDIUM = 5; // 5% interest
        uint256 private constant INTEREST_RATE_HIGH = 10; // 10% interest

        event Deposit(address indexed investor, uint256 amount);
        event Withdraw(address indexed investor, uint256 amount);
        event OwnershipTransferred(
            address indexed previousOwner,
            address indexed newOwner
        );
        event ReferralReward(
            address indexed referrer,
            address indexed newInvestor,
            uint256 bonus
        );

        modifier onlyRole(Role role) {
            require(roles[msg.sender] == role, "Unauthorized access");
            _;
        }

        modifier onlyOwner() {
            require(roles[msg.sender] == Role.Owner, "Unauthorized access");
            _;
        }

        constructor() {
            owner = msg.sender;
            roles[msg.sender] = Role.Owner;
        }

        /**
         * @dev Allows investors to deposit funds into their account.
         * It also includes notification of deposits made in account
         */
        function deposit() external payable {
            require(msg.value > 0, "Amount must be greater than 0");

            Investor storage investor = investors[msg.sender];
            investor.balance += msg.value;
            investor.lastDepositTimestamp = block.timestamp;

            emit Deposit(msg.sender, msg.value);

            // Send a notification to the investor
            notifications[msg.sender].push(
                Notification({
                    message: "You have successfully made a deposit.",
                    timestamp: block.timestamp
                })
            );

            // Create an escrow contract for the deposit
            Escrow escrow = new Escrow(msg.sender, address(this), msg.value);
            depositEscrows[msg.sender] = escrow;
        }

        function getNotifications() external view returns (Notification[] memory) {
            return notifications[msg.sender];
        }

        // transfer ownership

        function transferOwnership(address newOwner) external onlyOwner {
            require(newOwner != address(0), "Invalid new owner address");
            owner = newOwner;

            roles[newOwner] = Role.Owner;
            roles[msg.sender] = Role.Investor;

            emit OwnershipTransferred(owner, newOwner);
        }

        /**
         * @dev Allows investors to allocate funds to a specific investment option.
         * @param option The investment option to allocate funds to.
         * @param amount The amount to allocate.
         */
        function invest(InvestmentOption option, uint256 amount) external {
            require(amount > 0, "Amount must be greater than 0");

            Investor storage investor = investors[msg.sender];
            require(investor.balance >= amount, "Insufficient balance");

            // Distribute the investment amount among the chosen option
            investor.investments[option] += amount;
            investor.balance -= amount;
        }

        /**
         * @dev Allows investors to swap TokenA for TokenB using the TokenSwapper contract.
         * @param amount The amount of TokenA to swap.
         */
        function swapAToB(uint256 amount) external onlyRole(Role.Investor) {
            tokenSwapper.swapAToB(amount);
        }


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

        /**
         * @dev Allows investors to withdraw funds along with earned interest.
         * @param amount The amount to withdraw.
         */
        function withdraw(uint256 amount) external {
            Investor storage investor = investors[msg.sender];
            require(investor.balance >= amount, "Insufficient balance");

            uint256 totalWithdrawnAmount = amount;

            // Calculate and add interest for each investment option
            for (uint8 i = 0; i < 3; i++) {
                InvestmentOption option = InvestmentOption(i);
                uint256 interest = calculateInterest(option);
                investor.investments[option] += interest;
                totalWithdrawnAmount += interest;
            }

            // Update the investor's balance
            investor.balance -= totalWithdrawnAmount;
            payable(msg.sender).transfer(totalWithdrawnAmount);
            emit Withdraw(msg.sender, totalWithdrawnAmount);

            // Create an escrow contract for the withdrawal
            Escrow escrow = new Escrow(address(this), msg.sender, amount);
            withdrawalEscrows[msg.sender] = escrow;
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

        // /**
        //  * @dev Closes the investment platform and transfers remaining funds to the owner.
        //  * Note: Use with caution, as this action is irreversible.
        //  */
        // function closePlatform() external onlyOwner {
        //     selfdestruct(payable(owner));
        // }

        /**
         * @dev Allows investors to view their current balance, investment allocations, and earned interest.
         * @return balance The current balance of the investor.
         * @return investmentAmounts The investments in each option for the investor.
         * @return earnedInterests The earned interest in each option for the investor.
         */
        function viewInvestorDetails()
            external
            view
            returns (
                uint256 balance,
                uint256[] memory investmentAmounts,
                uint256[] memory earnedInterests
            )
        {
            Investor storage investor = investors[msg.sender];
            balance = investor.balance;

            investmentAmounts = new uint256[](3);
            earnedInterests = new uint256[](3);

            for (uint8 i = 0; i < 3; i++) {
                InvestmentOption option = InvestmentOption(i);
                investmentAmounts[i] = investor.investments[option];
                earnedInterests[i] = calculateInterest(option);
            }
        }

        function updateProfile(
            string memory newName,
            string memory newEmail,
            uint256 newBirthdate
        ) external {
            Investor storage investor = investors[msg.sender];
            investor.profile.name = newName;
            investor.profile.email = newEmail;
            investor.profile.birthdate = newBirthdate;
        }

        function getProfile()
            external
            view
            returns (string memory name, string memory email, uint256 birthdate)
        {
            Investor storage investor = investors[msg.sender];
            name = investor.profile.name;
            email = investor.profile.email;
            birthdate = investor.profile.birthdate;
        }

        function referInvestor(address newInvestor) external {
            require(newInvestor != address(0), "Invalid investor address");
            require(newInvestor != msg.sender, "Cannot refer yourself");
            require(
                referrals[newInvestor] == address(0),
                "Investor is already referred"
            );

            referrals[newInvestor] = msg.sender; // Record the referral

            // Award referral bonus to the referrer
            Investor storage referrer = investors[msg.sender];
            referrer.balance += referralBonus;

            emit ReferralReward(msg.sender, newInvestor, referralBonus);
        }
    }
