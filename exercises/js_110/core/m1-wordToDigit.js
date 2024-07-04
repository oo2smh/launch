/* [13min] (2nd attempt)
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
=================================
IN: {str}
OUT: {str} number words (0-9) converted into stringifed digits (0-9)
PROCESS
  CREATE a conversionMap = {}
  TRANSFORM each i:word that is a numberWord
  CONVERT back into str
  RETURN new str
*/

function wordToDigit(str) {
  let numberWords = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return str
    .split(" ")
    .map((word) => {
      let addDot = false;
      if (word.endsWith(".")) {
        word = word.replace(".", "");
        addDot = true;
      }
      if (numberWords[word]) {
        if (addDot) return numberWords[word] + ".";
        return numberWords[word];
      }
      return word;
    })
    .join(" ");
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks."),
  // "Please call me at 5 5 5 1 2 3 4. Thanks."
);
