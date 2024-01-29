/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let MESSAGES = require('./calculator-messages.json');
let readline = require('readline-sync');

function getMessages(lang = 'en', message) {
  return MESSAGES[lang][message];
}

function isInvalidNumber(number) {
  return number === '' || Number.isNaN(+number);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function printResult(output) {
  console.log(`${getMessages('ko', 'answer')} ${output}`);
}

function calculator() {
  prompt(getMessages('ko', 'firstQuestion'));
  let number1 = readline.question();
  console.log(number1);

  while (isInvalidNumber(number1)) {
    prompt(getMessages('ko', 'invalidNumber'));
    number1 = readline.question();
  }

  prompt(getMessages('ko', 'secondQuestion'));
  let number2 = readline.question();
  while (isInvalidNumber(number2)) {
    prompt(getMessages('ko', 'invalidNumber'));
    number2 = readline.question();
  }

  prompt(getMessages('ko', 'operationInput'));
  let operation = readline.question();

  while (
    !['1', '2', '3', '4', '5', '+', '-', '*', '/', '5'].includes(operation)
  ) {
    prompt(getMessages('ko', 'invalidOperation'));
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

  prompt(getMessages('ko', 'playAgain'));
  let playAgain = readline.question().toLowerCase();
  let validResponses = ['yes', 'y', 'ok', 'ye'];

  if (validResponses.includes(playAgain) ) {
    calculator();
  }

}

calculator();

