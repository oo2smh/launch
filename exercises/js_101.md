This will be the `Easy 1–3 exercises` from **JS-101-119 Small Problems**
section. If the LS solution is different from mine, I will prefix the
Launch School solution with LS

# Easy 1
## 1. Isn't it Odd?
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
```js
// num % 2 !== 0 (odd)

function isOdd(integer) {
  return integer % 2 !== 0
}

function LSisOdd(integer) {
  return Math.abs(integer % 2 === 1)
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```

## 2. Odd Numbers
Log all odd numbers from 1 to 99, inclusive, to the console, with each
number on a separate line.
```js
// loop. all odd numbers are included including start and end1
for (let count = 1; count <= 99; count += 1) {
  if (count % 2 !== 0) console.log('me', count);
}

LSloop: for (let number = 1; number < 100; number += 2) {
  console.log('ls', number);
}
```

## 3. Even Numbers
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
```js
for (let number = 2; number <= 99; number += 2) {
  console.log(number);
}

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 0) console.log(number);
}
```

## 4. How big is the room?
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the
`readlineSync.prompt` method to collect user input.

```js
const readline = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters');
let length = Number(readline.prompt());

console.log('Enter the width of the room in meters');
let width = Number(readline.prompt());

let area = length * width;

console.log(`The area of the room is ${(area).toFixed(2)} square meters (${(area * SQMETERS_TO_FEET).toFixed(2)} square feet).`);
```

## 5. Tip Calculator
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

```js
const readline = require('readline-sync');
const print = (message) => console.log(`=> ${message}`);

print('Enter the total amount of the bill.');
let billAmount = Number(readline.prompt());

print('Enter the tip rate percentage');
let tipRate = Number(readline.prompt());

let tipAmount = (billAmount * (tipRate / 100));

console.log(`The bill amount is $${billAmount}. The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(billAmount + tipAmount).toFixed(2)}`);
```

## 6. Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, then
asks whether the user wants to determine the sum or the product of all
numbers between 1 and the entered integer, inclusive.
```js
const readline = require('readline-sync');
let answer;

let userInteger = Number(readline.question('Enter an integer greater than 0\n'));
while (userInteger <= 0 || Number.isNaN(userInteger) || !Number.isInteger(userInteger)) {
  userInteger = Number(readline.question('Invalid integer. Please enter a valid integer greater than 0\n'));
}

let mathOperation = readline.question('Enter "s" to compute the sum, or "p" to compute the product for all numbers between 1 and your previously entered integer (inclusive).\n');

while (mathOperation !== 's' && mathOperation !== 'p') {
  mathOperation = readline.question('Please enter either (s) for sum or (2) (p) for product\n');
}

function performCalculation(mathOperation) {
  if (mathOperation === 's') {
    answer = 0;
    for (let count = 1; count <= userInteger; count += 1) {
      answer += count;
    }
  } else if (mathOperation === 'p') {
    answer = 1;
    for (let count = 1; count <= userInteger; count += 1) {
      answer *= count;
    }
  }
  console.log(`The answer is ${answer}`));
}

performCalculation(mathOperation);
```

## 7. Short Long Short
Write a function that takes two strings as arguments, determines the length
of the two strings, and then returns the result of concatenating the
shorter string, the longer string, and the shorter string once again. You
may assume that the strings are of different lengths.
```js
function shortLongShort(str1, str2) {
  let shortString = str1.length < str2.length ? str1 : str2;
  let longString = str1.length > str2.length ? str1 : str2;
  console.log(shortString + longString + shortString);
  return shortString + longString + shortString;
}

function LSshortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

// LS solution spells out the parameters with the full word of 'string' and uses the return statement directly, not saving data into extra variables like I did. This is better from a memory pt of view 

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
```

## 8. Leap Years (Pt 1)
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

```js
// \Input\ number, \Output\ boolean
// <true> divisible by 4
// <true> divisible by 4 && divisible by 100 && divisible by 400
// <false> not divisible by 4
// <false> divisible by 4 && divisible by 100

function isLeapYear1(year) {
  year % 4 !== 0 ? false:
  year % 100 !== 0 ? true:
  year % 400 === 0;
}

function isLeapYear2(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

function isLeapYear3(year) {
  return year % 4 === 0 && year % 100 !== 0  || year % 4 === 0 && year % 100 === 0 && year % 400 === 0;
}

function LSisLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```
Launch School's solution is more elegant. If it's divisible by 400, it's
gonna also be divisible by 4 and 100. The ending point of my code was LS's
starting point

