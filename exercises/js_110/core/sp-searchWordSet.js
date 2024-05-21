/*
SEARCH WORD PT 1 [9min]
=======================
INPUT: {str}: searchWord {str} strOfText
OUTPUT: {int} frequency: number of times word appears in text
GOAL: return how many times in:word appears in in:str
RULES
- case insensitive Sed counts as a match for in:sed
- all words separted by spaces
- some words will include ., (spaces.) <- this is considered a word in this ex
- does it have to be a full match. what if part of the string contains the
search term?
  - sedimentary? is this considered a match? Based off of the 1 example -> no
--------------------------
DS
- {arr} words: to hold words
- {int} counter: to count number of matches
PROCESS
  SET counter = 0
  LOOK at each word
  FORMAT each word to be lowercase
  CHECK if word === in:searchWord
    TRUE: INCREMENT counter by 1
  RETURN counter

SEARCH WORD PT 2 [8min]
======================
INPUT: {str, str}, searchWord, text
OUTPUT: {str} transformedText
RULES
- Transforming text entails UPPERCASING and surrounding matched word with **
----------------------
DS
- {array} words
PROCESS
  SEPARATE each word
  CHECK if word is equal to matched word (case insensitive)
    TRUE: TRANSFORM word into UPPERCASE and surrounded by ** **
    FALSE: USE original word
  RETURN transformed string
*/

function searchWord2(searchWord, text) {
  return text
    .split(" ")
    .map((word) => {
      searchWord = new RegExp(searchWord, "gi");
      if (searchWord.test(word)) word = `**${word.toUpperCase()}**`;
      return word;
    })
    .join(" ");
}

function searchWord(searchWord, text) {
  if (searchWord === undefined || text === undefined) return 0;
  let counter = 0;
  text.split(" ").forEach((word) => {
    word = word.toLowerCase();
    searchWord = searchWord.toLowerCase();
    if (word === searchWord) counter++;
  });
  return counter;
}

// TESTS
const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function testSearchWord1() {
  console.log(
    searchWord("sed", text), // 3
  );
}

function testSearchWord2() {
  console.log(searchWord2("sed", text));
}

testSearchWord2();
