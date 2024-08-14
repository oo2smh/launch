/*
Create a function that takes an array of integers as an argument and returns
the integer that appears an odd number of times. There will always be exactly
one such integer in the input array.
*/

/* [6min]
IN: {int[]}
OUT: {int} oddInteger: int that appears an odd # of times
RULES
- always exactly 1 such integer in input array
PROCESS
  CREATE a hash map = {} -- count frequency of integers
  TRAVERSE each i:int of in:array
    FILL out hash map with frequency
  CREATE an Object.entries
  FILTER by Object entries with a value that's odd
  RETURN the integer
*/

function oddFellow(array) {
  let hashMap = {};
  array.forEach((num) => {
    hashMap[num] = hashMap[num] || 0;
    hashMap[num]++;
  });

  return +Object.entries(hashMap).find((num) => num[1] % 2 === 1)[0];
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