## 9. Leap Years (Pt 2)
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine leap years both before and after 1752.
```js
function isLeapYear(year) {
  if (year < 1752) return year % 4 === 0;

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
```

## 10. Multiples of 3 and 5
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
```js
// #region[A] NOTEPAD
/*
I. PROBLEM
• \Input\: {qty 1, type: integer}
• \Output\: {qty 1, type: integer}
  * Sum from 1 – input (inclusive) that are multiples of 3 || 5

II. EDGE CASES
• < 3 return 0;

IV. ALGORITHM
--- MAIN
[00] Declare a fn with parameter $$integer
  [AA] Declare var $$total and set it to 0;
  <BB> $$integer < 3 return $$total
  ~CC~ Loop < 3 – input number >
    <01> $$integer % 3 === 0 || $$integer % 5 === 0
       -- true: add current number to $$total
       -- false: skip 
       •  after each iteration, add 1 to counter and continue to next iteration
  [DD] return $$total
*/
// #endregion[A]

// #region[01] MAIN  
function multisum(integer) {
  let total = 0;
  if (integer < 3) return total;

  for (let count = 3; count <= integer; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      total += count;
    }
  }

  console.log(total);
  return total;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
// #endregion[01]

// #region[02] LS SOLUTION
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
// #endregion[02]
```
- Launch School had a helper function to make the main function more
  readable. They also used more readable variable names compared to me 

## 11. UTF-16 String Value
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)


```js
// #region[A] NOTEPAD
/*
I. PROBLEM
- \Input\: {1, string}
- \Output\: {1, integer}
   Sum of every character in the string
- Additional Details: String.prototoype.charCodeAt()
  ~ returns NAN if it's an empty string or not a valid UTF-16 char
    • Mental model: Loop through every char in the string and convert it to
      a number. Put the number into a data structure (array). Loop through
      the data structure and get the sum. Return sum

II. EXAMPLES/EDGE
- If it's an empty string || a space || non-valid UTF its value is 0.
- non-ASCII character?
  ~ charCodeAt() works with all UTF-16 characters which includes non-ASCII
  characters
- Non-string input?

III. DATA STRUCTURE/ STORAGE
- $$input {string}
- $$output {integer}
- $$utfValues {array}

IV. ALGORITHM
--- 1 MAIN
B __ UTF 16 FNS
[00] Declare $$utfValues and initialize it with an array
[01] Remove all space characters from string
~02~ Loop through each char of string
  <AA> Character is NaN or not a valid UTF-16
    -- True: set it equal to 0
    -- False: assign it the numerical value
  <BB> If AA is False, add its numerical value to the $$utfValues array
~03~ Loop through the $$utfValues array and add all of its numerical values
[04] Return the sum/answer

*/


// #endregion[A]

// #region[01] MAIN

// console.log('\u03A9'.charCodeAt());

function utf16Value(string) {
  const utfValues = [];
  string = string.trim();
  for (let index = 0; index < string.length; index++) {
    if (string[index].charCodeAt() !== NaN) {
      utfValues.push(string[index].charCodeAt());
    }
  }

  if (utfValues.length ===  0) return 0;
  return utfValues.reduce((total, accumulator) => {
    return total + accumulator;
  },0);
}
// #endregion[01]

// #region[02] Examples
console.log(
  utf16Value('Four score'),         // 984
  utf16Value('Launch School'),      // 1251
  utf16Value('a'),                  // 97
  utf16Value(''),                   // 0
);

// #endregion[02]
```

# Easy 2
## 1. Welcome Stranger
Create a function that takes 2 arguments, an array and an object. The array
will contain 2 or more elements that, when combined with adjoining spaces,
will produce a person's name. The object will contain two keys, "title" and
"occupation", and the appropriate values. Your function should return a
greeting that uses the person's full name, and mentions the person's title.
```js
// #region[A] NOTEPAD
/*
I. PROBLEM
- \Input\ {2, array, object}
  ~ Array: 2+ elems (person's name)
  ~ Object: 2keys 'title' & 'occupation'
- \Output\ {1, string}
  ~ Greeting: Person's full name with person's title
- Extract & add adjoining space between array to get person's name. Extract
  title and occupation from the object. Adjoin it together and return

II. EXAMPLES
- input is not a str?
- input is missing either an array or object

III. Data Structure
- var to hold final greeting (opt)
*/

// #endregion[A]

// #region[01] PROGRAM

function greetings(nameArray, jobObject) {
  let fullName = nameArray.join(' ');
  let {title, occupation} = jobObject;
  console.log(`Hi ${title} ${fullName}. How is it being a ${occupation}?`);
  return `Hi ${title} ${fullName}. How is it being a ${occupation}?`;
}
// #endregion[01]

// #region[02] EXAMPLES
greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// #endregion[02]
```

