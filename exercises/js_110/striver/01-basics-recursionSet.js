// **********************
// #1 Print Something n times
// ***********************
function printMessage(n, msg) {
  if (n === 0) return;
  console.log(msg);
  printMessage(n - 1, msg);
}

function printMessage2(start, end, msg) {
  if (start >= end) return;
  console.log(msg);
  printMessage2(start + 1, end, msg);
}

// *********************
// # Print 1 - N
// *********************
// Lesson on having a persistent variable with recursion

function printNumbers(curr, num) {
  if (curr > num) return;
  console.log(curr);
  printNumbers(curr + 1, num);
}

// # Print N-1
function printNumbersBack(num) {
  if (num <= 0) return;
  console.log(num);
  printNumbersBack(num - 1);
}

// **********************
// # Sum of 1st N natural numbers
// **********************
// parameter method
function getSum(n, sum) {
  if (n < 1) {
    console.log(sum);
    return sum;
  }
  getSum(n - 1, sum + n);
}

// functional method
function getSum2(n) {
  if (n === 0) return 0;
  return n + getSum2(n - 1);
}

// **************************
// FACTORIAL
// *************************
// 5! = 5 * 4 * 3 * 2 * 1
// iterative
function getFactorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

// recursive
function getFactorialRec(n) {
  if (n < 1) return 1;
  return n * getFactorialRec(n - 1);
}

// **************************
// REVERSE AN ARRAY..no built in reverse method allowed
// *************************
function reverseArray(arr) {
  let copy = arr;
  let reverse = [];
  while (copy.length) {
    reverse.push(copy.pop());
  }
  return reverse;
}

// swap method: 2 pointers
function reverseArraySwap(arr) {
  p1 = 0;
  p2 = arr.length - 1;
  while (p1 < p2) {
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
    p1++;
    p2--;
  }
  return arr;
}

// Recursive method
function reverseArrayRec(arr, start, end) {
  if (start >= end) return arr;

  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArrayRec(arr, start + 1, end - 1);
}

console.log(reverseArrayRec([1, 2, 3], 0, 2));

// *****************
// STRING IS PALINDROME
// *******************
function isPalindrome(str, start, end) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}

//console.log(isPalindrome("googi", 0, 3));

// ******************
// FIB NUMBERS
// ******************
// print fib # up to nth term
function getFib(n) {
  if (n <= 1) return n;
  return getFib(n - 1) + getFib(n - 2);
}
