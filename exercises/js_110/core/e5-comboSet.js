/* #1 COMBINING ARRAYS
INPUT: {arr} array, {arr}, array2
OUTPUT: {arr} combined Arrays
RULES: No duplicates
GOAL: combine both arrays and only retain unique values
=====================================
DS: Set, [] (accum var)
=====================================
PROCESS #1 Using Set
- SET newArr = []
- COMBINE arrays into one array
- PUT array into a set
- CONVERT set into an array

PROCESS #2 Includes
- SET combinedArray = []
- TRAVERSE through each elem of 2 arrays
- CHECK each elem to see if it's in combinedArray
  - FALSE: APPEND elem into array
- RETURN combinedArray

PROCESS #3 Using Filter
* Joey's Solution
- COMPARE arr1 to arr2 and filter out any dupes
- COMBINE array
- RETURN array

PROCESS #4 Args Rest Parameter
COMBINE all elems into an array
SET newArray = [];
CHECK each elem of array to see if newArray has value
  NO: UPDATE newArray by adding elem
RETURN newArray
*/

// **********************************************

/* COMBINE 2 LISTS
INPUTS: {arr} array1, {arr} array2
OUTPUT: {arr} each item of array1 and array2 taken in alternation
RULES
- Both input arrays are non-empty
- Both input arrays have same amt of length
GOAL: return an array by adding elems from both input arrays, alternating between the 2 input arrays
==================================
DS
- {arr} newArray (stores both elems)
- {num} arrayLength
==================================
PROCESS #2
 SET/GET the length of one array
  TRAVERSE from 0 to length of array (i-idx)
    APPEND to newArray:
     input(array1)[i-idx]
     input(array2)[i-idx]
  RETURN newArray
*/

// #1 COMBINE ARRAY
function combineArray1(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  let set = new Set(newArray);
  newArray = [...set];
  return newArray;
}

function combineArray2(arr1, arr2) {
  let combinedArray = [];
  arr1.concat(arr2).forEach((elem) => {
    if (!combinedArray.includes(elem)) combinedArray.push(elem);
  });
  return combinedArray;
}

function combineArray3(arr1, arr2) {
  let arr1Filtered = arr1.filter((elem) => !arr2.includes(elem));
  return [...arr1Filtered, ...arr2];
}

function combineArray4(...args) {
  let newArray = [];
  args.flat().forEach((elem) => {
    if (!newArray.includes(elem)) newArray.push(elem);
  });
  return newArray;
}

// #2 ALTERNATION UNION
function interleave(arr1, arr2) {
  let newArray = [];
  let arrayLength = arr1.length;
  for (let idx = 0; idx < arrayLength; idx++) {
    newArray.push(arr1[idx], arr2[idx]);
  }
  return newArray;
}

// # TESTS
function testCombineArray1() {
  console.log(combineArray1([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9])
  console.log(combineArray2([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9])
  console.log(combineArray3([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9])
  console.log(combineArray4([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9])
}

function testInterleave() {
  console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"])
}

testInterleave();
