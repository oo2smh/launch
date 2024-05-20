/* PROB 1
SUM OF DIGITS [9min]
============================
INPUT: {+int}
OUTPUT: {+int} sum of its digits
RULES
- Can't use for while or do while loops
- Must use a series of method calls
EXAMPLES
- 23 -> 2 + 3 = 5
- 496 -> 4 + 9 + 6 = 19
- 123456789 -> 45
-------------------------------
DATA
- {arr} to hold each individual digit
PROCESS
- SEPARATE each digit on its own
* CALCULATE sum of adding each digit
- RETURN the sum of the digits
IMPLEMENTATION
- String(), Spread Syntax
- Reduce()
*/

/* PROB 7 [9min]
SUM OF SUMS []
INPUT: {array:num}
OUTPUT: {int} sum of the sums of each leading subsequence in array
RULES
- if the array has one item return the item itself
- no input validation is necessary based on examples
EXAMPLES
- [3,5,2] --> 3 + (3 + 5) + (3 + 5 + 2) = 21
- [1,2,3,4,5] --> 1 + (1+2) + (1+2+3) + (1+2+3+4) + (1+2+3+4+5) = 35
----------------------------------
DATA
- {number} previousSum: tally of previously addedSum
- {number} currentSum: output, result
PROCESS
- SET previousSum = 0, currentSum = 0
- TRAVERSE each i-integer
  - SET previousSum += i-integer
  - SET currentSum += previousSum
- RETURN currentSum
*/

function sumOfSums(arrayOfInt) {
  let previousSum = 0;
  let currentSum = 0;
  for (let int of arrayOfInt) {
    previousSum += int;
    currentSum += previousSum;
  }
  return currentSum;
}

function sum(posInt) {
  return [...String(posInt)].reduce(
    (total, currValue) => total + Number(currValue),
    0,
  );
}

// TESTS
function testSum() {
  console.log(
    sum(23), // 5
    sum(496), // 19
    sum(123456789), // 45
  );
}

function testSumOfSums() {
  console.log(
    sumOfSums([3, 5, 2]), // (3) + (3 + 5) + (3 + 5 + 2) --> 21
    sumOfSums([1, 5, 7, 3]), // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
    sumOfSums([4]), // 4
    sumOfSums([1, 2, 3, 4, 5]), // 35
  );
}

testSumOfSums();
