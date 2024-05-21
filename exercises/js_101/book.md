# JS Book Exercises
- Answers and explanations for certain problems will be put here. Most problems do not need an in-depth PEDAC explanation.

## Preparations

#### 1. Create a directory named my_folder and navigate to that directory. Create two files named one.js and two.js in my_folder. Add the following JavaScript code to one.js:

```js
console.log('this is file one');
```

- `mkdir my_folder`
- `cd my_folder`
- `touch one.js two.js`
- `echo 'console.log("this is file one")' > one.js`
- `cat one.js`

#### 2. Delete everything from exercise 1 with one command.

- `rm -rf my_folder`

#### 3. Create a file named foo.js in a directory named preparations_exercises. Add the following code to the file.

```shell
mkdir preparations_exercises
cd preparations_exercises
touch foo.js
code foo.js
  let foo = "bar"
  console.log(foo);
  foo;
```

#### 4. Use node to run the foo.js file using node. What does it output?

- Run the code using node, node REPL, and the browser console
  - The node REPL shows you the return value of each code along with the output. Browser console shows you the ultimate return value from the last value and then the output value

#### 5. Identify the Constructors for each of the following methods and classify each method as either a "Static" or an "Instance" method:

- `substring` • String • instance
- `create` • Object • static
- `fromCharCode` • String • static
- `slice` • Array/String • instance
- `toString` • all Built in Objs • instance

#### 6. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.

```
index, CatName, snake_case, lazyDog,quick_Fox, 1stCharacter, operand2, BIG_NUMBER
```

- index, lazyDog, operand2

#### 7. Which of the following names satisfy the style guidelines for function names? (from the above list)

- index, lazyDog, operand2, CatName (Constructor fns)

#### 8. Which of the following names satisfy the style guidelines for constants used to represent magic numbers? (constants that are important to your program in some way but not as configuration values)

- BIG_NUMBER

#### 9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

- snake_case, quick_Fox, 1stCharacter

## Basics

#### 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

```js
-'Eddy ' + 'Son' - `Eddy Son`;
```

#### 2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

```js
let number = 4936;
let thousands = Math.floor(number / 1000);
let hundreds = Math.floor(number / 100) % 10;
let tens = Math.floor(number / 10) % 10;
let ones = number % 10;

console.log({ number }, { thousands }, { hundreds }, { tens }, { ones });
```

#### 3. Identify the data type for each of the following values:

- 'true' - str
- false - boolean
- 1.5 - number
- 2 - number
- undefined - undefined
- { foo: 'bar' } - obj

#### 4. Explain why this code logs '510' instead of 15.

```js
console.log('5' + 10);
```

- `+` operator can be both arithmetic operator or concatenation. Concatenation is prioritized when there is a `+`

#### 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

```js
console.log(Number.parseInt('5') + 10);
```

#### 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

```js
let data = `The value of 5 + 10 is ${Number(5) + 10}`;
console.log(data);
```

#### 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

- it will simply return `undefined`

#### 8. Create an array named `names` that contains a list of pet names. For instance:

```js
const names = [asta, butterscotch, pudding, neptune, darwin];
```

#### 9. Create an object named pets that contains a list of pet names and the type of animal. For instance:

```js
const pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};
```

#### 10. What value does the following expression evaluate to?

`'foo' === 'Foo'`

#### 11. What value does the following expression evaluate to? `parseInt('3.1415')`

- 3

#### 12. What value does the following expression evalute to?

`'12' < '9'`

- `true` since these are strings and they are compared lexicographically

## Variables

#### 1. Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

```js
let name = 'Victor';
function greeter(greeting = 'Good Morning', name = 'Victor') {
  console.log(`${greeting}, ${name}.`);
}

greeter('Good Morning');
greeter('Good Afternoon');
greeter('Good Evening');
```

#### 2. Write a program named .js that includes someone's and then calculates and reports the future in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```js
let my = 20;

function calculateFuture() {
  for (let futureTime = 10; futureTime <= 40; futureTime += 10) {
    console.log(`In ${futureTime}, you will be ${futureTime + } years old.`);
  }
}

calculateFuture(my);
```

#### 3. What happens when you run the following program? Why do we get that result?

```js
{
  let foo = 'bar';
}

console.log(foo); // > ReferenceError, since foo is block-scoped. There is no declaration nor initialization of foo in the global scope
```

#### 4. What happens when you run the following code? Why?

```js
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

- It outputs the first 3 `console.log` cmds and then fails when it tries to reassign a const. It outputs an error since `const` cannot be reassigned

#### 5. What does this program log to the console? Why?

