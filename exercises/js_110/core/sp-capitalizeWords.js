/* [4min]
INPUT: {str}
OUTPUT: {str} with first character of every word capitalized
RULES
- only 1st letter of each word is capitalized
PROCESS
  SEPARATE each word
  SEPARATE the 1st char of each word and capitalize it
  LOWERCASE subsequent characters
  CONCATENATE characters
  RETURN characters
*/

function wordCap(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// TESTS
function testWordCap() {
  console.log(
    wordCap("four score and seven"), // "Four Score And Seven"
    wordCap("the javaScript language"), // "The Javascript Language"
    wordCap('this is a "quoted" word'), // 'This Is A "quoted" Word'
  );
}

testWordCap();
