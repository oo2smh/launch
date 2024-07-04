/* [15min]
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.
=================
GOAL: Return the diff between square of the sum of the 1st count + integers and the sum of the squares of teh 1st count positive integers
- Increment from 1 up to in:int then get that sum
IN: {+int}
OUT: {+int}
EX
- 3 -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2) = 22
- 1 -> (1)**2 - (1**2) = 0
RULES:
- LEFT: Increment from 1 up to in:arg
- RIGHT: Get square of each number up to in:arg
- LEFT - RIGHT

PROCESS
- CALCULATE LEFT sum from 1 to in:int and square the sum
- CALCULATE RIGHT sum from 1 to in:int, squaring each i:int
- SUBTRACT LEFT from RIGHT
- RETURN difference
*/

function sumSquareDifference(int) {
  let left = 0;
  let right = 0;
  let array = Array(int)
    .fill(0)
    .forEach((_, idx) => {
      let num = idx + 1;
      left += num;
      right += num ** 2;
    });

  return left ** 2 - right;
}

console.log(
  sumSquareDifference(3), // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10), // 2640
  sumSquareDifference(1), // 0
  sumSquareDifference(100), // 25164150
);
