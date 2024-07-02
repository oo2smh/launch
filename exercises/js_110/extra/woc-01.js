// You have to create a fn that takes a positive integer number and returns the next bigger number formed by the same digits

/* [19min]
IN: {+int}
OUT: {int}
RULES
- return -1 if no bigger number can be returned
EX
9 -> -1
12 -> 21
513 -> 531
2017 -> 2071
MM
- Start shifting numbers from the righthand side to get the next highest number
------------------------------
DS
- {array}

PROCESS
  IF all digits contain same value OR digits are in descending order
    RETURN -1
  OTHERWISE, swap the last 2 digits
  CONVERT array/str back to number
  RETURN the number
(pop (x2), destructuring to swap, push/concat)
*/

function nextBiggerNum(int) {
  let sameValues = [...String(int)].fill(int).join("");
  let descendingSort = +[...String(int)]
    .sort((a, b) => Number(b) - Number(a))
    .join("");
  if (sameValues === int || descendingSort === int) return -1;

  let intArray = [...String(int)];
  let lastTwo = [intArray.pop(), intArray.pop()];
  intArray = intArray.concat(lastTwo);

  return Number(intArray.join(""));
}

console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
