/*
1. Alphabetical Numbers
2. Multiply All Pairs
3. Leading Substrings
4. Palindromic Substrings
*/

function alphabeticNumberSort(arrayOfInt) {
  // return [int sort based on English word for each]
  let numberWord = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten',
    11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'};

  return arrayOfInt.sort((a,b) => (numberWord[a] > numberWord[b] ? 1 : -1));
}

function multiplyAllPairs(arr1, arr2) {
  // get all possible combinations
  let products = [];
  arr1.forEach( arr1Int => {
    arr2.forEach(arr2Int => {
      products.push(arr1Int * arr2Int);
    });
  });
  return products.sort( (a,b) => a - b);
}

function leadingSubstrings(string) {
  let currentSubstring = '';
  let substrings = [];
  for (let char of string) {
    currentSubstring += char;
    substrings.push(currentSubstring);
  }

  return substrings;
}

function substrings(string) {
  let allSubstrings = [];

  while (string.length) {
    allSubstrings.push(...leadingSubstrings(string));
    string = string.slice(1);
  }

  return allSubstrings;
}

function palindromes(string) {
  let validCombos = substrings(string);
  let validPalindromes = [];

  validCombos.forEach(substring => {
    console.log(substring);
    if (isPalindrome(substring)) validPalindromes.push(substring);
  });

  function isPalindrome(substring) {
    return (substring.length > 1) &&
    (substring === [...substring].reverse().join(''));
  }

  return validPalindromes;
}

/* ****************
TESTS
****************** */
console.log(
  // 1, alphabeticNumberSort(
  //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
  // // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
  // 2, multiplyAllPairs([2, 4], [4, 3, 1, 2]),    // [2, 4, 4, 6, 8, 8, 12, 16]
  // 3, leadingSubstrings('abc'),      // ["a", "ab", "abc"]
  // 3, leadingSubstrings('a'),        // ["a"]
  // 3, leadingSubstrings('xyzzy'),    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
  // '3a', leadingSubstrings1('abc'),      // ["a", "ab", "abc"]
  // '3a', leadingSubstrings1('a'),        // ["a"]
  // '3a', leadingSubstrings1('xyzzy'),  // ["x", "xy", "xyz", "xyzz", "xyzzy"]
  // '4', substrings('abcde'),
  // 5, palindromes('abcd'),       // []
  // 5, palindromes('madam'),
  // 5, palindromes('hello-madam-did-madam-goodbye'),
  // 5, palindromes('knitting cassettes'),
);

/* **********************
FURTHER EXPLORATIONS
********************* */
// 3. LEADING SUBSTRINGS
// ========================================
// function leadingSubstrings1(string) {
//   let currentSubstring = '';
//   return [...string].map(char => {
//     currentSubstring += char;
//     return currentSubstring;
//   });
// }

// function leadingSubstrings1(string) {
//   let currentSubstring = '';
//   return [...string].reduce( (total, char) => {
//     currentSubstring += char;
//     total.push(currentSubstring);
//     return total;
//   }, []);
// }
