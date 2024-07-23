/* LEFT ROTATE ARRAY BY 1
Given an array of N integers, left rotate the array by one place.
EX: [1 2 3 4 5] -> [2 3 4 5 1]
*/

function leftRotate(arr) {
  //return arr.concat(arr.pop()); // out of place

  // longer method
  for (let idx = 0; idx < arr.length - 1; idx++) {
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
  }

  return arr;
}

/* ROTATE RIGHT BY K AMT
Given an array of integers, rotate an element by k amt
#EX
[1 2 3 4 5 6 7] k=2, right --> [6 7 1 2 3 4 5]
#GOAL: GRAB k amt of items from right and move it to front
*/

function rightRotateByK(arr, k) {
  // SHORTER SLICE METHOD
  //let deletedItems = arr.splice(-k, k);
  //arr.unshift(...deletedItems);
  //return arr;

  // LONGER SWAP METHOD
  let leftPointer = 0;
  while (k > 0) {
    for (let j = arr.length - k; j > leftPointer; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
    k--;
    leftPointer++;
  }

  return arr;
}

/* ROTATE LEFT BY K AMT
Given an array and k amt. Left rotate the array by k amt. A left rotation
means moving the frontmost elem to the back
EX: [1,2,3,4,5] k=3 => [4 5 1 2 3] (1,2,3) were rotated
*/

function leftRotateByK(arr, k) {
  while (k > 0) {
    leftRotate(arr);
    k--;
  }
  return arr;
}

//console.log(leftRotateByK([1, 2, 3, 4, 5], 3));

/* MOVE zeros to array's end
ou are given an array of integers, your task is to move all the zeros in the
array to the end of the array and move non-negative integers to the front by
maintaining their order.
*/

function move0ToEnd(arr) {
  /* COUNT amt of zeros --> FILTER OUT ZEROS, APPEND amt of zero to end
  let zeroAmt = arr.filter((num) => num === 0).length;
  arr = arr.filter((num) => num !== 0);
  console.log({ zeroAmt, arr });
  while (zeroAmt > 0) {
    arr.push(0);
    zeroAmt--;
  }
  return arr;
  */
  // TRAVERSE through array, IF zero remove and store it in array
  // PUSH temp zero to end of array
  /*
  let originalLength = arr.length;
  arr = arr.filter((num) => num !== 0);
  let zeroAmt = originalLength - arr.length;
  let zeros = Array(zeroAmt).fill(0);
  arr.push(...zeros);
  return arr;
  */

  // 2 POINTER METHOD
  let zeroPoint = arr.indexOf(0);
  if (zeroPoint !== -1) {
    for (let i = zeroPoint + 1; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[zeroPoint]] = [arr[zeroPoint], arr[i]];
        zeroPoint++;
      }
    }
  }
  return arr;
}

/* INDEX OF
Without using any built in methods, implement indexOf. Present the index of
the first instance of element else print -1
*/

function indexOf(arr, searchNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchNum) return i;
  }
  return -1;
}

/* UNION OF 2 ARRAYS
 Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two
 sorted arrays. The union of two arrays can be defined as the common and
 distinct elements in the two arrays.NOTE: Elements in the union should be in
 ascending order.
*/

function getFrequency(arr, hashMap) {
  for (let elem of arr) {
    if (Object.hasOwn(hashMap, elem)) continue;
    hashMap[elem] = true;
  }
}

function arrayUnion(arr1, arr2) {
  // SHORT ANSWER
  //return Array.from(new Set(arr1.concat(arr2)));
  // HASH MAP
  //let hashMap = {};
  //getFrequency(arr1, hashMap);
  //getFrequency(arr1, hashMap);
  //return Object.keys(hashMap).map(Number);
  // 2 POINTERS
}

function arrayIntersection(arr1, arr2) {
  let intersection = [];
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr1[i]);
      j++;
    }
  }
  console.log(intersection);
}

// TESTS
console.log(
  //leftRotate([1, 2, 3, 4, 5],
  //rotateByK([1, 2, 3, 4], 3), // 2 3 4 1
  //rotateByK([5, 4, 3, 2, 1, 0], (k = 2)),
  //move0ToEnd([1, 0, 0, 0, 2, 3, 4, 0, 0, 5]), // [1 2 3 4 5 0 0 0 0 0 ]
  //indexOf([1, 2, 3, 4, 5], 5),
  //indexOf([1, 2, 3, 4, 5], 8),
  arrayUnion(
    [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [2, 2, 5, 6, 7, 8, 9, 10],
  ),
  arrayIntersection([1, 2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6]),
);
