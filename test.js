// test.js
const calculateEMI = require('./index');

const principal = 1000000; // 1,000,000 INR
const interestRate = 8; // 8% annual interest rate
const tenure = 12 * 20; // 20 years

const emi = calculateEMI(principal, interestRate, tenure);
console.log(`Your EMI: ₹${emi.toFixed(2)} INR per month`);
