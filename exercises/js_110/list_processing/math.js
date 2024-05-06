/*
1. Sum of Digits
2. Sum of Sums
*/
// 1
function sum(positiveInt) {
  let integerArray = [...String(positiveInt)];
  return integerArray.reduce((total, integer) => total + Number(integer), 0);
}

// 2 Sum of Sums
function sumOfSums(arrayOfInt) {
  let consecutiveSum = [];
  let currentSum = 0;

  for (let idx = 0; idx < arrayOfInt.length; idx++) {
    currentSum += arrayOfInt[idx];
    consecutiveSum.push(currentSum);
  }

  return consecutiveSum.reduce( (total, number) => total + number);
}


/* ******************
 TESTS
 *********************/
console.log(
  // 1, sum(23),           // 5
  // 1, sum(496),          // 19
  // 1, sum(123456789),    // 45
  '2:', sumOfSums([3, 5, 2]),        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  '2:', sumOfSums([1, 5, 7, 3]),     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  '2:', sumOfSums([4]),              // 4
  '2:', sumOfSums([1, 2, 3, 4, 5]),  // 35
);
