/*
{string} -> {boolean}
Is string palindrome?
* Palindrome: same word reversed
* empty str?
* case matters
* all characters matters (including whitespace)
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
  let reversedInteger = integer.toString().split('').reverse().join('');
  return String(integer) === reversedInteger;
}
