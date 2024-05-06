/*
1. Repeater
2. Double Char Pt 2
3. Swap Names
4. Matching paranthesis
*/

// 1. Repeater
function repeater(str) {
  let newStr = '';
  for (let char of str) {
    newStr += char.repeat(2);
  }
  return newStr;
}

// 2. Double Char Pt 2
function doubleConsonants(str) {
  return str.replaceAll(/[^aeiou0-9 .!,-?_()]/gi, match => match.repeat(2));
}

function doubleConsonantsA(str) {
  let newStr = '';
  let invalidChar = 'aeiouAEIOU0123456789 .!,-?_()';
  for (let char of str) {
    if (invalidChar.includes(char)) {
      newStr += char;
    } else {
      newStr += char.repeat(2);
    }
  }
  return newStr;
}

// 3. Swap Names
function swapName1(fullName) {
  let newName = fullName.split(' ');
  let lastName = newName.pop();
  return `${lastName}, ${newName.join(' ')}`;
}

// 4. Matching Parenthesis
function isBalanced(str) {
  let formattedStr = str.replaceAll(/[^()]/g, '');
  let occurrences = {left: 0, right: 0};
  if (formattedStr === '') return true;

  for (let char of formattedStr) {
    if (char === '(') occurrences.left++;
    if (char === ')') occurrences.right++;
  }

  if (formattedStr.startsWith('(')
  && formattedStr.endsWith(')')
  && occurrences.left === occurrences.right) {
    return true;
  }

  return false;
}

/* **************
TESTS
*****************/
console.log(
  // 1, repeater('Hello'),        // "HHeelllloo"
  // 1, repeater('Good job!'),    // "GGoooodd  jjoobb!!"
  // 1, repeater(''),             // ""
  // 2, doubleConsonants('String') === "SSttrrinngg",
  // 2, doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!",
  // 2, doubleConsonants('July 4th') === "JJullyy 4tthh",
  // 2, doubleConsonants('') === "",
  // '2A', doubleConsonantsA('String') === "SSttrrinngg",
  // '2A', doubleConsonantsA('Hello-World!') === "HHellllo-WWorrlldd!",
  // '2A', doubleConsonantsA('July 4th') === "JJullyy 4tthh",
  // '2A', doubleConsonantsA('') === "",
  // 3, swapName1('Joe Roberts'),    // "Roberts, Joe"
  // 3, swapName1('Karl Oskar Henriksson Ragvals'),    // "Ragvals, Karl Oskar
  // Henriksson"
  console.log(isBalanced("What (is) this?") === true),
  console.log(isBalanced("What is) this?") === false),
  console.log(isBalanced("What (is this?") === false),
  console.log(isBalanced("((What) (is this))?") === true),
  console.log(isBalanced("((What)) (is this))?") === false),
  console.log(isBalanced("Hey!") === true),
  console.log(isBalanced(")Hey!(") === false),
  console.log(isBalanced("What ((is))) up(") === false),
);
