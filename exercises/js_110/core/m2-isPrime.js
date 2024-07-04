/* [4min] (had prior exposure)
REFERENCE
https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is

A prime number is a positive number that is evenly divisible only by itself and
1. Thus, 23 is prime since its only divisors are 1 and 23. However, 24 is not
prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the
number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if
the number is prime, false if it is not prime.
===================================
GOAL: Determine if the given input is a prime number. Return a boolean
IN: {+int > 0}
OUT: {boolean}
RULES
- in:int > 0
*/

function is_prime(int) {
  if (int === 1) return false;
  for (let num = 2; num <= Math.sqrt(int); num++) {
    if (int % num === 0) return false;
  }
  return true;
}

console.log(is_prime(1) === false); // true
console.log(is_prime(2) === true); // true
console.log(is_prime(3) === true); // true
console.log(is_prime(4) === false); // true
console.log(is_prime(5) === true); // true
console.log(is_prime(6) === false); // true
console.log(is_prime(7) === true); // true
console.log(is_prime(8) === false); // true
console.log(is_prime(9) === false); // true
console.log(is_prime(10) === false); // true
console.log(is_prime(23) === true); // true
console.log(is_prime(24) === false); // true
console.log(is_prime(997) === true); // true
console.log(is_prime(998) === false); // true
console.log(is_prime(3_297_061) === true); // true
console.log(is_prime(23_297_061) === false); // true
