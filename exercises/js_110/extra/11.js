// Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation. You may assume that the string argument consists entirely of lowercase alphabetic letters.

/* [17min]
INPUT: {str} s: nonempty, a-z lowercase letters
OUTPUT: {[str (t), int (k)]}
RULES
- s === t * k
- values of t & k should be the shortest possible substring and largest possible repeat count

PROCESS
  CREATE v:currentPattern = ''
  TRAVERSE each i:char of in:str
    SET v:currentPattern += i:char
    CHECK if v:currentPattern can be repeated and consume all chars
    -- CALCULATE in:str.length / v:currentPattern.length (use repeat method)
      YES: RETURN [v:currentPattern, count]
*/

function repeatedSubstring(s) {
  let currentPattern = "";

  for (let char of s) {
    currentPattern += char;
    let count = s.length / currentPattern.length;
    if (s === currentPattern.repeat(count)) {
      return [currentPattern, count];
    }
  }
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
