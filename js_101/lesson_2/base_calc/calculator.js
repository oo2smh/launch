// #region[00] SETUP
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATIONS = ['1', '2', '3', '4'];
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
  console.log(`=> ${message} ${moreMessages}`);
}

function printResult(result) {
  displayMessage('answer', result);
}

function changeLanguage(index) {
  index = Number(index) - 1;
  return VALID_LANGUAGES[index];
}

// VALIDATION & ERROR CHECKING
// =================================================================
function isInvalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

// MAIN ACTION
// =================================================================
function calculate(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = `${number1} + ${number2} = ${number1 + number2}`;
      break;
    case '2':
      output = `${number1} - ${number2} = ${number1 - number2}`;
      break;
    case '3':
      output = `${number1} * ${number2} = ${number1 * number2}`;
      break;
    case '4':
      output = `${number1} / ${number2} = ${number1 / number2}`;
      break;
  }
  return output;
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

  let result = calculate(Number(number1), Number(number2), operation);
  printResult(result);

  displayMessage('stopPlaying');
  play = readline.question();
  if (play === 'no' || play === 'n') break;
  console.clear();
}

// #endregion[03]