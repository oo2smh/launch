/* HOW LONG [8min]
INPUT: {str}
OUTPUT: {array} array: ['str (str.length)']
RULES
  If empty string => []
  If no arg is passed => []
  Every word will be separated by a space
GOAL: Create an array where each elem is a word and word length
-------------------------
DS
- {arr} wordInfo
PROCESS
  TAKE care of edge cases
  SEPARATE each word as an elem of an array
  TRANSFORM each word to be word + space + word.length
  RETURN transformed array
*/

function wordLengths(str) {
  if (str === "" || str === undefined) return [];
  return str.split(" ").map((word) => {
    return `${word} ${word.length}`;
  });
}

// TESTS
function testWordLengths() {
  console.log(
    wordLengths("cow sheep chicken"),
    // ["cow 3", "sheep 5", "chicken 7"]
    wordLengths("baseball hot dogs and apple pie"),
    // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
    wordLengths("It ain't easy, is it?"),
    // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
    wordLengths("Supercalifragilisticexpialidocious"),
    // ["Supercalifragilisticexpialidocious 34"]
    wordLengths(""), // []
    wordLengths(), // []
  );
}

testWordLengths();
