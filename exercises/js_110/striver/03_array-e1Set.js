/*******************************
Largest Element in An Array
Given an array of int, return the highest value elem
1. Math.max
2. Iterative Approach
3. Sort & Return last value
**********************************/

let numArr = [1, 2, 3, 7, 4, 5];

let getLargestValue = (arr) => Math.max(...numArr);
function getLargestValue2(arr) {
  let largestValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestValue) largestValue = arr[i];
  }
  return largestValue;
}
function getLargestValue3(arr) {
  let dupeArr = [...arr];
  dupeArr.sort();
  return dupeArr.pop();
}

/************************
FIND 2nd Smallest Values in a given array
FIND 2nd Largest Value in a given array
- If no 2nd largest value exists, return -1
- 1st Value cannot equal the 2nd value (largest !== 2nd Largest)

#ALGO
CREATE 2 vars v:smallest v:2ndSmallest init to INFINITY
TRAVERSE each i:elem of i:idx of array
  IF i:elem is < v:smallest
    SET v:2ndSmallest = v:smallest
    SET v:smallest = i:idx
  ELSE IF i:elem < v:2ndSmallest
    SET v:2ndSmallest = i:elem
*************************/

function getSecondSmallest(arr) {
  if (arr.length < 2) return -1;

  let smallest = arr[0];
  let secondSmallest = Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest)
      secondSmallest = arr[i];

    return secondSmallest;
  }
}

function getSecondLargest(arr) {
  if (new Set(arr).size < 2) return -1;

  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

//console.log(getSecondLargest(numArr)); //5

/* **************************
CHECK if array is sorted. Given an array of size n, write a program to check if
the given array is sorted or
not. If the array is sorted then return True, Else return False.
Examples of sorted arrays
  - [1,2,3,4,5]
  - [5,4,3,2,1]
  - [1]
  - []
  - [1,1,1,1]
Note: Two consecutive equal values are considered to be sorted.
**************************** */

function isArraySorted(arr) {
  if (arr.length <= 2) return true;
  let ascending = false;
  let descending = false;
  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > arr[idx - 1]) ascending = true;
    if (arr[idx] < arr[idx - 1]) descending = true;
    if (ascending && descending) return false;
  }
  return true;
}

//console.log(
//  isArraySorted([1, 1, 1, 2, 3, 4, 5]),
//  isArraySorted([4, 3, 2, 1, 1, 1, 1, 0]),
//  isArraySorted([3, 3, 3, 2, 6]),
//  isArraySorted([1, 1, 1, 1, 1]),
//);

/* *****************************
REMOVE DUPLICATES
Problem Statement: Given an integer array sorted in non-decreasing order,
remove the duplicates in place such that each unique element appears only once.
The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, then the first k
elements of the array should hold the final result. It does not matter what you
leave beyond the first k elements.

Note: Return k after placing the final result in the first k slots of the
array.
--------------------
#GOAL: Return original mutated array of same length with dupe values removed.
#IN: {int[]}
#OUT: {int[]} removed values are filled with "-"
#RULES
#EX
-in: [1,1,2,2,2,3,3] --> [1,2,3,-,-,-,-]

#ALGO1 (creates a new shallow copy) X doesn't work
- CREATE a Set from the array
- CONVERT back to an array
- FILL the rest with '-' filler value
#ALGO2
- CREATE a frequency hash
- TRAVERSE the in:array
  - IF it's not in frequency hash, add it
  - IF it's already in the frequency hash
      TRANSFORM current value to '-'
- RETURN mutated array
**********************************/
let array1 = [1, 2, 1, 1, 2, 2, 3];

function removeDupes(arr) {
  let hashSet = {};

  arr.forEach((elem, idx) => {
    if (hashSet[elem]) arr[idx] = "-";
    else hashSet[elem] = 1;
  });
}

removeDupes(array1);
