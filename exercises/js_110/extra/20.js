//Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.
//The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

/* [09:00]
IN: {num[]} inputArr: all the same except 1
OUT: {num} oddBall: number that differs
RULES
- in:arr will always contain at least 3 num
- there will always be exactly 1 num that differs
- must compare at least 3 nums to determine oddball
PROCESS
  CREATE first = in:arr[0]
  CREATE second = in:arr[1]
  CREATE third = in:arr[2]
  IF (first === second === third)
    RETURN in:arr.find(num => num !== first)
  ELSE IF (first === second AND second !== third)
    RETURN third
  ELSE IF (first === third AND first !== second)
    RETURN second
  ELSE IF (second === third AND second !== first)
    RETURN first
*/

function whatIsDifferent(arr) {
  let first = arr[0];
  let second = arr[1];
  let third = arr[2];

  if (first === second && second === third)
    return arr.find((num) => num !== first);
  if (first === second && first !== third) return third;
  if (first === third && first !== second) return second;
  if (second === third && second !== first) return first;
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
