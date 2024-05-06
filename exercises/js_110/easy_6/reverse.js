/*
1. reverseNumber
2. reverseSentence
*/

function reverseNumber(positiveInt) {
  return Number(String(positiveInt).split('').reverse().join(''));
}

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

function reverseWords(str) 
}

// function reverseArray(array) {
//   let shallowArray = [...array];
//   array.length = 0;

//   for (let idx = shallowArray.length - 1; idx >= 0; idx--) {
//     array.push(shallowArray[idx]);
//   }

//   return array;
// }

/* ***************
TESTS
**************** */
console.log(
  // 1, reverseNumber(12345),    // 54321
  // 1, reverseNumber(12213),    // 31221
  // 1, reverseNumber(456),      // 654
  // 1, reverseNumber(12000),    // 21 -- Note that leading zeros in the result get dropped!
  // 1, reverseNumber(1),        // 1reverseSentence('');                       // ""
  // 2, reverseSentence('Hello World'),            // "World Hello"
  // 2, reverseSentence('Reverse these words'),    // "words these Reverse
  // 2, reverseSentence(''), //""
  // 3, reverseWords('Professional'),             // "lanoisseforP"
  // 3, reverseWords('Walk around the block'),    // "Walk dnuora the kcolb"
  // 3, reverseWords('Launch School'),            // "hcnuaL loohcS"
  4, reverseArray([1,2,3,4]), // [4,3,2,1]
);
