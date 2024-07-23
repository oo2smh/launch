/* #1 COUNT PLACE VALUES
Given an integer n, return the # of digits in N.
*/

function countPlaceValues1(int) {
  // O(n) compexity
  let num = Math.abs(int);
  let placeValues = 0;
  do {
    num = Math.floor(num / 10);
    placeValues++;
  } while (num > 0);

  return placeValues;
}

function countPlaceValues2(int) {
  // O(1) complexity
  return Math.floor(Math.log10(int) + 1);
}

/* #2 REVERSE NUMBER DIGITS
Given an integer n, return the reverse of the given number.
If the # has trailing zeros, then its reverse will not include them
  EX: 10400 --> 401 instead of 00401
*/

function reverseDigits(int) {
  // O(2n)
  let isNegative;
  let num = int;
  if (int < 0) {
    isNegative = true;
    num = Math.abs(num);
  }
  let reverse = 0;
  do {
    let extraction = num % 10;
    num = Math.floor(num / 10);
    reverse *= 10;
    reverse += extraction;
  } while (num > 0);

  return isNegative ? -Number(reverse) : Number(reverse);
}

/* #3 IS PALINDROME?
Given an integer n, return true if the integer is a palindrome. Else return false.
*/

function isPalindrome(num) {
  let reverse = 0;
  let int = num;
  do {
    let extraction = int % 10;
    int = Math.floor(int / 10);
    reverse = reverse * 10 + extraction;
  } while (int > 0);
  console.log({ reverse });
  return reverse === num;
}

/* #4 FIND GCD
Given 2 integers, find the GCD (greatest common denominator).
This is also called the HCF (highest common factor).

EX: 24, 12: GCD: 12
ALGO
- FIND the smaller value
- CREATE v:gcd = 1;
- TRAVERSE from 2 until v:smallerValue
    CHECK if both inputs are evenly divisible by i
    CHECK if v:gcd < i:num --> SET v:gcd = i:num
- RETURN v:gcd
*/

function findGcd(int1, int2) {
  let [smallerValue, largerValue] = [
    Math.min(int1, int2),
    Math.max(int1, int2),
  ];

  if (smallerValue <= 0) return largerValue;
  largerValue -= smallerValue;

  return findGcd(smallerValue, largerValue);

  //for (let num = 2; num <= smallerValue; num++) {
  //  if (int1 % num === 0 && int2 % num === 0) gcd = gcd < num ? num : gcd;
  //}
}

/* #5 IS ARMSTRONG NUM?
An armstrong number is a number that is equal to the sum of its own
digits each raised to the power of the num of digits
  EX: 153 => 1^3 + 5^3 + 3^3 = 153 return true
*/

function isArmstrongNum(int) {
  let power = countPlaceValues2();
  let dupeInt = int;
  let sum = 0;

  while (dupeInt > 0) {
    let extraction = dupeInt % 10;
    dupeInt = Math.floor(dupeInt / 10);
    sum += extraction ** 3;
  }

  return int === sum;
}

// #6 GET ALL DIVISORS
// 36, 1,2,3,6,12

function getDivisors(int) {
  let divisors = new Set();
  for (let num = 1; num <= Math.sqrt(int); num++) {
    if (int % num === 0) {
      let other = int / num;
      divisors.add(num);
      divisors.add(other);
    }
  }
  return Array.from(divisors).sort((a, b) => a - b);
}

// #7 IS PRIME?
// prime = total # of divisors is 2 and # is divisible only by itself and 1

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// TESTS
console.log(
  //countPlaceValues1(1234),
  //countPlaceValues1(1234),
  //countPlaceValues1(-23423),
  //countPlaceValues2(0),
  //countPlaceValues2(-23423),
  //countPlaceValues2(0),
  //reverseDigits(10400),
  //reverseDigits(-23422),
  //reverseDigits(0),
  //isPalindrome(323),
  //isPalindrome(43223),
  //isPalindrome(1),
  //findGcd(12, 6),
  //findGcd(23, 432),
  //isArmstrongNum(153),
  //isArmstrongNum(32),
  //isArmstrongNum(0),
  //getDivisors(36),
  isPrime(11),
  isPrime(1),
  isPrime(35),
);
