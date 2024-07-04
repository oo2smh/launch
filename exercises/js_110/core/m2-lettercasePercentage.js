/* [14min]
Write a function that takes a string and returns an object containing the following three properties:
    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither
You may assume that the string will always contain at least one character.
========================
GOAL: RETURN an obj with 3 properties each a (percentage) of [lowercase, uppercase, non A-Z chars]
IN: {str}
OUT: {obj} 3 properties listed above
RULES:
- can assume that str will always contain at least 1 char
- does whitespace count? YES
- rounded to 2 decimal points (toFixed)
- values in obj are strings
EXAMPLES
- 'abCdef 123'
    10 chars, 5 lowercase, 1 upper, 1 whitespace, 3 digits
PROCESS
- CREATE v:tracker = {lowercase: 0, uppercase, neither}
- TRAVERSE each i:elem of in:str
    DETERMINE if char is lowercase, uppercase, or neither
      ADD Tally to v:tracker
- TRAVERSE each key in v:tracker
    CALCULATE value / length of in:str
    FORMAT value to have 2 decimal pts
> RETURN v:tracker
*/

function letterPercentages(str) {
  let tracker = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let char of str) {
    if (/[a-z]/.test(char)) {
      tracker.lowercase++;
    } else if (/[A-Z]/.test(char)) {
      tracker.uppercase++;
    } else {
      tracker.neither++;
    }
  }

  for (let key in tracker) {
    tracker[key] = ((tracker[key] / str.length) * 100).toFixed(2);
  }

  return tracker;
}

console.log(
  letterPercentages("abCdef 123"),
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
  letterPercentages("AbCd +Ef"),
  //// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
  letterPercentages("123"),
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
);
