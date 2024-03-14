// #region[A] OVERVIEW
/**
 *
 *
 *
*/


// #endregion[A]

// #region[B] PRIMING
/*
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
*/
// #endregion[B]

// #region[C] ALGORITHM
/*
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
*/
// #endregion[C]

// #region[00] SETUP
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATIONS = ['1', '2', '3', '4', '5'];
const VALID_LANGUAGES = ['en', 'ko'];
let play = 'yes';
let defaultLanguage;
// #endregion[00]

// #region[01] HELPER FNS
// UX ENHANCEMENTS
// =================================================================
function getMessage(message, language = defaultLanguage ?? 'en') {
  return MESSAGES[language][message];
}

function displayMessage(message, ...moreMessages) {
  message = getMessage(message);
  console.log(`=> ${message}${moreMessages}`);
}

function printResult(result) {
  console.log(`${getMessage('answer')} ${result}`);
}

function changeLanguage(language) {
  language = Number(language) - 1;
  return VALID_LANGUAGES[Number(language)];
}

// VALIDATION & ERROR CHECKING
// =================================================================
function isInvalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

// MAIN ACTION
// =================================================================
function calculate(number1, number2, operation) {
  number1 = Number(number1);
  number2 = Number(number2);

  switch (operation) {
    case '1':
      return number1 + number2;
    case '2':
      return number1 - number2;
    case '3':
      return number1 * number2;
    case '4':
      return number1 / number2;
    case '5':
      return number1 % number2;
  }
}
// #endregion[01]

// #region[02] MAIN PROGRAM

while (true) {
  displayMessage('welcome');
  displayMessage('chooseLanguage');
  defaultLanguage = changeLanguage(readline.question());

  while (!VALID_LANGUAGES.includes(defaultLanguage)) {
    displayMessage('invalidLanguage');
    defaultLanguage = changeLanguage(readline.question());
  }
  displayMessage('languageConfirmation');

  displayMessage('firstNumber');
  let number1 = readline.question();
  while (isInvalidNumber(number1)) {
    displayMessage('invalidNumber');
    number1 = readline.question();
  }

  displayMessage('secondNumber');
  let number2 = readline.question();
  while (isInvalidNumber(number2)) {
    displayMessage('invalidNumber');
    number2 = readline.question();
  }

  displayMessage('operationInput');
  let operation = readline.question();
  while (!VALID_OPERATIONS.includes(operation)) {
    displayMessage('invalidOperation');
    operation = readline.question(MESSAGES.invalidOperation);
  }

  let result = calculate(number1, number2, operation);
  printResult(result);

  displayMessage('stopPlaying');
  play = readline.question();
  if (play === 'no' || play === 'n') break;
  console.clear();
}

// #endregion[03]