/* MATCHING PARENTHESIS [20:41–21:05 = 24min]
INPUT: {str}
OUTPUT: {boolean} if all parenthesis are properly balanced
RULES
- `balanced` means that () occur in matching ( and )
- no parenthesis means that it's balanced
- opening parenthesis must be used before closing parenthesis (ex 7)
- must start with ( parenthesis
- must end with ) parenthesis
- there must be same amt of ( and )
DS:
- {num} toggle: start at 0
  - if there is an opening parenthesis, add 1
  - if there is a closing parenthesis, subtract 1
  - by the end, toggle should  be at 0 for it to be balanced
PROCESS
- SET toggle = 0
- REMOVE away all () characters from string
- TRAVERSE the stripped string for each i-char
- CHECK if formatted string is an empty string
  - TRUE: RETURN TRUE
- CHECK if first CHAR is NOT ( or last char is NOT )
  - TRUE: RETURN false
- IF i-char is ( add 1
- ELSE IF i-char is ) subtract 1
- CHECK if toggle = 0
  - TRUE: RETURN true
  - FALSE: RETURN false
*/

function isBalanced(str) {
  let toggle = 0;
  str = str.trim().replaceAll(/[^()]/g, "");
  if (str === "") return true;
  if (!str.startsWith("(") || !str.endsWith(")")) return false;

  for (let char of str) {
    if (char === "(") toggle++;
    if (char === ")") toggle--;
  }

  return toggle === 0;
}

// TESTS
function testIsBalanced() {
  console.log(isBalanced("What (is) this?") === true);
  console.log(isBalanced("What is) this?") === false);
  console.log(isBalanced("What (is this?") === false);
  console.log(isBalanced("((What) (is this))?") === true);
  console.log(isBalanced("((What)) (is this))?") === false);
  console.log(isBalanced("Hey!") === true);
  console.log(isBalanced(")Hey!(") === false);
  console.log(isBalanced("What ((is))) up(") === false);
}

testIsBalanced();
