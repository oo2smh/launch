/*
Create a function that returns the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input
string. You may assume that the input string contains only alphanumeric
characters.
*/

/*
IN: {str}
OUT: {int}
RULES
- a-z0-9 alphanumeric characters
- case insensitive

PROCESS
  CREATE a v:hashMap = {} #keep track of frequency
  TRAVERSE each i:char of in:str
    CHECK if hashMap[i:char] exists
      YES: Use hashMap[i:char]
      NO: Set value to 0
    INCREMENT hashMap[i:char] by 1
  FILTER v:hashMap values to those that are greater than 1

(hashMap, loop:for of, Object.values, filter)
*/

function distinctMultiples(str) {
  let hashMap = {};
  str = str.toLowerCase();
  for (let char of str) {
    hashMap[char] = hashMap[char] || 0;
    hashMap[char]++;
  }

  return Object.values(hashMap).filter((int) => int > 1).length;
}

const p = console.log;
p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5
