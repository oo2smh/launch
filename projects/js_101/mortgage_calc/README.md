# OVERVIEW

---
# PRIMING
## PROBLEM
- **Inputs**: 
  - {number} loanAmount
  - {integer} apr
  - {integer} loanDuration
      - years 
      - months 
  give option to put years and months
- **Output**: 
  - {string} monthly payment shown in `$` 
  - {string} {string} total
  interest shown in `$`
  - {string} total of 12 payments shown in `$`

## EXAMPLES/EDGE CASES
### BASE EXAMPLES
- Inputs:
  - Loan Amount: 100
  - APR: 10%
  - Loan Duration: 1year
```
let APR = 10 / 100;
let monthlyInterestRate = APR / 12; 
monthlyPayment = loanAmount * (monthlyInterestRate / (1 - (1 + monthlyInterestRate) ** -monthlyLoanDuration));
```
### EDGE CASES
- User enters the value of 0
- User enters a negative value
- User enters a float with multiple decimal points
- User enters an invalid Number or NaN
--- 
## DATA STRUCTURES
## INFORMAL PSEUDOCODE
### HIGH LEVEL OVERVIEW
- GET inputs from user
- VALIDATE inputs from users
  - SUBPROCESS
- CONVERT inputs from users to use in formula
  - SUBPROCESS
- PLUG in inputs from users for formula
  ```
  let monthlyPayment = loanAmount * (monthlyInterestRate / 1 - (1 + monthlyInterestRate) ** -monthlyLoanDuration)
  ```
- FORMAT output from user
  - SUBPROCESS
- PRINT output for user 
- LOOP: Play again?

### SUBPROCESSES
- Format to Currency
  - Take a number
  - toFixed(2)
  - Append a $ at the beginning
- getDecimal
  - Convert whole number % into a decimal number for use in formula
- convertToMonthly
  - Divide by 12 to convert between yearly to monthly
  - Need to convert monthly loan duration in months

### VARIABLES
- loanAmount 
- APR
- APR in decimals
- Monthly Interest Rate
- loanDuration
- loanDurationInMonths
- Monthly Payment
- Total Interest Rate
- Total Payment = LoanAmount + TotalInterest Rate

### UX IMPROVEMENTS
- Add a '$' before prompts where user has to put in a dollar amount
- Have an easy way for the user to add years and months. Then convert their
  response to months

# ALGORITHM
```
==================================================
[I] SETUP
==================================================
- IMPORT readline-sync node module 
- SET readline = readline.sync
- IMPORT mortgage_calc_msgs.json

__ MAGIC VALUES
••••••••••••••••••••••••••••••••••••••••••••••••••
- SET MONTHS_IN_YEAR = 12;

==================================================
[II] SUBPROCESSES
==================================================
__ VALIDATION
••••••••••••••••••••••••••••••••••••••••••••••••••
+ SET function isInvalidNumber(number)
  = SET number = Number(number)
  * invalid: number <= 0
  * invalid: Number.isNaN(number) === true
  * invalid: user enters no value = ' '
  * invalid: number is greater than 2 decimal places
  - RETURN Boolean

+ SET function isNotInteger(number)
  * used for loanDuration
  - RETURN boolean

__ UX IMPROVEMENTS
••••••••••••••••••••••••••••••••••••••••••••••••••
+ displayMessage(message)
  * add `=>` before a console.log message

__ NUMBER FORMATTING
••••••••••••••••••••••••••••••••••••••••••••••••••
- convertToDecimal(number)
  * convert percentage number into a decimal
  - number param / 100

- convertToMonthly(number)
  * only works when going from year to month
  - Divide arg by 12
  - Return new number

==================================================
[III] MAIN PROGRAM
==================================================
- GET input from user for loan amount
+ SET loanAmount = Number(input)
+ WHILE loanAmount is invalid = (SUBPROCESS: isInvalidLoan)
  - GET input from user for loan amount 
  + SET loanAmount = Number(input)
- GET input from user for APR
+ SET apr = input 
= SET-FORMAT apr to decimal = (SUBPROCESS convertToDecimal)
+ SET monthlyInterestRate = 

```
