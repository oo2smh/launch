/* [9min]
INPUT: {str}
OUTPUT: {str} every lowercase letter changed to uppercase and every uppercase
letter changed to lowercase
RULES
- only affects alphanumeric characters
DS
- {str} newString: holds transformed chars
PROCESS
- LOOK at every i-char of string
- DETERMINE if it's an alphabetic char
  - CHECK if it's lowercase
    - YES: TRANSFORM it to an uppercase
    - NO: TRANSFORM it into a lowercase
- RETURN transformed string
*/

function swapCase(string) {
  let newString = "";
  for (let char of string) {
    if (/[a-z]/i.test(char)) {
      newString += isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
    } else {
      newString += char;
    }
  }
  return newString;
}

function isLowerCase(char) {
  return char.toLowerCase() === char;
}

// TESTS
function testSwapCase() {
  console.log(
    swapCase("CamelCase"), // "cAMELcASE"
    swapCase("Tonight on XYZ-TV"), // "tONIGHT ON xyz-tv"vi
  );
}

testSwapCase();
