/* FIND MISSING # IN ARRAY
===============================
[4min]
#IN: {int[]}
#OUT: {int}
#RULES
- Always 1 missing number
- Take into account that idx are 0 based
#GOAL: Given an integer N and an array of size N-1 containing N-1 numbers
between 1 to N. Find the number(between 1 to N), that is not present in the
given array.
#EX
- [1,3,4] -> 2 is missing

#ALGO
TRAVERSE between 1 to N
IF in:arr[i] - 1 !== i+1 --> RETURN i+1
  ** +1 has to be added to offset 0 based indexing
*/

function getMissingInt(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return -1;
}

//console.log(getMissingInt([1, 2, 3, 4, 5, 7]));

/* [10min]
COUNT MAX CONSECUTIVE 1s
==================================
#IN: {0,1[]}
#OUT: {int} max consecutive 1s
#GOAL: Given an array that contains only 1 and 0, return the count of the
maximum consecutive ones in the array
#RULES
- if no ones exist or it's an empty array -> RETURN 0
#EX
- [1,1,0,1,1,1] -> 3
#ALGO O(n)
----------------------
CREATE v:currCount = 0
CREATE v:maxCount = 0
TRAVERSE i:int of in:arr
  IF i:int is 1 --> INCREMENT v:currCount by 1
  ELSE IF i:int is 0
    COMPARE v:currCount > v:maxCount
      True: SET v:maxCount = v:currCount && SET v:currCount = 0
RETURN v:maxCount
*/

function maxConsecOne(arr) {
  let currCount = 0;
  let maxCount = 0;
  for (let int of arr) {
    if (int === 1) currCount++;
    else if (currCount > maxCount) {
      maxCount = currCount;
      currCount = 0;
    }
  }
  if (currCount > maxCount) maxCount = currCount;
  return maxCount;
}
//maxConsecOne([0, 1, 1, 1, 0, 0, 1, 1, 1, 1]);

/* [6min]
FIND NUMBER THAT APPEARS ONCE & OTHER NUMBERS TWICE
=======================================
#GOAL: Given a non-empty array of integers arr, every element appears twice
except for one. Find that single one.
#PAT: hash -> return the one with the count of 1
#ALGO
---------------
TRAVERSE each i:elem of in:arr
ADD TO HASH
RETURN item in hash that's single
*/

function findSingle(arr) {
  let hashMap = {};
  for (let int of arr) {
    hashMap[int] = hashMap[int] || 0;
    hashMap[int]++;
  }
  console.log(hashMap);
  return +Object.entries(hashMap).filter((subarr) => subarr[1] < 2)[0][0];
}

console.log(findSingle([1, 3, 1, 3, 5]));

/*


