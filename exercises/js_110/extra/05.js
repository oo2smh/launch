/* Create a function that takes a string argument and returns the character that
occurs most often in the string. If there are multiple characters with the
same greatest frequency, return the one that appears first in the string.
When counting characters, consider uppercase and lowercase versions to be the
//same.
*/

/* [32min]
INPUT: {str}
OUTPUT: {char} mostFrequent
RULES
- If a tie, return the one that appears 1st in the str
- case Insensitive
- What are valid characters? Symbols? Numbers? Spaces?
- Valid characters are a-z
- Always return lowercase version of char
- Repeated characters only count as 1
GOAL: In a fn, return the char that occurs most often in the str
DS:
- {obj} frequencyTracker

PROCESS
 CREATE v:frequencyTracker = {}
 REMOVE spaces, and format all str to lowercase
 FOR EACH i:char add it to v:frequencyTracker
 RETRIEVE the highest frequency char in frequencyTracker
*/

function mostCommonChar(str) {
  let counter = {};
  str = str.replaceAll(/\s/g, "").toLowerCase();
  let prevChar;
  for (let char of str) {
    if (char === prevChar) continue;
    counter[char] = counter[char] || 0;
    counter[char]++;
    prevChar = char;
  }
  let entries = Object.entries(counter);
  entries.sort((a, b) => b[1] - a[1]);
  console.log(entries);
  return entries.shift()[0];
}

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
