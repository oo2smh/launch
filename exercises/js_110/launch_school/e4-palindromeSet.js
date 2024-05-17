/* 1 Palindromic String
Write a function that returns true if the string passed as an argument is
a palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.
*/

/* 2 Real Palindromic String
Write another function that returns true if the string passed as an argument is
a palindrome, or false otherwise. This time, however, your function should be
case-insensitive, and should ignore all non-alphanumeric characters. If you
wish, you may simplify things by calling the isPalindrome function you wrote in
the previous exercise.
*/

/* 3 Palindromic Numbers
Write a function that returns true if its integer argument is palindromic or
false otherwise. A palindromic number reads the same forwards and backwards.
*/
// # 1
function isPalindrome(string) {
  return string === [...string].reverse().join("");
}

// # 2
function isRealPalindrome(string) {
  let formattedString = string.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
  return isPalindrome(formattedString);
}

// # 3
function isPalindromicNumber(integer) {
  return isPalindrome(String(integer));
}

console.log(
  isPalindrome("madam"), // true
  isPalindrome("Madam"), // false (case matters)
  isPalindrome("madam i'm adam"), // false (all characters matter)
  isPalindrome("356653"), // true)
  isRealPalindrome("madam"), // true
  isRealPalindrome("Madam"), // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam"), // true (only alphanumerics matter)
  isRealPalindrome("356653"), // true
  isRealPalindrome("356a653"), // true
  isRealPalindrome("123ab321"), // false
  isPalindromicNumber(34543), // true
  isPalindromicNumber(123210), // false
  isPalindromicNumber(22), // true
  isPalindromicNumber(5), // true
);
