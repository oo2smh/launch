# Practice Problems 
Contained below are the practice problems that are in `JS-101 Lesson 3`. 

## EASY #1
### 1. Raise an error?
```js 
let numbers = [1, 2, 3];
numbers[6] = 5;

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
```
- No. It will not raise an error. The array will become  `sparse` meaning
that not all elements will have a value. For the values not specified, it
will be treated as an `empty` slot
- `numbers[4]` will return `undefined`. Even though it's an empty value,
  the js engine will output `undefined`

### 2. How can you determine whether a given string ends with an exclamation mark (!)? 
```js
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```

- `string.endsWith(searchStr)` method can be used. A boolean value will be
  returned. In this case it will be `str1.endsWith('!')`.

### 3. Does the following object of people and their age contain an entry for `Spot`;
```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```

- Use the static method `Object.keys(ages)` which will return an array. Use
  the `includes` method on that array which will return a Boolean
- You can also use the `for in` loop to go through each property of the
  Object and have an `if conditional` inside to see if any property matches `Seth`

```js
let ages = { Seth: 43,Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// 1st Solution
console.log(Object.keys(ages).includes('Spot'));

// 2nd Solution
let isPersonReal = false;
for (let key in ages) {
  if (key.toLowerCase() === 'spot') {
    isPersonReal = true;
    break;
  }
}

console.log(`Spot being real is ${isPersonReal}`);

// 3rd Solution
ages.hasOwnProperty('Spot');
```

### 4. Create a string that contains all lowercase letters except for the 1st character which should be capatalized. 
```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// Solution 1: slice, substring variants
munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
```
### 5. What will the following code output?
```js
console.log(false == '0'); // when there is a boolean with ==, the other value gets coerced to a boolean => true
console.log(false === '0'); // false, diff datatypes
```

### 6. We have entries for the Munster family in the `age` object. Add entries for Marilyn and Spot to the object 
```js
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

// Answer
let answer = Object.assign(ages, additionalAges);

console.log(answer);
```

### 7. Determine whether the name `Dino` appears in the strings below -- check each string separately
```js
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// Answers 
console.log('Includes str 1:', str1.includes('Dino'));
console.log('Includes str 2:', str2.includes('Dino'));
console.log('Match str1:', Boolean(str1.match('Dino')));
console.log('Match str2:', Boolean(str2.match('Dino')));
console.log('Search str 1:', str1.search('Dino') !== -1 ? true : false);
console.log('Search str 2:', str2.search('Dino') !== -1 ? true : false);
```

### 8. Add `Dino` to the following array
```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Answer
flintstones.push('pushed Dino1');
flintstones.unshift('unshifted Dino2');
flintstones = flintstones.concat('concat Dino3');
flintstones[flintstones.length] = 'flintstone.length Dino 4';

console.log(flintstones);
```

### 9. How can we add multiple items to our array 'Dino' and 'Hoppy'
```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones = flintstones.concat('Dino', 'Hoppy');
flintstones.push('Dino','Hoppy');
flintstones.unshift('Dino', 'Hoppy');

console.log(flintstones);
```

### 10. Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
```js
let advice = "Few things in life are as important as house training your pet dinosaur.";


/// Solution #1
let array = advice.split('house');
console.log(array[0]);

// Solution #2
let index = advice.indexOf('house');
console.log(advice.slice(0, index - 1));
console.log(advice.substring(0, index - 1));

// Expected return value:
// => 'Few things in life are as important as '
```

## EASY #2
### 1. Given a string, return a new str that replaces every occurrence of the word 'important' with 'urgent'
```js
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replaceAll('important', 'urgent');
console.log(advice);

// Answer
console.log(advice.replaceAll('important', 'urgent'));
```

### 2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// SOLUTIONS
let numbers = [1, 2, 3, 4, 5];
/* Make a copy of the original array and mutate that through reverse or sort
WAYS TO COPY
- Spread operator
- slice()
- Array.from()
- Array.prototype.concat()
- Array() (Not another copy, linked by reference)
- Array.of() (Not another copy, linked by reference)

*/
let spread = [...numbers];
let slice = numbers.slice();
let arrayFrom = Array.from(numbers);
let arrayConcat = numbers.concat();
let array = Array(numbers);
let arrayOf = Array.of(numbers);

let arrayAccumulated = [spread, slice, arrayFrom, arrayConcat];

arrayAccumulated.forEach(subarray => {
  subarray.reverse();
});

arrayAccumulated.forEach(subarray => {
  subarray.sort((elem1, elem2) => elem2 - elem1);
});


