// #region[A] NOTEPAD
/*
I PROBLEM
• \Inputs\: Loan Amount, Loan Duration, Interest Rate (APR)
• \Outputs\: Monthly Payment, Total Interest Rate Amount, Loan Duration

--- Additional Details
• Formula to calculate monthly payment:
  let monthlyPayment = loanAmount *
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate),
  (-monthlyDuration))));
• Assumptions: All the inputs are integers and not floats

II EXAMPLES/EDGE CASES
• User puts 0 for loan amount, APR and loan duration
• Negative numbers
• Dealing with floats (cents) b/c of rounding errors in floats

III DATA STRUCTURES
• messages object (opt) organizational use case

IV ALGORITHM
--- 1 SETUP
[00] create a var $$readline to bring in the 'readline-sync' module
[01] create a var $$messages to hold all the text messages of the
program (can also use a separate json file)

--- 2 HELPER FNS
[00] fn prompt
  [aa] add a => to all input statements
[01] fn isValidNumber(num)
  • returns Boolean. Checks to make sure all of these are true
  [aa] Convert $$ into a 'number'
  <bb> $$ is a value other than NAN
  <cc> $$ is an integer (Number.isInteger(num))
  <dd> $$ is a positive number > 0

--- 3 MAIN PROGRAM
A __ WELCOME USER
[00] Welcome the user to the mortgage calculator and
explain basic details of the program

B __ INPUT #1: LOAN AMOUNT
[00] Declare variable $$loanAmount
~01~ Loop: <while $$loanAmount is invalid>
  \aa\ Input: Loan Amount
  [bb] Assignment: $$loanAmount = input

C __ INPUT #2: LOAN DURATION
[00] Declare var $$loanTerm
~01~ Loop: <while $$loanTerm is invalid>
  \aa\ Input: Loan Term
  [bb] Assignment: $$loanTerm = input
[02] Assignment of transformed value: $$loanTerm = $$loanTerm / 12
  • This is to convert yearly term to monthly

D __ INPUT #3: INTEREST RATE
[00] Declare var $$interestRate
~01~ Loop: <while $$interestRate is invalid>
  \aa\ Input: interestRate
  [bb] Assignment: $$interestRate = input
[02] Assignment of transformed value: $$interestRate = $$interestRate / 100

E __ PLUG & OUTPUT
[00] function calculatePayment(loanAmount, APR, loanDuration) {
  let monthlyPayment = loanAmount *
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration))));
}
\01\ Output: Your monthly payment is ____ for the loanAmount of ___.
The total interest rate paid is ____.

F __ PLAY AGAIN?
~00~
  \aa\ Input: Play Again. Answer with 'y' or 'n'
  <bb> User response
    -- 'y': Jump to -- 3 Main Program and start again
    -- 'n': Exit program
    -- other: Jump to ~00~
~
//  #endregion[00]

// #region[00] SETUP
/* Includes modules and data structures (will be)
using an obj instead of a separate json file, Declares variables */

const readline = require('readline-sync');

const messages = {
  welcome: 'Welcome to the mortgage calculator 👋.\n This program calculates your monthly payment and total interest incrued to pay off your loan.\n In order to do this, we will need a Loan Amount, Annual Percentage Rate (APR) and the loan duration\n Press any key to get started',
  askLoanAmount: 'Please enter a Loan Amount. Enter is a positive integer greater than 0. Remove any special characters such as , or $. Valid responses include 100000, 20000.',
  askLoanDuration: 'Please enter a duration for your loan (The time duration you want to pay back your loans in years. Only enter positive integers. ',
  askAPR: 'Please enter the Annual Percentage Rate (APR). Enter it as a positive integer. For instance 25 for 25%',
  invalidNumber: 'Invalid input. Please enter a positive integer. Valid responses include (1,2,3,etc) ',
};

const MONTHS_IN_YEAR = 12;
let loanAmount, loanTerm, interestRate;
// #endregion[00]

// #region[01] HELPER FNS
function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(number) {
  number = Number(number);
  return !Number.isNaN(number) &&
  Number.isInteger(number) &&
  number > 0;
}

function getPayment(loanAmount, monthlyDuration, monthlyInterestRate) {
  let monthlyPayment = loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration))));
  prompt(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);
}
// #endregion[01]

// #region[02] MAIN PROGRAM
prompt(messages.welcome);
readline.question();

prompt(messages.askLoanAmount);
loanAmount = readline.question();
while (!isValidNumber(loanAmount)) {
  prompt(messages.invalidNumber);
  loanAmount = readline.question();
}

prompt(messages.askLoanDuration);
loanTerm = readline.question();
while (!isValidNumber(loanTerm)) {
  prompt(messages.invalidNumber);
  loanTerm = readline.question();
}
loanTerm *= 12;

prompt(messages.askAPR);
interestRate = readline.question();
while (!isValidNumber(interestRate)) {
  prompt(messages.invalidNumber);
  interestRate = readline.question();
}
interestRate = (interestRate / MONTHS_IN_YEAR) / 100;

getPayment(loanAmount, loanTerm, interestRate);
// #endregion[02]
