/*
2 SUM
===================
Problem Statement: Given an array of integers arr[] and an integer target.
+ 1st variant: Return YES if there exist two numbers such that their sum is equal to
the target. Otherwise, return NO.
+ 2nd variant: Return indices of the two numbers such that their sum is equal to
the target. Otherwise, we will return {-1, -1}. Note: You are not allowed to
use the same element twice. Example: If the target is equal to 6 and num[1] =
3, then nums[1] + nums[1] = target is not a solution.
--------------------
VARIANT 1
#IN: {arr}, {int} target
#OUT: {str} YES or NO
#GOAL: Return YES if there exists 2 integers which add up to in:target. Otherwise,
return NO
#MENTAL1: Gather all 2 int sums and see if any of them equals the target.
#MENTAL2: Sort the array. 2 Pointers (low-high). If number is too high, move the
right pointer left. If the number is too low, move the left pointer to the right.
If the pointers are at the same location or cross, no 2 integers exist

#ALGO1
-------------------
TRAVERSE the in:arr and add up all 2 pair combos
  IF any 2 pair combos equal target --> RETURN YES
RETURN NO (if you traversed the entire arr without 2 pair combos)

#ALGO2
-------------------
SORT THE ARRAY
SET 2 pointers (low and high)
WHILE low !== high
  IF low + high = target --> RETURN YES
  IF sum of low + high is too high
    MOVE rightPointer left
  ELSE IF sum of low + high is too low
    MOVE leftPointer right
RETURN NO

12 13 14 15
23 24 25
34 35
45
*/

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return "YES";
    }
  }
  return "NO";
}

function twoSum(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (low !== high) {
    let sum = arr[low] + arr[high];
    if (sum === target) return "YES";
    else if (sum < target) low++;
    else high--;
  }
  return "NO";
}

//console.log(twoSum([1, 2, 3, 4, 5, -15], 0));

/*
CAN also create a hash so that dupe # that have been checked prev don't have
to be checked again
O(n^2) worst case scenario

TRAVERSE each i:elem of the arr
GET inverse of i:elem and look for the inverse in array
  IF inverse exists then return the out:arr with the 2 idx
RETURN [-1,-1]
*/

function twoSumIdx(arr, target) {
  for (let idx = 0; idx < arr.length; idx++) {
    let targetIdx = arr.indexOf(-arr[idx]);
    if (targetIdx !== -1) return [idx, targetIdx];
  }
  return [-1, -1];
}

console.log(twoSumIdx([1, 2, 3, 4, 5, -5], 0));
