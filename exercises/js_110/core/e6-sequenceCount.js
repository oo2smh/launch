/* SEQUENCE COUNT
INPUT: {int} count, {int} startingNum of sequence, amt to add by
OUTPUT: {arr:int}
GOAL: Return an array of integers of (count) elems starting from the 2nd input.
And adding by the 2nd input amt each time
===========================
PROCESS
  CREATE an empty array result = []
  CREATE currentNum = 0
  WHILE length of array is less than in:count
   ADD in:count to currentNum
   STORE CALCULATION to currentNum
   PUSH currentNum to empty array
  RETURN result

*/

function sequence(count, amtToAdd) {
  let result = [];
  let currentNum = 0;

  for (let idx = 0; idx < count; idx++) {
    currentNum += amtToAdd;
    result.push(currentNum);
  }

  return result;
}

function testSequence() {
  console.log(
    sequence(5, 1), // [1, 2, 3, 4, 5]
    sequence(4, -7), // [-7, -14, -21, -28]
    sequence(3, 0), // [0, 0, 0]
    sequence(0, 1000000), // []
  );
}

testSequence();