```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // 'bar'
```

- foo is declared in the global scope and inside a block. The block declaration of foo shadows the global declaration of foo. Since `console.log(foo)` is declared in the global scope, it retrieves the global scope declaration.

#### 6. Will this pogram produce an error when run? Why or why not?

```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); > 'bar' // > 'bar' b/c each const is scoped
```

## Input/Output

#### 1/2. Write a dynamic greeter program that ask for your first/last name then output Hello, {name}! where {name} is the name you entered:

```shell
npm install readline-sync --save
```

```js
let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?");
let lastName = rlSync.question("What's your last name?");

function greeter(firstName, lastName) {
  return `Hello ${firstName} ${lastName}!`;
}

console.log(greeter(firstName, lastName));
```

#### 3. Modify the .js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their instead of hard-coding the in the program. Here's an example run:

```js
let rlSync = require('readline-sync');
let my = +rlSync.question("What's your ? ");

function calculateFuture() {
  for (let futureTime = 10; futureTime <= 40; futureTime += 10) {
    console.log(`In ${futureTime}, you will be ${futureTime + } years old.`);
  }
}

console.log(calculateFuture(my));
```

## Functions

#### 1. What does this code log to the console? Does executing the `foo` function affect the output? Why or why not?

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // > 'bar' b/c this searches the global scope
```

#### 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

```js
let rlSync = require('readline-sync');

function getFirstName() {
  return rlSync.question("What's your first name?");
}

function getLastName() {
  return rlSync.question("What's your last name?");
}

function greeter() {
  return `Hello ${getFirstName()} ${getLastName()}!`;
}

console.log(greeter());
```

#### 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

```js
let rlSync = require('readline-sync');

function multiply() {
  let a = rlSync.question('Enter the first number');
  let b = rlSync.question('Enter the second number');
  console.log(a * b);
  return a * b;
}

multiply();
```

#### 4. What does the following code log to the console?

```js
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // it logs nothing to do console since the return exits the fn and the following console.log isn't ran
```

#### 5. What does the following code log to the console?

```js
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); // it outputs nothing to the console. There is a difference between the console and the
```

#### 6. In the code shown below, identify the following items:

the function arguments, the function body, the function declaration, the function invocation, the function name, the function parameters, the function return value, the names of all variables in this program

```js
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

// fn arg: line 2 (num1, num2, num3); line 6 (2,3,4)
// fn body: { everything in the brackets }
// fn declaration: All of lines 1–4
// fn invocation: line 6
// fn name: multiplyNumbers
// fn parameter: line 1(num1, num2, num3)
// fn return value: result in line 3
// variables: multiplyNumbers, num1, num2, num3, result, product
```

#### 7. Without running the following code, what do you think it will output?

```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello'); // outputs 'Hello' and undefined. In the absence of an argument for an expected parameter, the argument is initialized with undefined
```

#### 8. What's the output?

```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718); // 42, 3.1415.. additional arguments are simply ignored
```

#### 9-10. Identify all of the variables (global, local) named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

```js
01 function multiply(left, right) {
02  let product = left * right;
03  return product;
04 }

06 function getNumber(prompt) {
07  return parseFloat(question(prompt));
08 }

10 let left = getNumber('Enter the first number: ');
11 let right = getNumber('Enter the second number: ');
12 console.log(`${left} * ${right} = ${multiply(left, right)}`);

// global vars: 01: multiply, 06: getNumber, 07: parseFloat, question 10: left, 11: right, 12: console
// local vars: 01: left, right, 02: product, left, right, 03: product, 06: prompt, 12: left, right, multiply
```

#### 11. Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

- No the left, right variables in lines 01,02 are locally scoped to the function multiply. Variables in 10,11 are globally scoped. In line 12. The locally scoped left,right variables are ASSIGNED the globally scoped values of left/right. So in line 12 they are different containers holding the same values.

## Flow Control

#### 1. What values do the following expression evaluate to?

```js
false || (true && false); // false
true || 1 + 2; // true
1 + 2 || true; // 3
true && 1 + 2; // 3
false && 1 + 2; // false
1 + 2 && true; // true
32 * 4 >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false;
// [false || (false) ||  true] || false
// [true] || false >> true
```

#### 2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

```js
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
    return;
  }
  console.log('odd');
}
```

#### 3. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

```js
function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Enter a valid integer');
    return;
  } else {
    num % 2 === 0 ? console.log('even') : console.log('odd');
  }
}