## 2. Greeting a User
Write a program that will ask for user's name. The program will then greet
the user. If the user writes "name!" then the computer yells back to the
user.

```js
// #region[A] NOTEPAD
/*
\Input\ {1, string}
\Output\ {1, string}

<01> Input contains ! => uppercase greeting
*/
// #endregion[A]

// #region[01] PROGRAM
function greetOrYell(name) {
  if (name.includes('!')) {
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  }
  console.log(`Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}. Nice to meet you.`);
}
// #endregion[01]

// #region[02] EXAMPLES
greetOrYell('bob!');

// #endregion[02]
```

## 3. Multiplying 2 Numbers
Create a function that takes two arguments, multiplies them together, and
returns the result.

```js
// #region[A] NOTE SETUP
/*
I. PROB
- \Input\: {2, numbers}
- \Output\: {1, number}: multiplication result

II. EXAMPLES/EDGE CASES
- Input is not a number?
- Input is a non-valid number: NAN, Infinity, -Infinity
- Floats
*/

// #endregion[A]

// #region[01] MAIN

function multiply(number1, number2) {
  if (!Number.isFinite(number1) || !Number.isFinite(number2)) return 'One or more invalid inputs. Enter a valid integer.';
  return number1 * number2;

}

console.log(multiply('string')); // logs 'Invalid input'
console.log(multiply(NaN)); // logs 'Invalid input'
console.log(multiply(5, 3) === 15); // logs true

// #endregion[01]
```

## 4. Squaring an Argument
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

```js
// #region[A] NOTE SETUP
/*
I. PROB
- \Input\: {1, number}
- \Output\: {1, number}: result of exponentation

II. EXAMPLES/EDGE CASES
- Input is not a number?
- Input is a non-valid number: NAN, Infinity, -Infinity
- Floats
*/

// #endregion[A]

// #region[01] MAIN

function multiply(number) {
  return number ** 2;

}

console.log(multiply('string')); // logs 'Invalid input'
console.log(multiply(NaN)); // logs 'Invalid input'
console.log(multiply(5) === 25); // logs true
console.log(multiply(-5) === 25); // logs true

// #endregion[01]
```

## 5. Arithmetic Integer
Write a program that prompts the user for two positive integers, and then
prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power. Do not
worry about validating the input.

```js
// #region[A] PREP
/*
I. PROBLEM
- \Input\ {2, numbers}: positive integers (> 0)
- \Output\ {6, numbers}: results of all of the mathematical operations (+,
  -, *, /, %, **)
- Additional Details: No need to validate inputs 

II. EDGE/EXAMPLES
- Floats?
- Invalid Number?
*/
// #endregion[A]

// #region[00] SETUP
const readline = require('readline-sync');


// #endregion[00]

// #region[01] MAIN
let number1 = Number(readline.question('Please enter a number greater than 0\n'));
let number2 = Number(readline.question('Please enter a second number greater than 0\n'));

function printMathOperations (number1, number2) {
  console.log(number1 + number2);
  console.log(number1 - number2);
  console.log(number1 * number2);
  console.log(number1 / number2);
  console.log(number1 % number2);
  console.log(number1 ** number2);
}

printMathOperations(number1, number2);
// #endregion[01]
```

## 6A. The End Is Near But Not Here
Write a function that returns the next to last word in the String passed to
it as an argument. Words are any sequence of non-blank characters. You may
assume that the input String will always contain at least two words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

```js

// Second to Last Word
function penultimate(string) {
  const stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
```

## 6A. Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

