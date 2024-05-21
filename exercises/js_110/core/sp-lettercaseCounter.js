/*
INPUT: {str}
OUTPUT: {obj} with 3 properties
RULES
- output has 3 properties
  1. num of chars in string that are lowercase letters
  2. num of chars that are uppercase letters
  3. num of chars that are neither
    - Spaces count as neither
GOAL: Return an object that counts amt of chars that are uppercase, lowercase or
neither
------------------------
DS
- {object} frequencyCounter
PROCESS
- SET frequencyCounter = {lowercase:0, uppercase:0, neither: 0}
- TRAVERSE each char of the string
  - CHECK if it's neither (not an alphanumeric char)
    - frequencyCounter.neither++
  - CHECK if it's lowercase
    - YES: frequencyCounter.lowercase++
    - NO: frequencyCounter.uppercase++
- RETURN frequencyCounter;
*/

/*
NOTES:
- LS solution
- Used the match instance method with regex to get an array of lowercase,
uppercase and neither
- Then got the length of each of the created arrays

*/

function letterCaseCount(str) {
  let frequencyCounter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of str) {
    if (/[^a-z]/i.test(char)) {
      frequencyCounter.neither++;
    } else {
      char === char.toLowerCase()
        ? frequencyCounter.lowercase++
        : frequencyCounter.uppercase++;
    }
  }

  return frequencyCounter;
}

// TESTS
// ===================
function testLetterCaseCount() {
  console.log(
    letterCaseCount("abCdef 123"), // { lowercase: 5, uppercase: 1, neither: 4 }
    letterCaseCount("AbCd +Ef"), // { lowercase: 3, uppercase: 3, neither: 2 }
    letterCaseCount("123"), // { lowercase: 0, uppercase: 0, neither: 3 }
    letterCaseCount(""), // { lowercase: 0, uppercase: 0, neither: 0 }
  );
}

testLetterCaseCount();
