//////////////
/*////////////
PREPARATION
*/ ///////////
/////////////

/* 5.
Anything with .prototype is an instance method otherwise it's a static method

String.prototype.substring()
Object.create()
String.fromCharCode()
String.prototype.slice(), Array.prototype.slice()
(Object,Array,Function).toString()


6–9
[index, CatName, snake_case, lazyDog, quick_Fox, 1stCharacter, operand2, BIG_NUMBER]

6. Valid Non-Constant Variable Name
- index
- lazyDog
- operand2

7. Valid Function Names
- index
- CatName (constructor)
- lazyDog
- operand2

8. Valid Constant (Magic Number)
We also use SCREAMING_SNAKE_CASE for constants that represent so-called magic numbers (which may not actually be numbers) -- constants that are important to your program in some way but not as configuration values. 

- BIG_NUMBER

9. DOES NOT Satisfy Variables, Functions, Constants
– snake_case
- quick_Fox
- 1stCharacter
 */

/////////////
/*//////////
BASICS
*/ //////////
/////////////

// 1. Concatenate two strings
/* const firstName = 'hamin';
const lastName = 'son'
console.log(firstName + lastName); */

// 2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

/* let number, ones, tens, hundreds, thousands;
number = 4936;
ones = number % 10;  // 6
number = (number - ones) / 10;  // 493
tens = number % 10  // 3
number = (number - tens) / 10  // 49
hundreds = number % 10;
thousands  = (number - hundreds) / 10  // 4

console.log(number, ones, tens, hundreds, thousands); */

// 3. Datatype of Values

/* - 'true'    : String
- false     : Boolean
- 1.5       : Number
- 2         : Number
- undefined : undefined
- { foo: 'bar'} : object  */

// 4. Explain why this code logs '510' instead of 15. console.log('5' + 10);

/* When you have a string and other value with the (+) operator, the (+) operator is assumed to be concatenation. The other non-string value is coerced to a string. Then the 2 values are concatenated */

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

// console.log(+'5' + 10);

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console: The value of 5 + 10 is 15.

// console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example: let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?

// - No there will be no error. It will create another element and call it undefined.

// 8. Create an array named names that contains a list of pet names. For instance:

// const names = [asta, butterscotch, pudding, neptune, darwin];

// 9. Create an object named pets that contains a list of pet names and the type of animal. For instance:

// const pets = {
// 	asta: 'dog',
// 	butterscotch: 'cat',
// 	pudding: 'cat',
// 	neptune: 'fish',
// 	darwin: 'lizard',
// };

// 10. What value does the following expression evaluate to?'foo' === 'Foo'
// false;

// 11. What value does the following expression evaluate to? parseInt('3.1415')
// 3;

// 12. What value does the following expression evaluate to? '12' < '9'
// '12' < '9';
// - true. When you compare 2 strings, they are compared lexicographically, according to the Unicode ordering

////////////
/*//////////
VARIABLES 
*/ //////////
/////////////

// 1.
/* let firstNameame = 'Victor';
console.log('Good Morning ' + firstName + '.');
console.log('Good Afternoon ' + firstName + '.');
console.log('Good Evening ' + firstName + '.');
 */

// 2.
/* let age = 31;
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`); */

// 3
/* {
	let foo = 'bar';
}
 */
// console.log(foo); // Error b/c foo is locally scoped and we're looking for foo in the global scope

// 4
/* const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); */

// It'll log the first 3 logs, and give an error when you try to reassign the NAME variable to 'JOE'. The error is because you can't reassign a const variable.

/* NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); */

// 5 What this will output?
/* let foo = 'bar';
{
	let foo = 'qux';
} */

// console.log(foo); // 'bar'

// 6 Error or no error?
/* const FOO = 'bar';
{
	const FOO = 'qux';
} */

// console.log(FOO); // no error because the identifier of FOO is used in the global scope and is locally scoped. It will output the global value of FOO which is 'bar'

///////////////
/* /////////////
INPUT/OUTPUT 
*/ ////////////
///////////////

// 1
/* let rlSync = require('readline-sync');
let username = rlSync.question("What's your name?");
console.log(`Hello ${username}`); */

// 2
/* let firstName = rlSync.question('What is your first name?');
let lastName = rlSync.question('What is your last name?');
console.log(`Hello ${firstName} ${lastName}`);
 */

// 3
/* let age = +rlSync.question('How old are you?');
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
 */

///////////////
/*/////////////
FUNCTIONS 
*/ /////////////
////////////////

// 1 What does this code log to the console? Does executing the foo function affect the output? Why or why not?
/* let bar = 1;
function foo() {
  let bar = 2;
}
foo();
console.log(bar);  */

// ANSWER: it will log 1. It uses the bar variable in the global scope because console.log is called at the global level. The bar variable inside of the foo function is locally scoped and shadows the global bar variable

// 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

