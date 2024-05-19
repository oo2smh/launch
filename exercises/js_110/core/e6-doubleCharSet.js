/* DOUBLE CHAR PT 1
INPUT: {string}
OUTPUT: {string} doubles every char in str
RULES:
- Spaces between other char are considered valid chars
- Empty spaces should return empty space
DS: {string} newString
PROCESS
  TRIM whitespace on the ends of inputString
  CHECK if input is an empty string
    YES: return inputString
  TRAVERSE each i-char of string
  - DOUBLE the char
  - APPEND doubled char to newString
  RETURN newString
*/

/* DOUBLE CHAR PT 2
INPUT: {string}
OUTPUT: {string} doubles every consonant
RULES:
- Should not double vowels [...aeiou], digits, punctuation or whitespace
- case sensitivity does not matter A is still considered a vowel
DS: string
PROCESS
  SET newString = ''
  CHECK if input is an ''
  - YES: return input
  TRAVERSE every i-char of str
  CHECK for every i-char if it's a consonant (@isConsonant)
  - YES: APPEND doubled char into newString
  - NO: APPEND char to newString
  RETURN new string

SUBPROCESS
- isConsonant(string): @return {boolean}
*/

function isConsonant(char) {
  let validConsonants = /[bcdfghjklmnpqrstvwxyz]/gi;
  return validConsonants.test(char);
}

console.log(isConsonant(" "));

function doubleConsonants(string) {
  let newString = "";
  if (string === "") return string;
  for (let char of string) {
    if (isConsonant(char)) char += char;
    newString += char;
  }
  return newString;
}

function repeater(string) {
  string = string.trim();
  if (string === "") return "";

  let newString = "";
  for (let char of string) {
    char = char.repeat(2);
    newString += char;
  }
  return newString;
}

// TESTS
function testDoubleChar1() {
  console.log(
    repeater("Hello"), // "HHeelllloo"
    repeater("Good job!"), // "GGoooodd  jjoobb!!"
    repeater(""), // ""
  );
}

function testDoubleChar2() {
  console.log(
    doubleConsonants("String"), // "SSttrrinngg"
    doubleConsonants("Hello-World!"), // "HHellllo-WWorrlldd!"
    doubleConsonants("July 4th"), // "JJullyy 4tthh"
    doubleConsonants(""), // ""
  );
}

// testDoubleChar1();
testDoubleChar2();