console.log({numbers}, {spread}, {slice}, {arrayFrom}, {arrayConcat});
```

### 3. Given a number and an array, determine whether the number is included in the array
```js
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

// Answer
console.log(numbers.includes(number1), numbers.includes(number2));
```

### 4. Two Different Ways to Add A beginning String in front of existing string
```js
let famousWords = "seven years ago...";

// Add 'Four score and '

// SOLUTIONS
// Concatenation and reassignment
famousWords = 'Four score and ' + 'seven years ago...';
famousWords = `Four score and ${famousWords}`;
famousWords = 'Four score and '.concat(famousWords);

console.log(famousWords);
```

### 5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
```js
let numbers = [1,2,3,4,5];
numbers.splice(2,1);
console.log(numbers);
```

### 6. Create a new array that contains all of the above values, but in an unnested format
```js
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Method #1
newArray = flintstones.flat();

// Method #2 only works for 2Levels Deep
newArray = flintstones.forEach(item => {
  if (Array.isArray(item)) {
    item.forEach(subitem => newArray.push(subitem));
  } else {
    newArray.push(item);
  }
  return newArray;
});

// Method #3 Spread Syntax
newArray = [...flintstones, ...additionOne, ...additionTwo];

// Method #4 Concat
newArray = flintstones.concat(additionOne, additionTwo);
console.log(newArray);

// GOAL: [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]


// GOAL: [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
```

### 7. Consider the following object. Create an array that contains only 2 elements: Barney's name and Barney's number;
```js
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let answer;

// Solution #1
let objEntries = Object.entries(flintstones);
let answer = objEntries.filter(item => item[0] === 'Barney');
answer = [].concat(...answer);

// Solution #2
for (let key in flintstones) {
  if (key === 'Barney') {
    answer = [key, flintstones[key]];
  }
}

console.log(answer);
```

### 8. How would you check whether the objects assigned to variables numbers and table below are arrays?
```js
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
```
- Use the `Array.isArray(value)` which will return a boolean


### 9. Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
```js
let title = "Flintstone Family Members";

// SOLUTION
const PAGE_WIDTH = 40;
let diffInWidth = PAGE_WIDTH - title.length;
let padding = Math.floor(diffInWidth / 2);

title = title.padStart(title.length + padding);
title = title.padEnd(title.length + padding);

console.log(title);

// LS's solution only uses padStart and not padStart + padEnd. If you center it in 1 direction, it's redudant to use padEnd as well like I did
```

### 10. Write a one-line expression to count the number of lower-case t characters in each of the following strings:
```js
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log((statement1.match(/t/g).length) ?? 0);
console.log(statement1.split('').filter(item => item === 't').length);

console.log((statement2.match(/t/g)?.length) ?? 0);
console.log(statement2.split('').filter(item => item === 't').length);
```
## EASY 3
### 1. Write 3 different ways to remove all of teh elements from the following array
```js
let numbers = [1,2,3,4];

// Method #1
numbers = [];
// Method #2
numbers.length = 0;
// Method #3
numbers.splice(0);
// Method #4
for (let count = 0; numbers.length > 0; count++) {
  numbers.pop();
}

console.log(numbers);
```
### 2. What will the following code output?
```js
console.log([1, 2, 3] + [4, 5]);

// ❌ My answer: '[Object object] [Object object]' 
// Correct Answer: '1,2,34,5': When arrays are concatenated, they are converted into strings. [1,2,3] => '1,2,3' and [4,5] => '4,5'. '1,2,3' + '4,5' => '1,2,34,5'
```

### 3. What will the following code output?
```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// 'hello there'
```

### 4. What will the following code output?
```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// ❌ arr1 is going to remain the same as line 1. That's b/c slice makes a shallow copy (1 level deep)

// I read too quickly and missed that it was mutating the object reference in array index 1. Since both arrays are pointing to the same reference, mutating the object will appear in both of the arrays
```

### 5. The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
```js
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValidRefactored(color) {
  return color === "blue" || color === "green";
}

const refactoredAgain = color => color === 'blue' || color === 'green';

const refactoredThree = color => ['blue','green'].includes(color);

```

### 6. All variables, primitives, objects during code execution
```js
let arr = [1, 2, 3]; 
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// variables: arr, newArr, num, newNum, double, num (local, functionally scoped to double)
// primitives: 1,2,3
// objects: [1,2,3], fn double
```

## Medium #1
### 1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens. For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
```js
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...

let string = 'The Flintstones Rock!';

