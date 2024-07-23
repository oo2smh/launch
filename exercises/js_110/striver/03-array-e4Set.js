/* []
LONGEST SUBARRAY WITH GIVEN SUM K (POSITIVES)
================================
[GOAL]: Given an array and a sum k, print the length of the longest subarray
that sums to k. All nums in input array are 1+
[IN]: {int[]}, {int} k
[OUT]: {int} length of longest subarray
[RULES]
- What if sum doesn't exist in array? --> RETURN 0
[PAT]: nested loop, sliding window, 2 pointer
[INFO]
- prefixSum = sum of elems in window
[MENTAL]: While rightPointer is less than last elem of array, traverse the array.
At each i:elem check the prefixSum. If prefixSum = k, get the length of the
window. If it's less than, move right pointer to the right. If it's greater than
k, move left pointer to the right. Rinse and repeat

[ALGO]
---------------
-- v:sum = 0
-- v:maxLength = 0
-- v:leftPointer = 0
-- v:rightPointer = 0

WHILE v:rightPointer < length of array
  ADD i:elem to sum
  WHILE i:prefixSum is greater than k
    SUBTRACT arr[v:leftPointer] from v:sum
    INCREMENT v:leftPointer by 1
  IF i: is equal to k
    GET the length of window
    IF window's length > v:maxLength
      SET v:maxLength = window's length
  INCREMENT v:rightPointer by 1
RETURN v:maxLength
*/

// BRUTE FORCE ~O(n^2)
function getLongestSubarr(arr, k) {
  // i is the left pointer, j is right pointer
  // get sum between 2 pointers (inclusive)
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let currentLength = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      currentLength++;
      if (sum === k) maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}

// BETTER SOLUTION, hashing and prefixSum
// OPTIMAL solution for inputs containing negatives, zeros and pos numbers
function getLongestSubarr1(arr, k) {
  let prefixSumHash = [];
  let sum = 0;
  let maxLength = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];
    prefixSumHash.push(sum);
    if (prefixSumHash.includes(sum - k)) {
      let hashIdx = prefixSumHash.indexOf(sum - k);
      let newLength = idx - hashIdx;
      if (newLength > maxLength) maxLength = newLength;
    }
  }
  return maxLength;
}

// OPTIMAL SOLUTION: 2 pointer (for positive values only) O(2n)
function getLongestSubarr2(arr, k) {
  let rightPoint = 0;
  let leftPoint = 0;
  let sum = 0;
  let maxLength = 0;

  while (rightPoint < arr.length) {
    sum += arr[rightPoint];

    while (sum > k) {
      sum -= arr[leftPoint];
      leftPoint++;
    }

    if (sum === k) {
      let currentLength = rightPoint - leftPoint + 1;
      maxLength = Math.max(currentLength, maxLength);
    }
    rightPoint++;
  }

  return maxLength;
}

//console.log(getLongestSubarr([1, 2, 3, 4, 5, -1, 1], 12));
//console.log(getLongestSubarr1([1, 0, 0, 2, 0, 3, 4, 5, -1, 1], 12));
console.log(getLongestSubarr2([1, 2, 3, 4, 5, 1, 1], 12));
// [3,4,5]
