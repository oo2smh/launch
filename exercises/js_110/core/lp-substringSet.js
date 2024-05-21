/* [13min]
LEADING SUBSTRINGS
========================
INPUT: {str}
OUTPUT: {array} list of substrings of that string
RULES
- Substring = any char with a length of 1
- List should be ordered shortest to longest (length is important)
- Each substring must begin with the first letter of the in:word
- No input validation needed for empty strings
- No duplicate substrings (only unique substrings)
---------------------
DATA
- {array} substrings: to hold all substrings
- {string} currentString: hold the current substring
PROCESS
- SET {arr} substrings = []
- SET {string} currentString = ''
- FIND all possible substrings
  - TRAVERSE each i-char of in:string
  - CONCATENATE currentString += i-char
  - APPEND currentString into {array} substrings
- PUT all substrings into array bucket
- SORT the substrings bucket by length (shortest to longest)
- RETURN the array bucket

ALL SUBSTRINGS [15min]
==========================
INPUT: {string}
OUTPUT: {array:str} List of all substrings of a string
RULES
- Substring = 1 more string chars
- Sort the returned list by in the string the substring begins
  - All strings that begin at idx 0 should come 1st, idx 1 next and so on
  - Each position will be ordered from shorted to longest
GOAL: Return an array of all substrings sorted at the macro level by the idx
level. On the microlevel, it should be sorted from shortest to longest
--------------------------------
DS
- {array} allSubstrings: holds all possible substrings
- {array} substringsAtIdx: holds all possible substrings starting with a char
PROCESS
- SET allSubstrings = []
- TRAVERSE each i-char of the in:string
- CALL the leadingSubstrings and store that in an array
- APPEND this array to allSubstrings array
- TRAVERSE each i-subArray of allSubstrings
  - SORT each i-subArray by its length
- FLATTEN the subarrays
- RETURN allSubstrings array

PALINDROMIC SUBSTRINGS [11min]
========================
INPUT: {str}
OUTPUT: {array} all substrings that are valid palindromes
RULES
- sorted by order of appearance
- duplicates are included multiple times
- case matters. Mom is not a palindrome because M !== m
- single characters are not palindromes
GOAL: Return an array of all substring that are valid palindromes
---------------------------------
DS:
- {array} palindromes: holds all valid palindromic substrings
PROCESS
- GET a list of all possible substrings -- @fn-substrings
- FILTER out the substrings that are not valid palindromes
  - CHECK if it's a valid palindrome -- @fn-isPalindrome
- RETURN filtered array
*/

function palindromes(string) {
  let allPossibleSubstrings = substrings(string);
  allPossibleSubstrings = allPossibleSubstrings.filter((string) =>
    isPalindrome(string),
  );
  return allPossibleSubstrings;
}

function isPalindrome(substring) {
  let reversedWord = [...substring].reverse().join("");
  if (substring.length < 2) return false;
  return substring === reversedWord;
}

function substrings(string) {
  let allSubstrings = [];
  while (string.length) {
    allSubstrings.push(leadingSubstrings(string));
    string = string.slice(1);
  }
  return allSubstrings.flat();
}

function leadingSubstrings(string) {
  let substrings = [];
  let currentString = "";
  for (let char of string) {
    currentString += char;
    substrings.push(currentString);
  }

  return substrings.sort((a, b) => a.length - b.length);
}

// TESTS
function testLeadingSubstrings() {
  console.log(
    leadingSubstrings("abc"), // ["a", "ab", "abc"]
    leadingSubstrings("a"), // ["a"]
    leadingSubstrings("xyzzy"), // ["x", "xy", "xyz", "xyzz", "xyzzy"]
  );
}

function testSubstrings() {
  console.log(
    substrings("abcde"),
    // returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde",
    // "c", "cd", "cde", "d", "de", "e" ]
  );
}

function testPalindromes() {
  console.log(
    palindromes("abcd"), // []
    palindromes("madam"), // [ "madam", "ada" ]
    palindromes("hello-madam-did-madam-goodbye"),
    // returns
    // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
    //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
    //   "-madam-", "madam", "ada", "oo" ]
    palindromes("knitting cassettes"),
    // returns
    // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
  );
}

testPalindromes();
