/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// My ATTEMPT
/* let readline = require('readline-sync');

console.log('My Calculator Attempt #1');
let firstNumber = +readline.question('What is the first number?\n');
let secondNumber = +readline.question('What is the second number?\n');
let mathOperator = readline.question('Please enter a mathematical operation.\n
 Valid operators are [ + , - , * , / ]\n';
);

switch (mathOperator) {   case '+':
    console.log(firstNumber + secondNumber);
    break;    case '-':
    console.log(firstNumber - secondNumber);
    break;    case '*':
    console.log(firstNumber * secondNumber);
    break;    case '/':
    console.log(firstNumber / secondNumber);
    break;    case '%':
    console.log(firstNumber % secondNumber);
    break;    case '**':
    console.log(firstNumber ** secondNumber);
    break;
  default:
    console.log('Cannot perform mathematical operation');
}


 */
// Launch School Solution
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let readline = require('readline-sync');
console.log('Welcome to the Calculator!');

function isInvalidNumber(number) {
  return number === '' || Number.isNaN(+number);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function printResult(output) {
  console.log(`The answer is ${output}`);
}

function calculator() {
  prompt('What is the first number?');
  let number1 = readline.question();
  console.log(number1);

  while (isInvalidNumber(number1)) {
    prompt('That is not a valid number. Please enter a valid number');
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();
  while (isInvalidNumber(number2)) {
    prompt('That is not a valid number. Please enter a valid number');
    number2 = readline.question();
  }

  prompt(
    'Please enter a mathematical operation.\n (1) Addition, (2) Subtraction, (3) Multiplication, (4) Division (5) Remainder'
  );
  let operation = readline.question();

  while (
    !['1', '2', '3', '4', '5', '+', '-', '*', '/', '5'].includes(operation)
  ) {
    prompt(
      'Invalid input. Please enter a valid mathematical operation.\n (1) Addition, (2) Subtraction, (3) Multiplication, (4) Division (5) Remainder'
    );
    operation = readline.question();
  }

  switch (operation) {
    case '+':
    case '1':
      printResult(Number(number1) + Number(number2));
      break;
    case '-':
    case '2':
      printResult(Number(number1) - Number(number2));
      break;
    case '*':
    case '3':
      printResult(Number(number1) * Number(number2));
      break;
    case '/':
    case '4':
      printResult(Number(number1) / Number(number2));
      break;
    case '%':
    case '5':
      printResult(Number(number1) % Number(number2));
      break;
    case '**':
    case '6':
      printResult(Number(number1) ** Number(number2));
      break;
  }
}

calculator();
