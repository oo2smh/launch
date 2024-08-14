/*
Create a function that takes an array of integers as an argument. Determine and
return the index N for which all numbers with an index less than N sum to the
same value as the numbers with an index greater than N. If there is no index
that would make this happen, return -1. If you are given an array with multiple
answers, return the index with the smallest value. The sum of the numbers to
the left of index 0 is 0. Likewise, the sum of the numbers to the right of the
last element is 0.
*/

/* [30min]
IN: {int[]}
OUT: {int} separationIdx
GOAL: Find the idx where all elems to the left sum up to the same value as the elems to the right
RULES
- return the idx N for which all #s with an index less than N sum to the same  value as the numbers with an index > N
- No idx to make this happen -> -1
- Array with multiple answers -> return smallest value
- sum of the 3s to the left of index 0 is 0
- sum of the numbers to the right of the last elem is 0

PROCESS
  TRAVERSE starting from 2nd elem of in:arr
    SLICE lefthand values
    SLICE righthand values
    COMPARE slices to see if they are equal
      YES: Return the idx
(slice)
*/

function equalSumIndex(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    let leftSlice, rightSlice;

    if (idx === 0) {
      leftSlice = 0;
    } else {
      leftSlice = arr
        .slice(0, idx)
        .reduce((total, currValue) => total + currValue);
    }
    if (idx === arr.at(-1)) {
      rightSlice = 0;
    } else {
      rightSlice = arr
        .slice(idx + 1)
        .reduce((total, currValue) => total + currValue);
    }
    if (leftSlice === rightSlice) return idx;
  }
  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3); // [1,2,4]= 7 [2,3,2] = 7
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);

//The following test case could return 0 or 3. Since we're supposed to return the smallest correct index, the correct return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
