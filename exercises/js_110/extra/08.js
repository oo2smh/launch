// Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

/* [16min]
INPUT: {str} string: non-empty, a-z lowercase
OUTPUT: {+int} length: longest vowel substring
RULES
- vowels are [aeiou]

PROCESS
 CREATE v:longestVowelChain = 0;
 CREATE v:currentChain = 0;
 TRAVERSE each i:char of str
  IF (Char is a vowel)
    INCREMENT v:currentChain
  IF (Char is a consonant)
    CHECK if (v:currentChain > v:longestChain)
      YES: v:longestVowelChain
    RESET currentChain = 0
  RETURN v:longestVowelChain
*/

function longestVowelSubstring(str) {
  let longestChain = 0;
  let currentChain = 0;

  for (let char of str) {
    if ("aeiou".includes(char)) {
      currentChain++;
      continue;
    }

    if (currentChain > longestChain) {
      longestChain = currentChain;
      currentChain = 0;
    }
  }

  if (currentChain > 0 && currentChain > longestChain)
    longestChain = currentChain;

  return longestChain;
}

const p = console.log;
//p(longestVowelSubstring("cwm") === 0);
//p(longestVowelSubstring("many") === 1);
//p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
