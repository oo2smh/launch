/* [16min] - 2nd pass
INPUT: {str}
OUTPUT: {boolean}
RULES
- A series of 'blocks'
  - block has 2 alphabetic chars
  - You can only consume 1 out of the 2 letters of a block, afterwards block
  isn't usable - case insensitive GOAL: Consuming the blocks (and the rules for
  blocks), successfully create the input string. If you can create it, then
  return true. Otherwise, return false
-------------------------
DS
- {array} blocks: dictionary of string values
- {string} restrictedBlocks = ''
PROCESS
- SET v-blocks = []: each elem is a string of 2 chars
- SET v-restrictedBlocks = ''
- TRANSFORM in:word into lowercase (to handle case-insensitivity)
- TRAVERSE each i-char of the in:string
  - CHECK if v-restrictedBlocks includes i-char
    - TRUE: RETURN false
  - TRAVERSE the v-blocks array for each (i-block)
    - CHECK if i-block includes i-char
      - TRUE: CONCATENATE block to v:restrictedBlocks
- RETURN true (if you succesfully ran though all chars with no isse)
*/
let blocks = [
  "bo",
  "xk",
  "dq",
  "cp",
  "na",
  "gt",
  "re",
  "fs",
  "jw",
  "hu",
  "vi",
  "ly",
  "zm",
];

function isBlockWord(string) {
  let restrictedBlocks = "";
  string = string.toLowerCase();
  for (let char of string) {
    if (restrictedBlocks.includes(char)) return false; // exit clause
    // main logic
    blocks.forEach((block) => {
      if (block.includes(char)) restrictedBlocks += block;
    });
  }
  return true;
}

// TESTS
function testIsBlockWord() {
  console.log(
    isBlockWord("BATCH"), // true
    isBlockWord("BUTCH"), // false
    isBlockWord("jest"), // true
  );
}

testIsBlockWord();