```js
// Extra Challenge: Middle Word 
// #region[A] PREP
/*
II. EDGE CASES
- \Input\ has only 1 word
- \Input\ has an even number of words. What is the middle word?

*/
// #endregion[A]

const readline = require('readline-sync');

function returnMiddleWord() {
  let string = readline.question('=> Please enter a string to return the middle word from\n');

  let stringArray = string.split(' ');
  let middleCalculation = stringArray.length / 2;

  if (stringArray.length <= 1) {
    return "No middle word";
  } else if (stringArray.length === 2) {
    return string;
  } else if (stringArray.length % 2 === 0) {
    return `${stringArray[middleCalculation - 1]} ${stringArray[middleCalculation]}`;
  }
  return stringArray[Math.floor(middleCalculation)];
}

console.log(returnMiddleWord());
```

## 7. Exclusive Or: 
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two
arguments, and returns true if exactly one of its arguments is truthy,
false otherwise. Note that we are looking for a boolean result instead of a
truthy/falsy value as returned by || and &&.
```js
// #region[A] PREP
/*
I. PROBLEMS
- \Input\ {2, any values}
- \Output\ {1, Boolean}

- Additional Details:
  <true>: only 1 argument is truthy
  <false>: otherwise

- Mental Models: Determine the boolean values of both values and then
  compare them
  <01> false: Both are false
  <02> false: Both are true

  <03> true: else it's true
*/
// #endregion[A]

// #region[01] MAIN
function xor(value1, value2) {
  if (Boolean(value1) === Boolean(value2)) return false;
  return true;
}
// #endregion[01]

// #region[02] EXAMPLES

console.log(
  xor(true, false), // true
  xor(0, NaN), // false
  xor('true', 'truth') //false
);
// #endregion[02]
```

## 8. Odd Lists
Write a function that returns an Array that contains every other element of
an Array that is passed in as an argument. The values in the returned list
should be those values that are in the 1st, 3rd, 5th, and so on elements of
the argument Array.

```js
// #region[01] MAIN
function oddities(array) {
  const oddArray = [];
  array.forEach((element, index) => {
    if (index % 2 === 0) {
      oddArray.push(element);
    }
  });
  return oddArray;
}
// #endregion[01]


// #region[02] EXAMPLES
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
// #endregion[02]
```

## 9. How Old is Teddy?
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

```js
function getRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomAge(20, 120));
```

## 10. When Will I Retire?
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

```js
const readline = require('readline-sync');
const CURRENT_YEAR = (new Date()).getFullYear();

let userAge = readline.question('=> What is your age?\n');
let retiredAge = readline.question('=> At what age would you like to retire\n');
let yearsLeft = retiredAge - userAge
let retiredYear = CURRENT_YEAR + yearsLeft;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${retiredYear}.\n You only have ${yearsLeft}years of work to go!`);
```

## 11. Get Middle Character
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
```js
// #region[A] SETUP

/*
I. PROBLEM
- \input\ {1, string}
- \output\ {1, string}: 1-2 characters. Space is valid.
- Non-empty string argument
*/
// #endregion[A]

// #region[01] MAIN
function centerOf(string) {
  let halfPoint = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    console.log(string[halfPoint - 1] + string[halfPoint]);
    return string[halfPoint - 1] + string[halfPoint];
  }
  console.log(string[halfPoint]);
  return string[halfPoint];
}
// #endregion[01]

// #region[02] EXAMPLES
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
// #endregion[02]
```

## 12. Always Return Negative 
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

```js
// #region[A] SETUP
/*
I. PROBLEM
- \input\ {1, number}
- \output\ {1, number}: negative of input
- Implicit Assumption: \input\ only deal with integers based on examples
*/
// #endregion[A]

function negative(number) {
  return -(Math.abs(number));
}

console.log(
negative(5),    // -5
negative(-3),    // -3
negative(0),    // -0
);
```

# Easy 3
## 1. ddaaiillyy ddouubllee
Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.

```js
// #region[A] SETUP
/*
I. PROB PREP
- \input\ {1, string}
- \output\ {1, string}: with all consecutive duplicates gone.
    Only 1 of each character
- implicit assumptions: spaces are valid inputs
*/
// #endregion[A]

function crunch(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === string[index + 1]) {
      continue;
    }
    newString += string[index];
  }
  // console.log(newString);
  return newString;
}

// #region[02] EXAMPLES
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
// #endregion[02]
```

## 2. Bannerizer
Write a function that will take a short line of text, and write it to the
console log within a box.
```js

function logInBox(message) {
  let lengthOfBox = message.length + 2;
  let horizontalLine = `+${'-'.repeat(lengthOfBox)}+`
  let emptyLine = `|${''.padStart(lengthOfBox)}|`

  console.log(`${horizontalLine}
  ${emptyLine}
  | ${message} |
  ${horizontalLine}`);
}

