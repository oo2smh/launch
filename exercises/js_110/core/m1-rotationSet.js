/* ROTATE ARRAY PT 1 [6min] (2nd attempt)
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array. If the input is not an array, return undefined. If the input is an empty array, return an empty array. Review the test cases below, then implement the solution accordingly.
====================================
IN: {[]}
OUT: {[]}
GOAL: Return a shallow array with the 1st elem of in:array removed and appended to the end of the array
RULES
- Do not modify the original array
- If input is not an array => undefined
- If input is an empty array => []
PROCESS
  CHECK if input is not an array
    Y: RETURN undefined
  CHECK if input is an empty array
    Y: RETURN []
  CREATE a shallow copy of the array
  REMOVE 1st element of shallow copy
  PUSH the removed element to end of shallow array
*/

/* ROTATION PT 2 [8min] (2nd attempt)
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
==============================
IN: {int (mainInt),int (rotatedInt)}
OUT: {int} rotatedInt
GOAL: Given 2 args (1,2), determine based on arg2 (Counting down in idx from last char) which element to move to the end (aka rotate). Remove that element and move it to the end of the array
RULES
- if arg2 is 1, return the original in:mainInt
PROCESS
  DETERMINE index of char to rotate
  REMOVE and SAVE that char
  PUSH the char to the end of int:mainInt
  RETURN the new integer

** Since working with numbers. Convert 1st to string -> array. Then convert back into a number when returning
*/

/* ROTATION Pt 3 [20min] (2nd attempt)
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
---------------------------------------
IN: {int} inputInt
OUT: {int} maximallyRotatedInt
GOAL: Return an int that has been maximally rotated. Before each iteration, lock in (nth) value(s) starting from left. Locked in values are not rotated. Every iteration increment n by 1.
RULES
- Leading 0s get dropped at the end
  - 105 -> 051 .. 051 --> 015
PROCESS
  CHECK if int is a Single digit
    TRUE: RETURN in:digit
  CREATE v:rotatedDigit = digits
  CREATE offset = in:digits.length
  WHILE number isn't maximally rotated
    INVOKE @rotateRightMostDigits with rotatedDigits, offset
    DECREMENT v:offset by 1
  RETURN v:rotatedDigit
*/

function maxRotation(mainInt) {
  if (String(mainInt).length === 1) return mainInt;
  let offset = String(mainInt).length;
  let rotatedDigit = mainInt;

  while (offset > 1) {
    rotatedDigit = rotateRightmostDigits(rotatedDigit, offset);
    offset--;
  }

  return rotatedDigit;
}

function rotateRightmostDigits(mainInt, shiftInt) {
  let toRotateIdx = String(mainInt).length - shiftInt;
  mainInt = [...String(mainInt)];
  let removedElem = mainInt.splice(toRotateIdx, 1);
  mainInt = mainInt.concat(removedElem);

  return Number(mainInt.join(""));
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let shallowCopy = arr.slice();
  let removedElement = shallowCopy.shift();
  shallowCopy.push(removedElement);

  return shallowCopy;
}

// TESTS
// =========================
testFn3();

function testFn1() {
  console.log(
    rotateArray([7, 3, 5, 2, 9, 1]), // [3, 5, 2, 9, 1, 7]
    rotateArray(["a", "b", "c"]), // ["b", "c", "a"]
    rotateArray(["a"]), // ["a"]
    rotateArray([1, "a", 3, "c"]), // ["a", 3, "c", 1]
    rotateArray([{ a: 2 }, [1, 2], 3]), // [[1, 2], 3, { a: 2 }]
    rotateArray([]), // []

    rotateArray(), // undefined
    rotateArray(1), // undefined
  );
}

function testFn2() {
  console.log(
    rotateRightmostDigits(735291, 1), // 735291
    rotateRightmostDigits(735291, 2), // 735219
    rotateRightmostDigits(735291, 3), // 735912
    rotateRightmostDigits(735291, 4), // 732915
    rotateRightmostDigits(735291, 5), // 752913
    rotateRightmostDigits(735291, 6), // 352917
  );
}

function testFn3() {
  console.log(
    maxRotation(735291), // 321579
    //maxRotation(3), // 3
    //maxRotation(35), // 53
    maxRotation(105), // 15 -- the leading zero gets dropped
    maxRotation(8703529146), // 7321609845
  );
}