for (let count = 0; count < 10; count += 1) {
  console.log(string.padStart(string.length + count));
}
```

### 2. Starting with a munstersDescription. Return a new string that swaps the case of all the letters
```js
let munstersDescription = "The Munsters are creepy and spooky.";

// Expected Value: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// SOLUTION
let answer = munstersDescription.split('');
answer = answer.map(char => {
  if (char.match(/[a-z]/)) {
    return char.toUpperCase();
  } else if (char.match(/[A-Z]/)) {
    return char.toLowerCase();
  } else {
    return char;
  }
});

console.log(answer.join(''));
```

### 3. Alan wrote the following function, which was intended to return all of the factors of number. Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.Bonus: What is the purpose of number % divisor === 0 in that code?

```js
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// SOLUTION 
function factors(number) {
  let factors = [];

  for (let divisor = number; divisor > 0; divisor -= 1) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(0), factors(-4), factors(4));
```
-Purpose of the `number % divisor == 0` is to determine if the number from
the iteration is a factor. If it's a factor, it should divide evenly into
the number with no remainder aka a remainder of 0

### 4. Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer. \n She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?". \n Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

```js
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```
- There is no practical differencee between the 2 methods. They will return
 the same. With that being said, under the hood, `push` is mutating the
 original object while concat is creating a brand new object and
 reassinging the new object into `buffer`. With `push` you can
  only add one element at a time. Whereas with `concat` you can add
  multiple items at once by adding an array


### 5. What will the following 2 lines of code output?
```js
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

- Programming languages use binary numbers with 2 as its base. Decimal uses
  a base of 10. Binary numbers can represent 1/2, 1/4, 1/8, 1/16, 1/32,
  1/64 and so on and so forth. Decimal numbers use 1/10, 1/100, 1/1000.
  These numbers don't perfectly match up and leads to a `rounding error`
  when working with floats. So this will result `0.8999999` and `false`

### 6. What do you think the following code will output? How can you reliably test if a value is NaN?
```js
let nanArray = [NaN]; 

console.log(nanArray[0] === NaN);

// SOLUTION
/* 
- It will output true. NAN is the only value that doesn't equal itself 
NAN === NAN => false
- We have to use Number.isNaN(value) to check to see if a value is NaN
*/

console.log(Number.isNaN(nanArray[0])); // true
```

### 7. What is the output of the following code?
```js
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); 

console.log(answer - 8 )
```

- SOLUTION: It will output the result of `42 - 8` which is `34`. Even
  though the answer is put is used as an argument in the `messWithIt`
  function, it is locally scoped and the result is saved to a new var
  `newAnswer`. The var `answer` doesn't change the value that it holds.

### 8. One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

```js
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

// SOLUTION
/* 
Yes the family's data got ransacked. Object.values() gets all of the values of the specified object and puts it into an array. So on the 1st line of the function we have an array of objects. Next, we are looping through each object of the array and reassigning the values for the 'age' and 'gender' properties. The values are changed 
*/
```

### 9. Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players. What does the following code output?

```js
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// output will be 'paper'
```

### 10. What will the following function invocation return?
```js
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); // no
```

## Hard 1 
### 1. Will the following function return the same results?   
```js
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
```
- SOLUTION: The first function will return an object with a property with a
  value of 'hi there'. The second one will return `undefined` because ASI
  will automatically add a semicolon after the return statement. Even
  though there is an error with the semicolon instead of a comma in the
  second function, return automatically exits the function so that code is
  never ran and no error is thrown

### 2. What does the lat line in the following code output?
```js
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); 

// => { first: [1,2]} Arrays are objects. Objects' references are moved around when you assign
```

### 3. Given the following similar sets of code, what will each code snippet print?
```js
// A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ['one']
console.log(`two is: ${two}`); // ['two']
console.log(`three is: ${three}`); // ['three']

// B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ['one']
console.log(`two is: ${two}`); // ['two']
console.log(`three is: ${three}`); // ['three']

// C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ['two']
console.log(`two is: ${two}`); // ['three']
console.log(`three is: ${three}`); // ['one']
```

### 4. Identify all the variables, primitive values and objects in the following code
- Variables: boo, scare, myBoo (local to fn boo), halloweenCollection,
  myBoo (global) 
- Primitives: 'Boo!!!', 'Happy Halloween', 'Boo', 'May all your pumpkins be
  glowing', 'greet', 'scare', 'wish'
- Objects: boo, halloweenCollection

### 5. Fix, Refactor Incomplete Code //Skipped