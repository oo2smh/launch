// Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2. You may assume that the second argument is never an empty string.

/* [14:53]
INPUT {str, str}
OUTPUT: {+int} output: # of times that 2nd string occurs in 1st string
RULES
- overlapping chars do not count: Used chars are consumed

PROCESS:
  CREATE v:counter;
  SEARCH if in:searchStr exists in in:mainString
    YES: REMOVE 1st instance of in:searchStr
         INCREMENT v:counter by 1
  RETURN v:counter
*/

function countSubstrings(str1, str2) {
  let counter = 0;
  while (str1.includes(str2)) {
    str1 = str1.replace(str2, "");
    counter++;
  }

  return counter;
}

const p = console.log;
//p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
