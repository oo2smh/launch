// #region[TOC]
/*
A - ESLINT PROBS
B - NOTEPAD

00 - EXTERNAL MODULES/FILES
01 - HELPER FNS
02 - CALC PROGRAM
*/

// #endregion[TOC]

// #region[A] ESLINT PROBS
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// #endregion[A]

// #region[B] NOTEPAD
/*
--- LEGEND
@@ = START, STOP
[] = Processing Step
  • Var Declaration,Assignment, Reassignment
  • Value Transformation, Iteration, Type Conversion
\\ = Input, Output
<> = Decision/Conditional/
-- = Yes/No Decision Branches
() = Connector
~~ = loop block
__ = non-loop block or within the global scope
ƒƒ = functions


--- ROUGH PSEUDOCODE/MENTAL MODEL
@@ START
00 Ask the user for the first number.
01 Ask the user for the second number.
02 Ask the user for an operation to perform.
03 Perform the operation on the two numbers.
04 Print the result to the terminal.
@@ STOP


--- MAIN FLOWCHART
@START@
__ Z
- \\ Output: Welcome Users to App
~~ Play Again Loop
  ~~ A Loop
  01 \\ Input: 1st Number
  02 <> Check Validity of number 1
    -- True ƒƒ isInvalid => A
    -- False ƒƒ isinvalid => B
  ~~ B Loop
  01 \\ Input: 2nd Number
  02 <> Check Validity of number 2
    -- True ƒƒ isInvalid => B
    -- False ƒƒ isInvalid => C
  ~~ C Loop
  01 \\ Input: Operator
  02 <> Check Validity of Operator
    -- True ƒƒ isInvalidOperator => C
    -- False ƒƒ isInvalidOperator => D
  __ D Loop
  01 [] result = num1 (operation) num2
  02 \\ Output result
  03 \\ Input play again?
  04 <> Check answer of Play Again (03)
    -- True: Start Play Again Loop. Back to A
    -- False: STOP
@STOP@
*/
// #endregion[B]

// #region[00] EXTERNAL MODULES/FILES
let messages = require('./calculator-messages.json');
let readline = require('readline-sync');
// #endregion[00]

// #region[01] HELPER FNS
function getMessages(lang = 'en', message) {
  return messages[lang][message];
}

function isInvalidNumber(number) {
  return number === '' || Number.isNaN(+number);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function printResult(output) {
  console.log(`${getMessages('en', 'answer')} ${output}`);
}
// #endregion[01]

// #region[02] CALC PROGRAM
function calculator() {
  prompt(getMessages('en', 'firstQuestion'));
  let number1 = readline.question();
  console.log(number1);

  while (isInvalidNumber(number1)) {
    prompt(getMessages('en', 'invalidNumber'));
    number1 = readline.question();
  }

  prompt(getMessages('en', 'secondQuestion'));
  let number2 = readline.question();
  while (isInvalidNumber(number2)) {
    prompt(getMessages('en', 'invalidNumber'));
    number2 = readline.question();
  }

  prompt(getMessages('en', 'operationInput'));
  let operation = readline.question();

  while (
    !['1', '2', '3', '4', '5', '+', '-', '*', '/', '5'].includes(operation)
  ) {
    prompt(getMessages('en', 'invalidOperation'));
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

  prompt(getMessages('en', 'playAgain'));
  let playAgain = readline.question().toLowerCase();
  let validResponses = ['yes', 'y', 'ok', 'ye'];

  if (validResponses.includes(playAgain) ) {
    calculator();
  }

}
// #endregion[02]

calculator();