logInBox('hello. go boldy where no one has..');
```

## 2A. Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted. 
```js
function logInBox(message, maxLength = message.length) {
  if (message.length > maxLength) {
    message = message.substring(0,maxLength) + '...';
  }
  let lengthOfBox = message.length + 2;
  message = `+${'-'.repeat(lengthOfBox)}+
|${''.padStart(lengthOfBox)}|
| ${message} |
|${''.padStart(lengthOfBox)}|
+${'-'.repeat(lengthOfBox)}+`;
  console.log(message);
}

logInBox('hello!!!', 5);
logInBox('hello!!!');
```

## 2B. For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.
```js
// #region[A] PREP
/*
I. PROB PREP
- \input\ {3, string, integer}: string: message | integer: wordWrapLimit
  ~ Provide default values for the wordWrapLimit if the user doesn't put one
- \output\ {1, string}: input surrounded by a bounding box
- Implicit Assumption: $$wordWrapLimit doesn't take into account the
  padding around the string nor the | | within each line.

II. EDGE CASES
- Invalid inputs
- What happens if the user puts a wordwrapLimit of 0 or a negative number?
- User puts in a non-string for the message

III. DATA STORAGE/STRUCTURES

IV. ALGORITHM
- Look at the $$wrapLimit and divide up the string based on that into an array
- For the strings that are less than the $$wrapLimit, add padding to the
  end until it reaches the maxLimit
- save the new message with its corresponding whitespace using either 1)
  template literals or 2) \n
- create the $$horizontalRule by using the $$wrapLimit
- create the $$emptyPadding also by using the $$wrapLimit
- combine all of the pieces and create the bounding box
*/


// #endregion[A]

// #region[01] MAIN

// Helper Function
function getMessage(message, wrapLimit) {
  if (message.length > wrapLimit) {
    message = message.split('').map((char, index) => {
      return ((index + 1) % wrapLimit === 0) ? `${char} ` : char;
    }).join('');
    message = message.split(' ').reduce( (newMessage, substring) => {
      if (substring.length < wrapLimit) {
        substring = substring.padEnd(wrapLimit, ' ');
        return newMessage + `| ${substring} |`;
      }
      return newMessage + `| ${substring} |\n`;
    }, '');
  } else {
    message = `| ${message} |`;
  }
  return message;
}

function logInBox(message, wrapLimit = 20) {
  let lineLength;
  if (message.length < wrapLimit) {
    lineLength = message.length + 2;
  } else {
    lineLength = wrapLimit + 2;
  }

  message = getMessage(message, wrapLimit);
  let horizontalRule = `+${'-'.repeat(lineLength)}+`;
  let paddingLine = `|${' '.repeat(lineLength)}|`;

  return `${horizontalRule}\n${paddingLine}\n${message}\n${paddingLine}\n${horizontalRule}`;
}

// #endregion[01]

// #region[B] EXAMPLES
console.log(logInBox('hello'));
/*
+-------+
|       |
| hello |
|       |
+-------+
*/


console.log(logInBox('hello', 2));
/*
+----+
| he |
| ll |
| o  |
+----+
*/

// #endregion[02]
```
- Very messy answer and implementation, but it works. 

## 3. Stringy Strings
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length
of the string should match the given integer.
```js
// #region[A] PRIMING
/*
I. PROB PREP
- \input\ {1, +integer}
- \ouput\ {1, string}: alternating 1s & 0s. Starts with 1

--- 1 MENTAL MODEL
- loop through and go through each character by selecting its index. Loop
  til you reach the amount of integers that the user wanted to see. <if> index
  is odd (zero-based indexing) you add 0, for even numbers (including 0)
  you add a 1;

II. EXAMPLES/EDGE CASES
- Assuming that all inputs are valid integers

III. Data structure
- new $$string to hold the result of the answer

*/
// #endregion[A]

// #region[01] MAIN
function stringy(integer) {
  let binaryString = '';
  for (let index = 0; index < integer; index += 1) {
    if (index % 2 === 0) {
      binaryString += '1';
      continue;
    }
    binaryString += '0';
  }

  console.log(binaryString);
  return binaryString;
}
// #endregion[01]

// #region[01] LS Solution
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

