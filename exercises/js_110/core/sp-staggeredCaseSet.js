/*
STAGGERED CAPS 1 [26min] - got stuck on logic
=====================
INPUT: {str}
OUTPUT: {str} staggered capitalization scheme
RULES
- every other char starting from the 1st should be capitalized and followed by
a lowercase or non alphabetic character - UPPERCASE cannot touch or be adjacent
to another UPPERCASE char
- lowercase char cannot be adjacent to a lowercase char
- 1st char should start off as capitalized
DS
- {boolean} toCapitalize: toggle to determine if curr char needs to be
capitalized
- {string} newString: stores new transformed string

PROCESS
- SET newString = ''
- SET lastCapitalized = false
- LOOK at every i-char of word
    TRANSFORM i-char if it's alphabetic
    APPEND i-char to newString
    TOGGLE toCapitalize
- RETURN newString

STAGGERED CAPS 2 [3min] - similar logic as previous example
========================
INPUT: {str}
OUTPUT {str}

Instead of toggling toCapitalize after every i-char You have to toggle it only
if it's an alphabetic char
*/

function staggeredCase2(str) {
  let newString = "";
  let toCapitalize = true;

  for (let char of str) {
    if (/[a-z]/i.test(char)) {
      char = toCapitalize ? char.toUpperCase() : char.toLowerCase();
      toCapitalize = !toCapitalize;
    }
    newString += char;
  }

  return newString;
}

function staggeredCase(str) {
  let newString = "";
  let toCapitalize = true;

  for (let char of str) {
    if (/[a-z]/i.test(char)) {
      char = toCapitalize ? char.toUpperCase() : char.toLowerCase();
    }
    newString += char;
    toCapitalize = !toCapitalize;
  }

  return newString;
}

// TESTS
// ====================
function testStaggeredCase1() {
  console.log(
    staggeredCase("I Love Launch School!"), // "I LoVe lAuNcH ScHoOl!"
    staggeredCase("ALL_CAPS"), // "AlL_CaPs"
    staggeredCase("ignore 77 the 4444 numbers"), // "IgNoRe 77 ThE 4444 nUmBeRs"
  );
}

function testStaggeredCase2() {
  console.log(
    staggeredCase2("I Love Launch School!"), // "I LoVe lAuNcH ScHoOl!"
    staggeredCase2("ALL_CAPS"), // "AlL_CaPs"
    staggeredCase2("ignore 77 the 4444 numbers"), // "IgNoRe 77 ThE 4444 nUmBeRs"
  );
}

testStaggeredCase2();
