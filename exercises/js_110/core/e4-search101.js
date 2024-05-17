// Write a program that solicits 6 numbers from the user and logs a message that
// describes whether the 6th number appears among the 1st 5 numbers.
const readline = require("readline-sync");
let request = 0;
let userNumbers = [];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function promptNumber() {
  while (request < 5) {
    prompt("Please enter in a valid integer number");
    let number = readline.questionInt();
    userNumbers.push(number);
    request++;
  }
}

function hasNumber() {
  console.log(`Previously Chosen Numbers: ${userNumbers}`);
  prompt(
    "Please choose a number. We will check your previous 5 numbers and see if any numbers match",
  );
  let chosenNumber = readline.questionInt();
  console.log(userNumbers.includes(chosenNumber));
}

promptNumber();
hasNumber();
