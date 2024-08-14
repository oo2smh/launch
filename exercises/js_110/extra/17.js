/*
Create a function that takes an array of integers as an argument. The function
should determine the minimum integer value that can be appended to the array so
the sum of all the elements equal the closest prime number that is greater than
the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6.
The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array
to sum to 7. The array will always contain at least 2 integers. All values in
the array must be positive (> 0). There may be multiple occurrences of the
various numbers in the array.
*/

/* [22:04]
IN: {int[]} input
OUT: {int}
RULES
- Determine minimum int value that can be appended to the array so that the sum of all the elems equal the closest prime # that is > than the current sum of the numbers
- array will contain at least 2 integers
- all values in arrays are > 0
- multiple occurrences of same numbers in array
EX:
[1,2,3] => sum = 6, nearest prime number greater than 6 is 7

GOAL: Get the sum of all i:int in array. Find the closest prime number to the sum. Return the num that must be added from sum to get to the prime number. @isPrime @nearestPrimeSum

PROCESS
  CREATE sum = sum of all int in in:array
  DETERMINE the next closest prime number
    - LOOP through starting with v:sum UNTIL num is Prime @isPrime
  CALCULATE prime number - sum
  RETURN difference
*/

function isPrime(value) {
  for (let count = 2; count <= Math.sqrt(value); count++) {
    if (value % count === 0) return false;
  }
  return true;
}

function nearestPrimeSum(inputArr) {
  let sum = inputArr.reduce((total, curr) => total + curr);
  for (let num = sum + 1; ; num++) {
    if (isPrime(num)) return num - sum;
  }
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