/* let rlSync = require('readline-sync');
let firstName, lastName;
function getFirstName() {
	firstName = rlSync.question('What is your 1st name?');
}

function getLastName() {
	lastName = rlSync.question('What is your last name?');
}

function getFullName() {
	getFirstName();
	getLastName();
	console.log(`${firstName} ${lastName}`);
}

getFullName(); */

// 3. Multiply Function
// let rlSync = require('readline-sync');
// let num1 = parseFloat(rlSync.question('What is your first number?'));
// let num2 = parseFloat(rlSync.question('What is your second number?'));

// function multiply(num1, num2) {
// 	console.log(num1 * num2);
// 	return num1 * num2;
// }

// multiply(num1, num2);

// 4. What does this code log?
/*  function scream(words) {
/*  function scream(words) {
/*  function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); */ // logs nothing b/c the return key exists the fn before anything is logged

// 5. What does it log?
/* function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); */ //logs 'Yipeee!!!!'

// 6. Identify Function parts
// function multiplyNumbers(num1, num2, num3) {
//   let result = num1 * num2 * num3;
//   return result;
// }

// let product = multiplyNumbers(2, 3, 4);

//////////////
/*///////////
FLOW CONTROL 
*/ ///////////
//////////////
// 2-3. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
/* 
function evenOrOdd(num) {
	if (!Number.isInteger(num)) {
		throw new Error('Not an integer');
		return;
	}

	console.log(num % 2 === 0 ? 'even' : 'odd');
}

evenOrOdd('hello');
evenOrOdd(2); */

// 7 Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

/* function capitalizeStr(str) {
	if (str.length > 10) return str.toUpperCase();
	return str;
}

capitalizeStr('hello and goodbye');
capitalizeStr('less') */

// 8 Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

/* function logIntegerRange(num) {
	if (num < 0) {
		console.log(`${num} is less than 0.`);
	} else if (num <= 50) {
		console.log(`${num} is between 0 and 50.`);
	} else if (num <= 100) {
		console.log(`${num} is between 50 and 100`);
	} else {
		console.log(`${num} is greater than 100`);
	}
}

logIntegerRange(-25);
logIntegerRange(0);
logIntegerRange(75);
logIntegerRange(101);
 */

/*//////////
LOOPS & ITERATING 
*/ //////////

// 1. Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

/* let rlSync = require('readline-sync');
let age = +rlSync.question('How old are you?');
function calculateAge(age) {
	for (let years = 10; years <= 40; i += 10) {
		console.log(`In ${years} years, you will be ${age + years} years old.`);
	}
}

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
 */
// 2 Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
/* 
function calculateFactorial(factorial) {
	let number = 1;
	for (let i = 1; i <= factorial; i += 1) {
		number *= i;
	}

	console.log(number);
	return number;
}

calculateFactorial(1);
calculateFactorial(3);
calculateFactorial(5); */

// 3. Why is this an infinite loop?
/* let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
} */

// In the condition expression of the while loop, we are using the assignment operator to set counter to 1. 1 is a truthy value therefore it always converts to true which causes the while loop to return. 1 will always stay true so the while loop will continue to run

// 4. Does this produce an error? Why or why not?
/* for (let i = 0; i < 5;) {
  console.log(i += 1);
} */
// it doesn't produce an error because you don't have to put a 3rd action in the for loop as long as you have the semiolon. Here we omit the next value component

// 5.The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

/* function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
tries += 1;

do {
	result = randomNumberBetween(1, 6);
	tries += 1;
} while (result <= 2)

console.log(
	'It took ' + String(tries) + ' tries to get a number greater than 2'
);
 */

// 6. Recursion Factorial
/* 
let result = 1;
function calculateFactorial(num) {
	if (num > 1) {
		result *= num;
		calculateFactorial();
		num--;
	} else {
		console.log(result);
	}
}

calculateFactorial(1);
calculateFactorial(2);
calculateFactorial(3);
calculateFactorial(4);
calculateFactorial(5);
 */

///////////////////
/* ////////////////
ARRAYS
*/ ///////////////
/////////////////

// 3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.
/* let myArray = [
	[1, 3, 6, 11],
	[4, 2, 4],
	[9, 17, 16, 0],
];

myArray.forEach(arr => {
	arr.forEach(num => {
		if (num % 2 === 0) console.log(num);
	});
});
 */

// 4. Let's try another variation on the even-numbers theme. We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

/* let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

const newArray = myArray.map(num => (num % 2 === 0 ? 'even' : 'odd'));
console.log(newArray);
 */

// 5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.
/* 
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
	return arr.filter(elem => Number.isInteger(elem));
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4] */

// 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

/* let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
	return arr.map(str => str.length).filter(num => num % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
 */

// 7 Use reduce to compute the sum of the squares of all of the numbers in an array:
/* let array = [3, 5, 7];

function sumOfSquares(arr) {
	return arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue ** 2,
		0
	);
}

console.log(sumOfSquares(array)); // => 83 */