// I read in javascript.info that you should only use ternary to return something and to use if/else for everything else. In this case though, you are 'returning' the value and putting that return value to the variable. So it seems okay to do it this way. I also thought LS prefers incrementing with ++, but here it seems that they 

// #endregion[01]

// #region[02] EXAMPLES
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// #endregion[02]
```

## 4. Fibonacci Number Location by Length
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.
```js
// #region[A] NOTE PREP
/*
I. PROBLEM
- \input\ {1, integer}: digits specified by the argument
- \output\ {1, integer}: *Index* of the 1st Fibonacci number that has the
  number of digits (ones, tens, hundreds) specified by the argument.

  -- ADDITIONAL DETAILS
  - It should work with BigInt as well
  - Since input >= 2, this means the output will be at least 7. Thus, we
    can start our looping from 7 and on;

II. EXAMPLES
--- 1. ADDITIONAL DETAILS
- input >= 2
- works with bigInt (n)

III. DATA STORAGE/STRUCTURES

IV. PSEUDOCODE
--- 0 MENTAL MODEL
- 1st find the fiboncci numbers and put it into an array until the digit
  reaches the user input
  ~ To find the fibonacci number, you have to add the previous entry with
  the current
  ~ After you get the number, have a <conditional> to see if it matches the
  length that the user wanted. If not, continue to the next iteration
- Return the last element of the array

--- 1. CALCULATE FIBONACCI NUMBERS
A __ function $$ getFibonacci
~00~ Loop: <as long as the length of the digit is less than the user input>
  • Continue to generate the next Fibonacci Number

*/
// #endregion[A]

// #region[01] MAIN

function findFibonacci(digits) {
  let currentNumber = 0;
  let oneNumberBack = 8;
  let twoNumbersBack = 5;
  let isBigInt = false;

  if (typeof digits === 'bigint') {
    digits = Number(digits.toString()[0]);
    isBigInt = true;
  }

  for (let index = 6; currentNumber.toString().length !== digits; index++) {
    currentNumber = oneNumberBack + twoNumbersBack;
    twoNumbersBack = oneNumberBack;
    oneNumberBack = currentNumber;

    if (currentNumber.toString().length === digits) {
      return isBigInt ?  index + 'n' : index;
    }
  }
}

console.log(findFibonacci(2n));


// #endregion[01]
```

## 5. Right Triangles
Write a function that takes a positive integer, n, as an argument and logs
a right triangle whose sides each have n stars. The hypotenuse of the
triangle (the diagonal side in the images below) should have one end at the
lower-left of the triangle, and the other end at the upper-right.
```js
// #region[A] PREP
/*
I. PROBLEM PREP
- \input\ {1, + integer}
- \output\ {1, logged str}: console.log(a right triangle made up of *.
  Right angle should be at the right)

II. EXAMPLES
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

III. DATA STRUCTURES/STORAGE
- $$max length === user input

IV. PSEUDOCODE
- Loop through until you reach the userInput
- Have 2 variables. Variable one is the $$stars and $$padding
- With each iteration, add 1 to stars and decrease 1 from padding
- Run the loop til you hit n amt of stars and reach 0 for padding
*/

// #endregion[A]

// #region[01] MAIN
function generateTriangle(requiredStars) {
  for (let starCount = 1; starCount <= requiredStars; starCount++) {
    console.log(`${'*'.repeat(starCount)}`.padStart(requiredStars));
  }
}

generateTriangle(5);
```

## 6. Madlibs
Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.

```js
// #region[00] HELPER FNS
const USER_INPUT = '\n => ';
const readline = require('readline-sync');

// #endregion[00]

// #region[01] MAIN
console.log('Welcome to Madlibs. You will enter 4 parts of speech: noun, verb, adjective and advrb. \n It will then plug your inputted values into a created story. Hope you enjoy!');

let noun = readline.question(`Enter a noun ${USER_INPUT}`);
let verb = readline.question(`Enter a verb ${USER_INPUT}`);
let adjective = readline.question(`Enter an adjective ${USER_INPUT}`);
let adverb = readline.question(`Enter an adverb ${USER_INPUT}`);

let story = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
console.log(story);

// #endregion[01]
```

## 7. Double Doubles
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

```js
// #region[A] PRIMING
/*
I. PROB PREP
- \input\ {1, integer}
- \output\ {1, integer}: non double-number multipled by 2 or doubled number
  as is

IV. PSEUDOCODE
<Check if number is a double number>
  -- true: return number
  -- false: multiply it by two || add number to itself
- Return
*/
// #endregion[A]

