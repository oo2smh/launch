/* PROBLEM
Create a function that takes an array of numbers as an argument.
For each number, determine how many numbers in the array are smaller than it,
and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs
multiple times in the array, it should only be counted once.
*/

/* [18:20-18:42] (22min)
INPUT: {integers[]}
OUTPUT: {integers[]}
RULES
- only count unique values
- always return the same amt of elems in output as input

EX
[8,1,2,2,3] => [3,0,1,1,2]
[1] => [0]

DS:
- hashmap
- array
- set

MM
- For each i:elem of in:array, count all unique values that are less than i-elem. And place this number into output array
-------------------------------------
PROCESS
  LOOP through each i:elem of in:array
    COMPARE each i:elem to rest of elems in array
    CHECK if it's less than current i:elem
      YES: INCREMENT counter
    APPEND counter value to v:outputArray
    RESET counter = 0
  RETURN output array

** Problem is dupes
*/

function smallerNumbersThanCurrent(inputArray) {
  return inputArray.map((elem, _, arr) => {
    let counter = 0;
    let visitedInt = [];

    for (let int of arr) {
      if (visitedInt.includes(int)) continue;
      if (elem > int) counter++;
      visitedInt.push(int);
    }

    return counter;
  });
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
