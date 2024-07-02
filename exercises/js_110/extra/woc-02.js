/* Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only. */

/* [10min]
IN: {str} input: non-empty, a-z lowercase letters
OUT: {boolean}
GOAL: See if you can extract a substring from in:str and create the in:str. RETURN a boolean.
PROCESS
  CREATE v:substring = ''
~ TRAVERSE through each i:char of in:str
    SET v:substring += i:char
    CALCULATE in:str.length divided by the v:substring.length
    CHECK if you can repeat i:char count times to get in:str
      YES: RETURN true
  RETURN false (if you run through the whole loop)
*/

function repeatedSubstringPattern(str) {
  let substring = "";
  for (let char of str) {
    substring += char;
    let count = str.length / substring.length;
    if (str !== substring && str === substring.repeat(count)) return true;
  }
  return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abcaababaab") === false);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);
