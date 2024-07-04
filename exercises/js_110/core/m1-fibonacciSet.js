/* FIB BY LENGTH [31min]
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature. Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number. Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.) You may assume that the argument is always an integer greater than or equal to 2.
=========================================
INPUT: {bigInt} numberOfUnits
OUTPUT: {bigInt} index of 1st fib number that has the number of digits specified by arg
RULES:
- 1st 2 fib values always have 1,1
- Index starts at 1
GOAL: Return the idx of the 1st num that has the # of placeValues specified by the argument

PROCESS
- CREATE v:fibSequence = [1n, 1n]
- CREATE v:currentFib
- CREATE v:first = fibSequence[0];
- CREATE v:second = fibSequence[1];
- WHILE the currentFib placeValues does not equal the in:arg
    SET currentFib = first + second
    PUSH currentFib to fibSequence
    first = second
    second = fibSequence
- RETURN fibSequence.length
*/

function findFibonacciIndexByLength(placeValues) {
  let currentFib;
  let count = 2n;
  let first = 1;
  let second = 1;
  placeValues = Number(placeValues);

  do {
    currentFib = first + second;
    first = second;
    second = currentFib;
    count++;
  } while (String(currentFib).length !== placeValues);

  return count;
}

//console.log(
//  findFibonacciIndexByLength(2n) === 7n, // 1 1 2 3 5 8 13
//  findFibonacciIndexByLength(3n) === 12n, // 1 1 2 3 5 8 13 21 34 55 89 144
//  findFibonacciIndexByLength(10n) === 45n,
//  findFibonacciIndexByLength(16n) === 74n,
//findFibonacciIndexByLength(100n) === 476n,
//findFibonacciIndexByLength(1000n) === 4782n,
//findFibonacciIndexByLength(10000n) === 47847n,
//);

/* Fibonacci Recursion [10:22-10:41]
**************
NOTES
**************
- Knew the answer because I remembered it.
- Need more exposure/practice to make recursion comfortable
- I understand how this particular solution works, but don't know if I'll be able to come up with a recursive solution by myself for a diff prob

**************
PROBLEM
**************
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. This simple sequence can be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n: A good recursive function has three primary qualities:

    It calls itself at least once.
    It has an ending condition — e.g., if (num === 1), in the sum function above.
    The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).

GOAL: Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.
========================================
***********
PEDAC
***********

IN: {int} ( ) fibonacci num position
OUT: {int} ( ) fibonacci num at that position
RULES
- must use recursion. Recursion has 2 parts 1) exit condition 2) fn that calls itself
EX: [1,1,2,3,5,8,13]
- 3 fib(3) ==> fib(2) + fib(1)
    fib(1)/fib(2) => 1
- 5 fib(5) ==> fib(pos - 1) + fib(pos - 2)
    fib(4) + fib(3) = 5
    fib(4) = fib(3) + fib(2)
    fib(4) = 3
    fib(3) = 2
GOAL: Given a position(int) return the fib number at that position
DS: array
PROCESS:
- DETERMINE exit condition
  --WHEN argument is less than 2 => RETURN 1
- RETURN FN CALL SUM of fib(pos-1) + fib(pos-2)
*/

function fibonacci(pos) {
  if (pos <= 2) return 1;

  return fibonacci(pos - 2) + fibonacci(pos - 1);
}

//console.log(
//  fibonacci(1), // 1
//  fibonacci(2), // 1
//  fibonacci(3), // 2
//  fibonacci(4), // 3
//  fibonacci(5), // 5
//  fibonacci(12), // 144
//  fibonacci(20), // 6765
//);

/* PROCEDURAL FIBONACCI
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time. Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function. Rewrite your recursive fibonacci function so that it computes its results without using recursion.
------------------------------
GOAL: Rewrite fibonacci function without using recursion
IN: {int} fib position
OUT: {int} fib # at given position
RULES
- you cannot use recursion
- assume that in:int is > 0
DS: array
MM: If fib is <= 2, Return 1. Have a count starting from 2 that increments per iteration. Loop while the count < in:int. Within each iteration, compute the next fibonacci number. At the end, return the fibonacci number.
PROCESS:
- CREATE v:count = 2
- CREATE v:fib = [1,1]
- IF in:int <= 2 --> RETURN 1
- WHILE count < in:int
    DETERMINE next fib sequence
    SET v:fib[count] = v:fib[count - 1] + v:fib[count - 2]
    INCREMENT count by 1
> RETURN last elem of v:fib
*/

function fibonacci(pos) {
  let count = 2;
  let fib = [1, 1];
  if (pos <= 2) return 1;

  while (count < pos) {
    fib[count] = fib[count - 1] + fib[count - 2];
    count++;
  }

  return fib.pop();
}

//console.log(
//  fibonacci(20), // 6765
//  fibonacci(50), // 12586269025
//  fibonacci(75), // 2111485077978050
//);

/* MEMOIZATION
Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization. Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1). For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.
------------------------------
IN: {int} fib pos
OUT: {int} fib value
GOAL: USE memoization to refactor the recursion solution to the fib problem. 1 approach to memoization is to use a lookup table
DS: {obj} hashMap
MM: 1st compute the right side of equation (fibonacci(pos - 1)). When computing the RHS, save the values to the lookup table. Then when computing the lefthand side, use the lookup table to input in the answer.
PROCESS
- CREATE v:hashMap = {}


*************
NOTES
************
- Apparently LS's solution isn't as efficient as it could be. Bob's discussion makes this clear

BOB'S SOLUTION
let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

*/

// 3
// [1,1,2,3,5,8,13]
let hashMap = {};
function fibonacciMemo(pos) {
  if (pos <= 2) return 1;
  if (hashMap[pos]) return hashMap[pos];
  hashMap[pos] = fibonacci(pos - 1) + fibonacci(pos - 2);
  return hashMap[pos];

  fibonacci(pos - 2) + fibonacci(pos - 1);
}

console.log(
  fibonacciMemo(20), // 6765
  fibonacciMemo(50), // 12586269025
  fibonacciMemo(75), // 2111485077978050
);
