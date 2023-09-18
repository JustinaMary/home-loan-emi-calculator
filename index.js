// index.js

/**
 * Calculate Home Loan EMI
 * @param {number} principal - The loan amount
 * @param {number} interestRate - The annual interest rate (in percentage)
 * @param {number} tenure - The loan tenure (in months)
 * @returns {number} - The calculated EMI
 */
function calculateEMI(principal, interestRate, tenure) {
    const monthlyInterestRate = (interestRate / 12) / 100;
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure) / (Math.pow(1 + monthlyInterestRate, tenure) - 1);
    return emi;
  }
  
  module.exports = calculateEMI;
  