evenOrOdd('string');
evenOrOdd(NaN);
evenOrOdd(2);
```

#### 4. What does it output to the console?

```js
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// 'Product2, 'Product3', 'Product not found!' b/c there is no break statement to stop the case clause. The switch statement will run towards the end of the switch statement and fn
```

#### 5. Refactor this statement to use an `if` statement

`return foo() ? 'bar' : qux();`

```js
if (foo()) {
  return 'bar';
} else {
  return qux();
}
```

#### 6. What does this code output to the console?

```js
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
// it outputs 'Not empty'. Empty arrays are truthy values. The only falsy values are NAN, empty string, 0, false, undefined, null
```

#### 7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

```js
function generateCaps(str) {
  return str.trim().length > 10 ? str.toUpperCase() : str;
}

console.log(
  generateCaps('hello world'),
  generateCaps('hello world   '),
  generateCaps('goodbye')
);
```

#### 8. Write a fn that logs whether an integer is between 0 and 50 (inclusive) between 51 and 100 (inclusive), greater than 100, or less than 0.

```js
function checkIntegerRange(integer) {
  if (!Number.isInteger(integer)) {
    return 'Not an integer';
  }

  if (integer >= 0 && integer <= 50) {
    return 'Between 0 and 50 inclusive';
  } else if (integer > 50 && integer <= 100) {
    return 'Between 50 and 101 non inclusive';
  } else if (integer > 100) {
    return 'Greater than 100';
  } else {
    return 'Less than 0';
  }
}
```

```js
// LAUNCH SCHOOL SOLUTION
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);€
  }
}
```

- Note: Although my answer works, it would be more elegant to use Launch School's solution since it leans into the functionality of each if/else clause

#### 9. Without running this code, what will it print?

```js
console.log(false ?? null); // false
console.log(true ?? 1 + 2); // true
console.log(1 + 2 ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? 1 + 2); // 3
console.log(1 + 2 ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null
```

#### 10. What will this print?

```js
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); // `foo is 5, bar is 7`
show(0, 0); // `foo is 0, bar is 0`
show(4); // `foo is 4, bar is 42`
show(); // `foo is 3, bar is 42`
```

## Loops & Iterating

#### 1. Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

```js
let rlSync = require('readline-sync');
let my = +rlSync.question("What's your ? ");

function calculateFuture() {
  for (let futureTime = 10; futureTime <= 40; futureTime += 10) {
    console.log(`In ${futureTime}, you will be ${futureTime + } years old.`);
  }
}

console.log(calculateFuture(my));
```

#### 2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

```js
function factorial(num) {
  let total = num;
  for (let counter = 1; counter < num; counter += 1) {
    total *= counter;
  }
  console.log(total);
  return total;
}

factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
```

#### 3. Why infinite?

```js
let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

- The conditional expression for the while loop is an assignment expression. An assignment expression returns the value to the right of the = sign and has the side-effect of putting that value into the identifier of your choice. Even though the counter variable is incremented within the body, during the conditional expression check, it is in a way _reset_ to 1 for each iteration of the while loop. Since 1 is a truthy value, this loop will run forever.

#### 4. Error or not? What output is sent to the console?

```js
for (let i = 0; i < 5; ) {
  console.log((i += 1));
}
```

- This is valid js. The action expression of teh for loop can be empty. Console will output `1, 2, 3, 4, 5`

#### 5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

```js
let tries = 0;

function randomNumberBetween(min = 1, max = 6) {
  let result;

  do {
    result = Math.floor(Math.random() * (max - min + 1) + min);
    tries += 1;
  } while (result <= 2);

  return result;
}

randomNumberBetween(1, 6);

console.log(
  'It took ' + String(tries) + ' tries to get a number greater than 2'
);
```

#### 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

```js
function generateFactorial(integer) {
  if (integer === 1) return 1;
  return integer * generateFactorial(integer - 1);
}

console.log(generateFactorial(1));
console.log(generateFactorial(2));
console.log(generateFactorial(3));
console.log(generateFactorial(4));
```

## Arrays

#### 1. Length values of the arrays

```js
let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1];
array2.length = 5; // 5

let array3 = [];
array3[-1] = [1]; // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3

let array5 = [];
array5[100] = 3; // 101
```

#### 2. Log all the even values from myArray to the console.

```js
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(value => {
  if (value % 2 === 0) console.log(value);
});
```

#### 3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

```js
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// 1
myArray.flat(1).forEach(value => {
  if (value % 2 === 0) console.log(value);
});

// 2
myArray.forEach(arr => {
  arr.forEach(value => {
    if (value % 2 === 0) {
      console.log(`2nd method: ${value}`);
    }
  });
});
```

#### 4. Let's try another variation on the even-numbers theme.We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

