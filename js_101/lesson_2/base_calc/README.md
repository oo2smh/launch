# Overview

# Priming
```
=================================================================
[I] PROBLEM
=================================================================
- Inputs: {number, number, string}: string = operation to perform
- Output: {number} calcResult

__ ADDITIONAL DETAILS
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
- valid operations are add, subtract, multiply, divide
- want to get inputs dynamically from the user
- need to convert operands into number

=================================================================
[II] EXAMPLES/EDGE CASES
=================================================================
__ BASIC OPERATIONS
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
calculateOperation(1,1,'+') // 2
calculateOperation(4,3,'*') // 12

__ EDGE CASES
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
- floats?  calculateOperation(1.23, 3.23, '+') // 4.46
- invalid number?  calculateOperation('string', 'string', '-')
- invalid operator?  calculateOperation(1,1,3)

=================================================================
[III] DATA STRUCTURES
=================================================================
- json (messages) to hold messages that will be outputted to the user
- validOperations = {array}

```
# Algorithm
```

=================================================================
[I] SETUP
=================================================================
+ SET readline = require('./readline-sync);
  * gives input capabilities
+ IMPORT calculator_messages.json to hold all calculator messages

=================================================================
[II] UX ENHANCEMENTS
=================================================================
* greet user, say goodbye
* specify when there is an error and how to fix it
* distinguish between output messages and areas for user input
* allow user to choose between languages

=================================================================
[III] MAIN PROGRAM
=================================================================
__ NUM 1
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
- 01 GET input {string} from user 1st number
+ 02 SET number1 = Number(input)
~ 03 WHILE (number1 is NaN)
  - GET input from user 1st number
  + SET number1 = Number(input)

__ NUM 2
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
* Perform 01-03 for number2 variable

__ OPERATIONS
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
- GET input {string} for operation from user
+ SET operation = input
~ WHILE (operation is invalid)
  * check against validOperations array
  - GET input {string} for operation from user
  + SET operation = input

__ PERFORM OPERATIONS
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
^ IF (operation is '+')
  - PRINT number1 + number2
^ ELSE IF (operation is '-')
  - PRINT number1 - number2
^ ELSE IF (operation is '/')
  - PRINT number1 / number 2
^ ELSE IF (operation is '*')
  - PRINT number1 * number 2
```