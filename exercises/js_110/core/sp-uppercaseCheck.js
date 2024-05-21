/* [7min]
INPUT: {string}
OUTPUT: {boolean} checks if all the alphabetic char in str are uppercase
RULES
- Empty str -> empty string
- non alphabetic chars are included, but can be ignored
---------------------------
PROCESS
- REMOVE all nonalphabetic characters
- TRAVERSE each i-alphChars in string
- CHECK if there are any lowercase letters
    YES: RETURN false
- RETURN true
*/

/* NOTES
I wasn't stuck, but LS's solution is much more elegant than mine.
*/

function isUppercase(str) {
  str = str.trim().replaceAll(/[^a-z]/gi, "");
  for (let char of str) {
    if (char.toLowerCase() === char) return false;
  }
  return true;
}

// LS Solution
let isUpperCaseLS = (str) => str.toUpperCase() === str;

function testIsUpperCase() {
  console.log(
    isUppercase("t"), // false
    isUppercase("T"), // true
    isUppercase("Four Score"), // false
    isUppercase("FOUR SCORE"), // true
    isUppercase("4SCORE!"), // true
    isUppercase(""), // true
  );
}

testIsUpperCase();
