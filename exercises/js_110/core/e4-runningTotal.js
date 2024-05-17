/*
Write a function that takes an array of numbers and returns an array with the
same number of elements, but with each element's value being the running total
from the original array.
*/

/*
INPUT: {array(nums)} arrayOfNums OUTPUT: {array(nums)} runningTotals RULES
- Running Total = sum of adding the current elem with the previous accumulated
sum - Empty array -> returns empty array
-------------------------
PROCESS
* SET currentSum = 0; TRAVERSE each i in array
  + SET currentSum += i + TRANSFORM each elem of array to currentSum
* RETURN transformed array
*/

function runningTotal(arrayOfInt) {
  let currentSum = 0;
  return arrayOfInt.map((int) => {
    currentSum += int;
    return currentSum;
  });
}

console.log(
  runningTotal([2, 5, 13]), // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]), // [14, 25, 32, 47, 67]
  runningTotal([3]), // [3]
  runningTotal([]), // [])
);
