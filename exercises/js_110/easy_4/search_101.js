/*
  * SET array to hold userInputs
  * PROMPT user for 5 numbers
  * STORE user inputs into array
  * PROMPT user for last number
  * CHECK if last number is inside array of user input
    * PRINT message if true
    * PRINT alternative message if false

%%%%%%%%%%%%%%%%%%%%%%%
LESSONS
%%%%%%%%%%%%%%%%%%%%%%%
- If you need to store a list of something, put it in an empty array
  * Having data in a data structure allows for easier manipulation,
    searching/filtering, transforming
- PEDAC doesn't work 100% here, because there is no input, but the basic idea
  stands
- Don't get bogged down by extracting logic into functions right away
  * You can optimize and refactor later

%%%%%%%%%%%%%%%%%%%%%%%%%%
OTHER NOTES
%%%%%%%%%%%%%%%%%%%%%%%%%
- If user just enters, a 0 is pushed into the array
  * Input validation might be needed
- If the user puts in a non-Integer value, NaN gets pushed to the array
*/

// SETUP
const readline = require('readline-sync');
let userInputList = [];

function isNumberIncluded(num, list) {
  return list.includes(num);
}

//MAIN
function getUserNumberFiveTimes() {
  for (let count = 0; count < 5; count++) {
    let userInput = Number(readline.question('Please enter a digit:\n'));
    userInputList.push(userInput);
  }
}

getUserNumberFiveTimes();

// NUMBER CHECK
let chosenNum = Number(readline.question('Please enter a digit to check if it\'s included in your list:\n'));
if (isNumberIncluded(chosenNum, userInputList)) {
  console.log(`The number ${chosenNum} appears in ${userInputList.join()}`);
} else {
  console.log(`The number ${chosenNum} does not appear in ${userInputList.join()}`);
}
