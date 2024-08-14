/*
Create a function that takes an array of integers as an argument and returns
the number of identical pairs of integers in that array. For instance, the
number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences
each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. For
instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2.
The first array contains two complete pairs while the second has an extra 2
that isn't part of the other two pairs.
*/

/* [14:27]
INPUT: {int[]} arr
OUTPUT: {int} identicalPairs: Number of identical int pairs in array
RULES
- If array is empty or contains 1 value => return 0
- elems in pairs that are used are consumed

PROCESS
 IF in:arr is empty or len is 1 => RETURN 0
 SORT the array
 CREATE v:numOfPairs = 0
 LOOK for pairs
  WHEN pair is found, INCREMENT v:numOfPairs by 1
 RETURN v:numOfPairs
*/

function pairs(arr) {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => a - b);
  let numOfPairs = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === arr[idx + 1]) {
      numOfPairs++;
      idx++;
    }
  }
  return numOfPairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
