/* REVERSE NUMBER
=====================================
{int} => {int} intReversed
RULES
- leading 0s get dropped

**  REVERSE SENTENCE [17:35–18:00 = 25min]
=======================================
INPUT: {str}
OUTPUT: {str}
RULES
- empty str returns itself
- swapping the 1st & last word
GOAL: Return a string with the first & last word of the in:str reversed
DS: n/a
PROCESS
 EXTRACT 1st word of str
 EXTRACT last word of str
 EXTRACT mid part of str
 RETURN str with first/last word swapped

GAPS
Got stuck with extra spaces between words
Knew how to solve the problem, but it was hard to debug when I got stuck
TAKEAWAY: Test the code frequently and often

** REVERSE WORDS [18:10–18:17 = 7min]
====================================
INPUT: {str} words
OUTPUT: {str} words
RULES
- if word >= 5 reverse the order
- if word.length < 5 return the original word
- no input validation needed
DS
- {array}
PROCESS
- SEPARATE the words
- CHECK each i-word to see if its length is 5+
  - TRUE: REVERSE the word
  - FALSE: nothing
- APPEND word (transformed or not) back into array
- RETURN newWord

** REVERSE ARRAYS [18:35–18:47 = 12min]
INPUT: {arr}
OUTPUT: {arr} elems are reversed
RULES
- cannot use method reverse()
- have to mutate original array, cannot be a shallow copy
DS:
- {arr} reversedArray
PROCESS
  SET counter = 0
  WHILE counter < arr.length [1,2,3,4]
    SET firstElem = arr[0];
    REMOVE firstElem of array
    APPEND firstElem into the end
    INCREMENT counter by 1
  RETURN in:array

*/

function reverseArray(arr) {
  let counter = 0;
  while (counter < arr.length) {
    let firstElement = arr[0];
    arr.shift();
    arr.push(firstElement);
    counter++;
  }
  return arr;
}

function reverseSentence(str) {
  if (str.trim() === "") return str;

  let strArray = str.split(" ");
  if (strArray.length === 2) return strArray.reverse().join(" ");

  let firstWord = strArray[0];
  strArray.shift();
  let lastWord = strArray.pop();
  let midString = strArray.join(" ");

  return `${lastWord} ${midString} ${firstWord}`;
}

// -------------------------------

function reverseNumber(integer) {
  let reversedInteger = [...String(integer)].reverse().join("");
  return +dropLeadZeroes(reversedInteger);
}

function dropLeadZeroes(string) {
  return string.replace(/0*(?=d*)/g, "");
}

// -----------------------------------

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length >= 5) word = [...word].reverse().join("");
      return word;
    })
    .join(" ");
}

// TESTS
function testReverseArray() {
  let list = [1, 2, 3, 4];
  let result = reverseArray(list);
  console.log(result); // logs [4,3,2,1]
  console.log(list === result); // logs true

  let list1 = ["a", "b", "c", "d", "e"];
  let result1 = reverseArray(list1);
  console.log(result1); // logs  ["e", "d", "c", "b", "a"]
  console.log(list1 === result1); // logs true

  let list2 = ["abc"];
  let result2 = reverseArray(list2);
  console.log(result2); // logs  ["abc"]
  console.log(list2 === result2); // logs true

  let list3 = [];
  let result3 = reverseArray(list3);
  console.log(result3); // logs []
  console.log(list3 === result3); // logs tru
}
function testReverseWords() {
  console.log(
    reverseWords("Professional"), // "lanoisseforP"
    reverseWords("Walk around the block"), // "Walk dnuora the kcolb"
    reverseWords("Launch School"), // "hcnuaL loohcS")
  );
}

function testReverseNumber() {
  console.log(
    reverseNumber(12345), // 54321
    reverseNumber(12213), // 31221
    reverseNumber(456), // 654
    reverseNumber(12000), // 21 -- Note that leading zeros in the result get dropped!
    reverseNumber(1), // 1
  );
}

function testReverseSentence() {
  console.log(
    1,
    reverseSentence(""), // ""
    2,
    reverseSentence("Hello World"), // "World Hello"
    3,
    reverseSentence("Reverse these words"), // "words these Reverse"
  );
}
// testReverseWords();
// testReverseSentence();
// testReverseNumber();
testReverseArray();
