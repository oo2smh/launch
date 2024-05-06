/*
  ITERATION/SEARCH PROBLEMS
  - Involves iterating over a collection
    ** Performing some kind of action with each iteration
  - Then searching through a collection to retrieve a value 
*/

const readline = require('readline-sync');
let numberTitle = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

let userChosenNumbers = numberTitle.map(title => {
  return readline.questionInt(`Enter the ${title} number:\n`);
});

let lastNumber = userChosenNumbers.pop();

if (userChosenNumbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${userChosenNumbers.join()}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${userChosenNumbers.join()}.`);
}