/*
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.
*/

/* [14min]
IN: {int}
OUT: {int} multiplesSum: sum of all multiples of 7 or 11 that are less than the argument
RULES
- If number is a multiple of both 7 and 11, count the number just once (77)
- If the argument is negative return 0
- Is the argument inclusive? No. Shown in the 2nd example

- +7, +4, +6

PROCESS:
 CREATE multiples = []
 CHECK if arg is negative
  YES: RETURN 0
 WHILE i:num < in:int
  IF i:num is a multiple of 7 or 11
    APPEND to v:multiples
 GET sum from multiples
 RETURN sum

(loop, reduce(sum))
*/

function sevenEleven(int) {
  let multiples = [];
  if (int < 0) return 0;
  let num = 7;

  for (let num = 7; num < int; num += 7) {
    multiples.push(num);
  }

  for (let num = 11; num < int; num += 11) {
    if (multiples.includes(num)) continue;
    multiples.push(num);
  }

  return multiples.reduce((total, currValue) => total + currValue, 0);
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
