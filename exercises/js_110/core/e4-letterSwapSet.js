/*
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word. You may assume that every word contains at
least 1 letter and that the string will always contain at least one word. You
may also assume that each string contains nothing but words and spaces, and that
there are no leading, trailing, or repeated spaces
*/

/*
INPUT: {str} string
OUTPUT: {str} Each word has letter order swapped
RULES
- Single letters aren't swapped. It's simply returned. EX: 3
- Every word will contain at least 1 letter and at least 1 word
INTERMEDIATES
- {array} wordCollection
PROCESS
* CREATE wordCollection to store words
* PUT all words into wordCollection
* REVERSE the 1st & last letters of each
  + SAVE 1st char of word
  + SAVE last char of word
  + SAVE mid Chars of word
  + REVERSE both of these
* CONVERT wordCollection back into a string with a space between words
*/

function swap(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 1) return word;
      let first = word[0];
      let last = word[word.length - 1];
      let mid = word.slice(1, -1);
      return `${last}${mid}${first}`;
    })
    .join(" ");
}

function swap2(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 1) return word;
      let [first, ...rest] = word;
      let last = rest.pop();
      return `${last}${rest.join("")}${first}`;
    })
    .join(" ");
}

function swap3(str) {
  return str
    .split(" ")
    .map((word) => {
      let wordArray = word.split("");
      [wordArray[0], wordArray[wordArray.length - 1]] = [
        wordArray[wordArray.length - 1],
        wordArray[0],
      ];
      return wordArray.join(" ");
    })
    .join("");
}

console.log({
  "1a": swap("Oh what a wonderful day it is"), // "hO thaw a londerfuw yad ti si"
  "1b": swap("Abcde"), // "ebcdA"
  "1c": swap("a"), // "a"
  "2a": swap2("Oh what a wonderful day it is"), // "hO thaw a londerfuw yad ti si"
  "2b": swap2("Abcde"), // "ebcdA"
  "2c": swap2("a"), // "a"
  "3a": swap3("Oh what a wonderful day it is"), // "hO thaw a londerfuw yad ti si"
  "3b": swap3("Abcde"), // "ebcdA"
  "3c": swap3("a"), // "a"
});
