
// Problem:
/* Inputs: Loan Amount, APR, Loan duration
- Output: monthly payment, total interest rate paid and duration to pay off loan 
- let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration)))); */

// Edge Cases
// - User puts 0 for loan amount, APR and loan duration
// - Loans that aren't for an integer number of years

// Setup readlinesync in node to have the user be able to input information
// Welcome the user to the mortgage calculator and explain basic details of the program
// Create a mortgage object to store the information
// Gather the 3 pieces of input from the user and store it in their own variable (property of an object)
// Check to see if the entered inputs are valid (number type and formatted according to the rules in the description)
// Convert inputs into a format that's usable by the equation (APR to months, remove $ and , from loan amount and convert it to cents, convert loan duration to months)
// Plug everything into the equation
// Convert outputs into human readable format and spit it back to the user
// Conditional: Ask the user if they want to perform another calculation

// Helper functions, modules, data structure
const readline = require('readline-sync');
const mortgage = {};

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculatePayment(loanAmount, APR, loanDuration) {
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration))));
}

// Welcome User
prompt('Welcome to the mortgage calculator 👋.\n This program calculates your monthly payment and total interest incrued to pay off your loan.\n In order to do this, we will need the Loan Amount, Annual Percentage Rate (APR) and the loan duration\n Press any key to get started');
readline.question();

// Gather Inputs from User
prompt('Please enter the Loan Amount (Please enter it as $100,000.11 format). You can leave off the cents (digits after the decimal point if it\'s 0).');
let loanAmount = Number(readline.question().replace('$', '').replace(',', ''));

prompt('Please enter the Loan Term (The time duration you want to pay back your loans. Put it in terms of years and months. (Ex 9y 10m = 9years and 10 months). You can leave off the years if it\'s 0');
let loanDuration = readline.question().split(' ');


prompt('Please enter the Annual Percentage Rate (APR). Enter it in a decimal format (Ex. 0.15 for 15%)');
let apr = readline.question();

console.log({loanAmount}, {loanDuration}, {apr});