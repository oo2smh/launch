/* 1. Letter Counter
Write a function that takes a string consisting of 0+ space separated words and
returns an object that shows the number of words of different sizes. Words
consist of any sequence of non-space characters.

2. Letter Counter Modified
Modify the wordSizes fn from the previous exercise to exclude non-letters when
determining word size. For instance, the word size of it's is 3 and not 4.
*/

function wordSizes(str) {
  if (str.length === 0) return {};
  let arrayOfLengths = str.split(" ").map((word) => word.length);
  return countFrequency(arrayOfLengths);
}

// SUBPROCESS
function countFrequency(array) {
  let frequencyCounter = {};
  array.forEach((length) => {
    if (!Object.hasOwn(frequencyCounter, length)) frequencyCounter[length] = 0;
    frequencyCounter[length]++;
  });
  return frequencyCounter;
}

function wordSizesMod(str) {
  if (str.length === 0) return {};
  let arrayOfLengths = str.split(" ").map((word) => {
    word = word.replaceAll(/[^a-z]/gi, "");
    return word.length;
  });
  return countFrequency(arrayOfLengths);
}

console.log(
  wordSizes("Four score and seven."), // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes("Hey diddle diddle, the cat and the fiddle!"), // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?"), // { "2": 1, "4": 1, "6": 1 }
  wordSizes(""), // {})
  wordSizesMod("Four score and seven."), // { "3": 1, "4": 1, "5": 2 }
  wordSizesMod("Hey diddle diddle, the cat and the fiddle!"), // { "3": 5, "6": 3 }
  wordSizesMod("What's up doc?"), // { "2": 1, "3": 1, "5": 1 }
  wordSizesMod(""), // {})
);
