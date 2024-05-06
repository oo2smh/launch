/*
1. Counting Up
2. SequenceCount
*/

function countUp(integer) {
  let newArray = [];
  let count = 0;
  while (count < integer) {
    count++;
    newArray.push(count);
  }
  return newArray;
}

function sequence(count, startNum) {
  let array = [];
  let currentValue = startNum;
  while (array.length < count) {
    array.push(currentValue);
    currentValue += startNum;
  }
  return array;
}

/* ********************
TESTS
********************* */
console.log(
  countUp(5),    // [1, 2, 3, 4, 5]
  countUp(3),    // [1, 2, 3]
  countUp(1),    // [1]
  '2 sequence',sequence(5, 1),          // [1, 2, 3, 4, 5]
  '2 sequence',sequence(4, -7),         // [-7, -14, -21, -28]
  '2 sequence',sequence(3, 0),          // [0, 0, 0]
  '2 sequence',sequence(0, 1000000),    // []
);
