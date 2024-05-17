/* FIND DUPES
INPUT: {arr} (unordered array)
OUTPUT: {int} (occurs twice)
RULES
- Looks like everything is an int
- No input validation needed
GOAL: Find the dupe value in input array and return it
===================================
DS
- {int} currentNum
- {obj} seenTracker (Process 2)
==================================
PROCESS #1: SORT & LOOP
  SORT the array in ascending order
  SET currentNum = firstValue of the array
* TRAVERSE each (i-elem) to see if it's same as currentNum
  YES: RETURN currentNum
  NO: SET currentNum = i-elem


PROCESS #2 TRACKER-DICT (LS)
Uses a dictionary to keep track of seen elems. Leverages the fact that objects cannot have duplicate values
  SET seenTracker = { }
  TRAVERSE through each (i-elem) of array
  CHECK if seenTracker has a property === i-elem
    YES: RETURN i-elem
    NO: UPDATE seenTracker by adding i-elem
*/
function findDupe(arr) {
  arr.sort((a, b) => a - b);
  let currentNum;

  for (let int of arr) {
    if (int === currentNum) return currentNum;
    currentNum = int;
  }
}

function findDupe2(arr) {
  let seenTracker = {};
  for (let int of arr) {
    if (seenTracker[int]) return int;
    seenTracker[int] = 1;
  }
}

// TESTS
function testFindDupe() {
  console.log(
    findDupe([1, 5, 3, 1]), // 1
    findDupe([
      18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
      27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
      37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
      3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
      28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45,
      11, 88, 67, 5, 58,
    ]), // 73
    findDupe2([1, 5, 3, 1]), // 1
    findDupe2([
      18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
      27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
      37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
      3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
      28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45,
      11, 88, 67, 5, 58,
    ]), // 73
  );
}

testFindDupe();
