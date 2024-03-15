# Overview
This is where I will put my precode (not the program itself), but the
planning and organizing before I dive in. I tried my 1st real stab at PEDAC
and I ended up struggling a bit. 

Using PEDAC, I also found the jump from the **Data Structures** to the
**Algorithm** section a bit too drastic. For that reason, I added an
additional **Informal Pseudocode** section. The LS psuedocode section does
divide it up *Informal* and *Formal* pseudocode as well. I found this extra
step to be helpful.

My algorithm remains incomplete because I started off with it and then as I
started coding the additional features, I found myself jumping between
different parts of the code. Most likely, this was a sign that I had not
spent enough time in the **Algorithm** section.

I did want to use `JSdoc` as well, but ended up not using it. I do want to
use it in the future. 

## Improvements
- More thorough time spent on PEDAC especially the Algorithm section
- Start by getting the main program working. Then any only then add the
  extra features
  - I found myself jumping between different features and felt
    scatterbrained
- Naming variables 
  
## Lessons
- Learned about following ESLINT. The rule I struggled with a lot is:
  - Max statements per function (20)
- Validation of input
  - If I were to code this on my own, I would not have thought of the edge
    cases or handled possible errors, but I learned how important it is
- Code organization
  - Learned about different ways to write code 

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
- need to convert operands into number (do it at the end)
- will limit user to only integers

=================================================================
[II] EXAMPLES/EDGE CASES
=================================================================
__ BASIC OPERATIONS
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
calculateOperation(1,1,1) // 2
calculateOperation(4,3,3) // 12

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
- validLanguages = {array}

=================================================================
[IV] INFORMAL PSEUDOCODE
=================================================================
  - GET inputs from users using readline.question()
  + SET- DECLARE & INITIALIZE inputs to variables 
  ~ WHILE (input is Invalid)
    * Invalid number = NaN, ' ', non-Integer 
    * Invalid operation = [1,2,3,4]. Each number corresponds to an
    operation. 1. addition, 2. subtraction, 3. multiplication,
    4. division
    - GET another input from user 
    = SET - ASSIGN new input to respective variable
  ^ IF `operation` is 1 
      - PRINT `number1` + `number2`
    ELSE IF `operation` is 2
      - PRINT `number1` - `number2`
    ELSE IF `operation` is 3
      - PRINT `number1` * `number2`
    ELSE IF  `operation` is 4
      - PRINT `number1` / `number2`
  - IF user wants to play again
    ~ LOOP through the entire program again
  - ELSE
    - END program
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
__ INPUT FOR NUM 1
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
- 01 GET input {string} from user 1st number
+ 02 SET number1 = Number(input)
~ 03 WHILE (number1 is NaN)
  - GET input from user 1st number
  + SET number1 = Number(input)

__ INPUT FOR NUM 2
•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
* Perform 01-03 for number2 variable

__ INPUT FOR OPERATION
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