/* Given 2 strings, your job is to find out if there is a substring
 * that appears in both strings. You will return true if you find a
 * substring that appears in both strings or false if you do not. We
 * only care about substrings that are longer than one letter long.
 * */

/* [23min]
IN: {str, str}
OUT: {boolean}
GOAL: Find if there is a substring that appears in both strings
RULES:
- only care about substrings that are 1+ chars
- case insensitive
- substring doesn't have to be in the same order (last example)
  - if you have all letters of that substring that's fine

PROCESS
  CHECK if length of in:str1 in:str2 are less than or equal to 1
    YES: RETURN false
  FORMAT in:strs to both be lowercase
  CREATE count = 0;
* CHECK to see if at least 2 chars are the same
    YES: RETURN true
    NO: RETURN false
  CHECK if count >= 2
    YES: RETURN true
    NO: RETURN false

* ITERATE through each i:char of shorterStr
  CHECK if v:longerStr includes i:char
    YES: increment count by 1, Remove 1st instance of i:char from v:longerStr
*/

function substringTest(str1, str2) {
  if (str1.length <= 1 || str2.length <= 1) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let count = 0;
  for (let char of str1) {
    if (str2.includes(char)) {
      count++;
      str2 = str2.replace(char, "");
    }
  }

  return count >= 2;
}

console.log(substringTest("Something", "Fun") === false);
console.log(substringTest("Something", "Home") === true);
console.log(substringTest("Something", "") === false);
console.log(substringTest("", "Something") === false);
console.log(substringTest("BANANA", "banana") === true);
console.log(substringTest("test", "lllt") === false);
console.log(substringTest("", "") === false);
console.log(substringTest("1234567", "541265") === true);
console.log(
  substringTest(
    "supercalifragilisticexpialidocious",
    "SoundOfItIsAtrocious",
  ) === true,
);
