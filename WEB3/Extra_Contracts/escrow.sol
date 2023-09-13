// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Escrow {
    address public depositor;
    address public beneficiary;
    uint256 public amount;
    bool public released;
    
    constructor(address _depositor, address _beneficiary, uint256 _amount) {
        depositor = _depositor;
        beneficiary = _beneficiary;
        amount = _amount;
    }
    
    function release() external {
        require(msg.sender == beneficiary, "Only the beneficiary can release funds");
        require(!released, "Funds have already been released");
        
        released = true;
        payable(beneficiary).transfer(amount);
    }
    
    function cancel() external {
        require(msg.sender == depositor, "Only the depositor can cancel");
        require(!released, "Funds have already been released");
        
        released = true;
        payable(depositor).transfer(amount);
    }
}

/*
In this example, I've created an Escrow contract that holds the deposited or withdrawn funds until they are either released or canceled. 
The DecentralizedInvestmentPlatform contract creates instances of the Escrow contract for each deposit and withdrawal, 
and the funds are released or refunded according to the conditions. */






