/*
Create a function that takes two strings as arguments and returns true if
some portion of the characters in the first string can be rearranged to match
the characters in the second. Otherwise, the function should return false.
You may assume that both string arguments only contain lowercase alphabetic
characters. Neither string will be empty.
*/

/* [6min]
INPUT: {str}, {str}
OUT: {boolean}
RULES
- some portion of the chars in 1st str can be rearranged to match the chars in 2nd
- only contains lowercase a-z characters. No empty strings
- don't have to be the same length
- 2nd in:str has to be <= in:str 1
PROCESS
  TRAVERSE each i:char of in:str2
    CHECK if i:char is included in in:str1
      YES: REMOVE char from in:str1
      NO: RETURN false
  RETURN true
*/

function unscramble(str1, str2) {
  for (let char of str2) {
    if (!str1.includes(char)) return false;
    str1 = str1.replace(char, "");
  }
  return true;
}

const p = console.log;
p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