```js
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

const newArray = myArray.map(integer => (integer % 2 === 0 ? 'even' : 'odd'));

console.log(newArray);
```

#### 5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

```js
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

function findIntegers(array) {
  return array.filter(value => Number.isInteger(value));
}

console.log(findIntegers(things));
```

#### 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

```js
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(str => str.length).filter(values => values % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```

#### 7. Use reduce to compute the sum of the squares of all of the numbers in an array:

```js
let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((total, curr) => {
    return total + curr ** 2;
  }, 0);
}

console.log(sumOfSquares(array)); // => 83
```

#### 8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

```js
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((total, curr) => {}, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```

#### 9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

```js
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkFor3(arr) {
  console.log(arr.includes(3));
  return arr.includes(3);
}

checkFor3(numbers1);
checkFor3(numbers2);
checkFor3(numbers3);
```

#### 10. Write some code to replace the value 6 in the following array with 606:

```js
let arr = [
  ['hello', 'world'],
  ['example', 'mem', null, 6, 88],
  [4, 8, 12],
];

arr = arr.map(subarray => {
  return subarray.includes(6)
    ? subarray.map(val => {
        return val === 6 ? 606 : val;
      })
    : subarray;
});

console.log(arr);
```

- I misunderstood the question. I traversed the arrays. WHen I looked at the answer, it was a simple bracket notation

## Objects

#### 1. Given the following code, how can you access the name of the person?

```js
let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};

// answer
person['name'] || person.name;
```

#### 2 Which of the following values are valid keys for an object

```js
1;
('1'); // valid
undefined; // valid
('hello world'); // valid
true;
('true'); // valid
```

- These are all valid. The comments with `// valid` are my answers

#### 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

```js
let myArray = {
  0: 'one',
  1: 'two',
  2: 'three',
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

#### 4. Create an array from the keys of the object `obj` below, with all of the keys converted to uppercase. Your implementation must not mutate `obj`.

```js
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const objKeys = Object.keys(obj).map(prop => prop.toUpperCase());

console.log(objKeys);
```

#### 5. Create a new object named `myObj` that uses `myProtoObj` as its prototype.

```js
let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
console.log(myProtoObj.isPrototypeOf(myObj));
```

#### 6. Which of the following values are primitive values? Which are objects? Which are neither?

```js
"foo" // primitives
3.1415 // primitives
[ 'a', 'b', 'c' ] // object
false // primitives
foo // neither, identifier
function bar() { return "bar"; } // object
undefined // primitives
{ a: 1, b: 2 } // obj
```

#### 7. Add a `qux` property with value 3 to my `myObj` object we created in the previous exercise. Now, examine the following code snippets.

```js
let objKeys = Object.keys(myObj);

objKeys.forEach(function (key) {
  console.log(key);
});
```

#### 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object. The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object. Here are some examples for your reference:

```js
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, array = Object.keys(obj)) {
  const newObj = {};
}

copyObj(objToCopy);
```

#### 9. What does it output to the console?

```js
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // 'hi'
console.log(qux); // 'hello'

// The a prop value is mutable and is changed within the fn. However, for primitives, there is qux that is globally scoped and one that is locally (fn scoped) when it's created during fn invocation. Since console.log is invoked in the global fn, it will look for the qux that's in the global scope
```

#### 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

```js
[1, 2, ['a', ['b', false]], null, {}];

// 1, 2, 'a', 'b', false, null (6 primitives)
// [] (outermost), [ 'a', ['b', false]], ['b', false], {}, (4 objects)
```

#### 11. Replace the 6 with 606.You don't have to search the object. Just write an assignment that replaces the 6.

```js
// PSEUDOCODE
// Loop through each property of the obj
// Search through and look for each instance of 6
// Replace it with 606
// Return the newly modified obj

let obj = {
  foo: { a: 'hello', b: 'world' },
  bar: ['example', 'mem', null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

obj.bar[3].xyz = 606;

console.log(obj);
```

#### 12. Fix the issue(s) so that the code works as intended

```js
function foo(bar) {
  console.log(bar, bar, bar);
}

foo('hello'); // should print "hello hello hello"
bar('hi'); // should print "hi hi hi"
```

- The last line is invoking a fn called `bar` which doesn't exist. It should be renamed as `foo`

#### 13. As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

```js
function foo(bar) {
  console.log(bar());
}

foo(() => 'Welcome'); // Should print 'Welcome'
foo(() => 3.1415); // Should print3.1415
foo(() => [1, 2, 3]); // Should print[1, 2, 3]
```

#### 14. Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

```js
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
```
