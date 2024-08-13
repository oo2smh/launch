/* Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.
If a substring occurs more than once, you should count each occurrence as a separate substring.
*/

/* [40min]
INPUT: {(digits)str}
OUTPUT: {int} numOfEven: # of even-num substr that can be formed
RULES:
- if substring occurs more than once, count each occurrence separately
- substr has to be in order (1432) 24 is invalid

GOAL: Given a str of digits. Return the amt of substrings that are even (ends with 0,2,4,6,8)
EX: [1432] => 14, 1432, 4, 432, 32, 2

PROCESS
  CREATE v:count = 0
  OUTER LOOP: for each i:elem
    CREATE v:currSubstr = i:elem
    CREATE a slice starting after i:elem
    INNER LOOP: TRAVERSE each i:char in slice
      IF v:currSubstr is even
        INCREMENT v:count by 1
      v:currSubtr += i:char
  RETURN v:count
*/

function evenSubstrings(strOfDigits) {
  let count = 0;

  while (strOfDigits) {
    let baseChar = strOfDigits[0];
    strOfDigits = strOfDigits.slice(1);

    if (Number(baseChar) % 2 === 0) count++;

    for (let char of strOfDigits) {
      baseChar += char;
      if (baseChar % 2 === 0) count++;
    }
  }
  return count;
}

const p = console.log;
p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
