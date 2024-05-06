/*
  COMPARISON PROBLEM
    * This type of prob involves manipulating one or both values and comparing
      them
    * It returns a boolean. Predicate function
*/

function isPalindrome(str) {
  // check if str is a Palindrome
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
  // return Boolean;
}

function isRealPalindrome(str) {
  let formattedStr = str.replaceAll(/[^a-z]*/gi, '').toLowerCase();
  // console.log(isPalindrome(formattedStr));
  return isPalindrome(formattedStr);
}

function isPalindromicNumber(integer) {
  let reversedInteger = String(integer).split('').reverse().join('');
  return String(integer) === reversedInteger;
}

/* ****************
TEST CASES
*******************/
console.log(
  'isPalindrome\n',
  isPalindrome('madam') === true,
  isPalindrome('Madam') === false,
  isPalindrome("madam i'm adam") === false,
  isPalindrome('356653') === true,
);

console.log(
  'isRealPalindrome\n',
  isRealPalindrome('madam') === true,
  isRealPalindrome('Madam') === true,
  isRealPalindrome("Madam, I'm Adam") === true,
  isRealPalindrome('356653') === true,
  isRealPalindrome('356a653') === true,
  isRealPalindrome('123ab321') === false,
);

console.log(
  'isPalindromicNumber Fn\n',
  isPalindromicNumber(34543) === true,
  isPalindromicNumber(123210) === false,
  isPalindromicNumber(22) === true,
  isPalindromicNumber(5) === true,
);