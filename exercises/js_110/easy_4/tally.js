/*
TALLY Problems
  * Problems that includes keeping track of a tally such as a counter
  * Tally problems need a variable to keep track of value
*/

function runningTotal(arrayOfNum) {
  let currentSum = 0;
  return arrayOfNum.map( elem => {
    currentSum += elem;
    return currentSum;
  });
}

console.log(runningTotal(['134']));