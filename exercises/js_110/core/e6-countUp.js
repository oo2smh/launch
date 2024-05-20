/*
INPUT: {integer}
OUTPUT: {array} array of int
RULES:
- + integer
- Inclusive of input
*/

// Pocsai's solution using map
let sequence1 = (num) => [...Array(num)].map((_, idx) => idx + 1);

// Fontillas' solution
function sequence2(num) {
  return [...new Array(num).keys()].map((num) => num + 1);
}

function sequence(int) {
  let newArray = [];
  for (let number = 1; number <= int; number++) {
    newArray.push(number);
  }
  return newArray;
}

function testSequence() {
  console.log(
    sequence(5), // [1, 2, 3, 4, 5]
    sequence(3), // [1, 2, 3]
    sequence(1), // [1])
  );
}

testSequence();
