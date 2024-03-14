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