function twice(integer) {
  // What makes an integer a double number?
  // integer is even
  // integer divided by 2: both segments equal each other
  let integerString = String(integer);

  if (integerString.length % 2 === 0) {
    let firstHalf = integerString.substring(0, integerString.length / 2);
    let secondHalf = integerString.substring(integerString.length / 2);

    if (firstHalf === secondHalf) {
      return integer;
    }
  }
  return integer * 2;
}

// #region[01] EXAMPLES
console.log(
twice(37),          // 74
twice(44),          // 44
twice(334433),      // 668866
twice(444),         // 888
twice(107),         // 214
twice(103103),      // 103103
twice(3333),        // 3333
twice(7676),        // 7676
);
// #endregion[01]
```
## 8. Grade Book
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for
negative values or values greater than 100.
```js
// #region[A] PRIMING
/*
I. PROB PREP
- \input\ {3, integers (0 - 100)}
- \output\ {1, string}: letter grade, capital A–F
*/
// #endregion[A]

function getGrade(score1, score2, score3) {
  let sum = score1 + score2 + score3;
  const NUMBER_OF_SCORES = 3;
  let meanScore = sum / NUMBER_OF_SCORES;

  if (meanScore < 60) {
    return 'F';
  } else if (meanScore < 70) {
    return 'D';
  } else if (meanScore < 80) {
    return 'C';
  } else if (meanScore < 90) {
    return 'B';
  }

  return 'A';
}

console.log(getGrade(83,84, 85));
```

## 9. Clean up the words
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

```js
// #region[A] PRIMING
/*
I. PROB PREP
- \input\ {1, string}
- \output\ {1, string}
  - only spaces and alphabetic characters

--- 1 ADDITIONAL DETAILS
- repeated characters are replaced by only 1 space. It's not 1 space per
  non-alphabetic characters

II. EXAMPLES
cleanUp("---what's my +*& line?");    // " what s my line "

III. DATA STRUCTURES/STORAGE

IV. PSEUDOCODE
--- 0 MENTAL MODEL
- ~loop~ search for any non-alphabetic characters (regexp)
- ~loop~ remove any consecutive, non alphabetic characters
- replace the remaining non-space, non-alphabetic characters with spaces
*/
// #endregion[A]

// #region[01] MAIN

function cleanUp(string) {
  let cleanMessage = [];
  cleanMessage.push(string[0]);
  for (let index = 1; index < string.length; index++) {
    let char = string[index];
    let previousChar = string[index - 1];
    if (char.match(/[^a-zA-Z]/) && previousChar.match(/[^a-zA-Z]/)) {
      continue;
    }
    cleanMessage.push(char);
  }
  return cleanMessage.join('').replaceAll(/[^a-zA-Z]/g, ' ');
}

console.log(cleanUp("---Wwhat's my +*& line?"));
// #endregion[01]
```

## 10. What Century Is That?
Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.
```js
// #region[A] PRIMING
/*
I. PROB PREP
- \input\ {1, integer}: year
- \output\ {1, string}: century with two character endin

--- 1 ADDITIONAL DEETS
- only numbers that end in 1st, 2nd and 3rd have unique endings (they must
  have a 0 before. so 01, 02, 03, 101st, 8,902nd). All other numbers end in 'th'
- new centuries begin with 01 not 00 (1901 - 2000 === 20th century)
- 1st century is 01 - 99

IV. PSEUDOCODE
--- 0 MENTAL MODEL
- use Math.ceil(year / 100) to get the number
- conditional check to see if the number ends in 1,2 or 3,


II. EXAMPLES
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

III. DATA STORAGE/STRUCTURE

IV. PSEUDOCODE
- Math.ceil(year / 100) to get the year
- <> COND: Check to see if a number ends in 01,02,03
  -- True: 'st' = 01, 'nd' = 02, 'rd' = 03
  -- False: concatenate 'th' to the number
*/

// #endregion[A]

function century(year) {
  let century = Math.ceil(year / 100);
  let tensAndOnes = century % 100;

  if ([1,2,3].includes(tensAndOnes)) {
    switch (tensAndOnes) {
      case 1:
        return century + 'st';
      case 2:
        return century + 'nd';
      case 3:
        return century + 'rd';
    }
  }
  return century + 'th';
}

```