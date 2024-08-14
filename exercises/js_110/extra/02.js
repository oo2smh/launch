/* Create a function that takes an array of integers as an argument. The
 * function should return the minimum sum of 5 consecutive numbers in the
 * array. If the array contains fewer than 5 elements, the function should
return null.

/* [30min]
INPUT: {int[]}
OUTPUT: {int} minSum: minimum sum of 5 consecutive #s
RULES
- if array contains < 5 elems return null

PROCESS
 CHECK if array contains less than 5 elems
  YES: RETURN null
 CREATE v:allPossibleSums = []
 TRAVERSE through each elem of array
 CHECK if there are 4 more following elems in array
  YES: APPEND currElem and 4 folloing elems into array
  NO: Exit loop
 GET sum of 5 elems
 PUSH sum to allPossibleSums
 RETURN minimum out of all possible sums
*/

// 123456
// arr.length - 5 <= idx;

const p = console.log;

function minimumSum(arr) {
  if (arr.length <= 5) return null;
  let allPossibleSums = [];
  for (let idx = 0; arr.length - 5 >= idx; idx++) {
    let currentSum = arr[idx];
    for (let count = 1; count < 5; count++) {
      currentSum += arr[idx + count];
    }
    allPossibleSums.push(currentSum);
  }

  return Math.min(...allPossibleSums);
}

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