// 8 Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

/* Using a Regular Loop
function oddLengths(array) {
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].length % 2 !== 0) {
			newArr.push(array[i].length);
		}
	}
	return newArr;
}
*/

/* let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(array) {
	return array.reduce((accumulator, currentValue) => {
		if (currentValue.length % 2 !== 0) {
			accumulator.push(currentValue.length);
		}
		return accumulator;
	}, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3] */

// 9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

/* let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function find3(arr) {
	return arr.includes(3);
}

console.log(find3(numbers1));
console.log(find3(numbers2));
console.log(find3(numbers3)); */

// 10 Write some code to replace the value 6 in the following array with 606:You don't have to search the array. Just write an assignment that replaces the 6.

// let arr = [
// 	['hello', 'world'],
// 	['example', 'mem', null, 6, 88],
// 	[4, 8, 12],
// ];

// let newArray = [];

// function change6(arr) {
// 	arr.forEach(arr => {
// 		let subarray = arr.map(elem => {
// 			if (elem === 6) {
// 				return elem + 600;
// 			} else {
// 				return elem;
// 			}
// 		});

// 		// console.log(subarray);
// 		newArray.push(subarray);
// 	});
// 	return newArray;
// }

// console.log(change6(arr));

/////////////////////////
////////////////////////
/* OBJECTS
 */ //////////////////////
////////////////////////
// 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement: Arrays use positive integers starting with 0 as indexes. An array also must have a length property.
/* 
let myArray = {
	0: 'first',
	1: 'second',
	2: 'third',
	length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
	console.log(myArray[i]);
}
 */

// 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

/* let obj = {
	b: 2,
	a: 1,
	c: 3,
};

const arr = Object.keys(obj).map(key => key.toUpperCase());

console.log(arr, obj);
 */

// 5. Create a new object named myObj that uses myProtoObj as its prototype.

/* let myProtoObj = {
	foo: 1,
	bar: 2,
};

const myObj = Object.create(myProtoObj);

let protoCheck = myProtoObj.isPrototypeOf(myObj);

console.log(myObj, myObj.foo, protoCheck);
 */

// 7 Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

// let myProtoObj = {
// 	foo: 1,
// 	bar: 2,
// };

// const myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// console.log(myObj.hasOwnProperty('qux'));
// console.log(myObj.hasOwnProperty('foo'));

// for (let key in myObj) {
// 	console.log(key);
// }

// for (let key in myObj) {
// 	if (myObj.hasOwnProperty(key)) console.log(`Own Prop ${key}`);
// }

// 8 Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

/* function copyObj(objToCopy, objKeys = Object.keys(objToCopy)) {
	const newObj = {};

	objKeys.forEach(key => {
		newObj[key] = objToCopy[key];
	});

	return newObj;
}

let objToCopy = {
	foo: 1,
	bar: 2,
	qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3); // => { bar: 2 } */

// 11 Write some code to replace the value 6 in the following object with 606:
/* let obj = {
	foo: { a: 'hello', b: 'world' },
	bar: ['example', 'mem', null, { xyz: 6 }, 88],
	qux: [4, 8, 12],
};

obj.bar[3].xyz = 606;
console.log(obj);
 */
// 13. As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

/* function foo(bar) {
	console.log(bar());
}

function logText(log) {
	return log;
}

foo(logText('Welcome')); // Should print 'Welcome'
foo(logText(3.1415)); // Should print 3.1415
foo(logText([1, 2, 3])); // Should print [1, 2, 3] */

// I got this wrong. The answer is to create 3 functions and put that as the argument for foo when you invoke foo.

/////////////////
/////////////////
/* MORE STUFF */
/////////////////
/////////////////

// 6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

/* let words = [
	'laboratory',
	'experiment',
	'flab',
	'Pans Labyrinth',
	'elaborate',
	'polar bear',
];

function allMatches(array, regex) {
	const newArray = [];
	array.forEach(elem => {
		if (elem.match(regex)) newArray.push(elem);
	});
	return newArray;
}

console.log(allMatches(words, /lab/));  */ // => ['laboratory', 'flab', 'elaborate']

// 7 What is exception handling and what problem does it solve?

// Exception Handling
// Exception handling is to deal with possible errors and to deal with it accordingly instead of leaving the error handling to the browser/host environment. With JS, we use the try catch statement

// 8 Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination. Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

/* function isNotANumber(value) {
	return typeof value === 'number' && String(value) === 'NaN';
}
console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
 */

// 9 Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

// if it's -0 return true. Otherwise, return false

function isNeg0(value) {
	console.log(value / 0 == NaN);
}

console.log(isNeg0(0));
console.log(isNeg0(-0));
console.log(isNeg0(2));
console.log(isNeg0(-Infinity));
