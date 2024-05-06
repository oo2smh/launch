/*
--- OUTLINE ---
1. UpperCase Strings
2. Delete Vowels
3. Lettercase Counter
4. Capitalize Words
5. Swap Case
6. Staggered Case
7. Word Lengths
8. Search Word
9. Search Whole Words
10. Highlight Words
*/

function isUppercase(string) {
  string = string.replaceAll(/[^a-z]/gi, "");
  console.log({ string });
  return string === string.toUpperCase();
}

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map((word) => word.replaceAll(/[aeiou]/gi, ""));
}

function letterCaseCount(string) {
  let letterOrganizer = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of string) {
    if (/[a-z]/.test(char)) {
      letterOrganizer.lowercase++;
    } else if (/[A-Z]/.test(char)) {
      letterOrganizer.uppercase++;
    } else {
      letterOrganizer.neither++;
    }
  }

  return letterOrganizer;
}

function wordCap(string) {
  return string
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
}

function swapCase(string) {
  let newString = "";
  for (let char of string) {
    if (/[a-z]/.test(char)) {
      newString += char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      newString += char.toLowerCase();
    } else {
      newString += char;
    }
  }
  return newString;
}

function staggeredCase(string) {
  let isUpperCase = true;
  let newString = string[0].toUpperCase();

  string = string.slice(1);

  for (let char of string) {
    if (/[a-zA-Z]/.test(char)) {
      if (isUpperCase) {
        newString += char.toLowerCase();
        isUpperCase = false;
      } else {
        newString += char.toUpperCase();
        isUpperCase = true;
      }
    } else {
      newString += char;
      isUpperCase = !isUpperCase;
    }
  }

  return newString;
}

function wordLengths(str) {
  if (str === "" || str === undefined) return [];
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

function searchWord(searchWord, text) {
  return text
    .split(" ")
    .filter((word) => word.toLowerCase().includes(searchWord.toLowerCase()))
    .length;
}

function searchWholeWords(searchWord, test) {
  if (!searchWord || !test) return "Invalid input";
  const regex = new RegExp(`\\b${searchWord}\\b`, "gi");
  const match = test.match(regex);
  return match ? match.length : 0;
}

function highlightWord(targetWord, test) {
  return test
    .split(" ")
    .map((word) => {
      if (targetWord.toLowerCase() === word.toLowerCase()) {
        return `**${word.toUpperCase()}**`;
      } else {
        return word;
      }
    })
    .join(" ");
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

console.log({
  //  "1a": isUppercase("t"),
  //  "1b": isUppercase("T"),
  //  "1c": isUppercase("Four Score"),
  //  "1d": isUppercase("FOUR SCORE"),
  //  "1e": isUppercase("4SCORE!"),
  //  "1f": isUppercase(""),
  //  "2a": removeVowels(["abcdefghijklmnopqrstuvwxyz"]),
  //  "2b": removeVowels(["green", "YELLOW", "black", "white"]),
  //  "2c": removeVowels(["ABC", "AEIOU", "XYZ"]),
  //  "3a": letterCaseCount("abCdef 123"),
  //  "3b": letterCaseCount("AbCd +Ef"),
  //  "3c": letterCaseCount("123"),
  //  "3d": letterCaseCount(""),
  //  "4a": wordCap("four score and seven"),
  //  "4b": wordCap("the javaScript language"),
  //  "4c": wordCap('this is a "quoted" word'),
  //  "5a": swapCase("CamelCase"),
  //  "5b": swapCase("Tonight on XYZ-TV"),
  //  "6a": staggeredCase("I Love Launch School!"),
  //  "6b": staggeredCase("ALL_CAPS"),
  //  "6c": staggeredCase("ignore 77 the 4444 numbers"),
  //  "7a": wordLengths("cow sheep chicken"),
  //  "7b": wordLengths("baseball hot dogs and apple pie"),
  //  "7c": wordLengths("It ain't easy, is it?"),
  //  "7d": wordLengths("Supercalifragilisticexpialidocious"),
  //  "7e": wordLengths(""),
  //  "7f": wordLengths(),
  //  "8a": searchWord("sed", text),
  //  "8b": searchWholeWords("qui", text),
  "9a": highlightWord("sed", text),
});

/*
--- ANSWERS ---
  '1a': false
  '1b': true
  '1c': false
  '1d': true
  '1e': true
  '1f': true
  '2a': [ 'bcdfghjklmnpqrstvwxyz' ],
  '2b': [ 'grn', 'YLLW', 'blck', 'wht' ],
  '2c': [ 'BC', '', 'XYZ' ],
  '3a': { lowercase: 5, uppercase: 1, neither: 4 },
  '3b': { lowercase: 3, uppercase: 3, neither: 2 },
  '3c': { lowercase: 0, uppercase: 0, neither: 3 },
  '3d': { lowercase: 0, uppercase: 0, neither: 0 },
  '4a': 'Four Score And Seven',
  '4b': 'The Javascript Language',
  '4c': 'This Is A "quoted" Word',
  '5a': 'cAMELcASE',
  '5b': 'tONIGHT ON xyz-tv',
  '6a': 'I LoVe lAuNcH ScHoOl!',
  '6b': 'AlL_CaPs',
  '6c': 'IgNoRe 77 ThE 4444 nUmBeRs'
  '7a': ["cow 3", "sheep 5", "chicken 7"]
  '7b': ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
  '7c': ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
  '7d': ["Supercalifragilisticexpialidocious 34"]
  '7e-7f': [ ]
  '8a': 3
  '8b': 4 // matching whole words
  '9a': All sed words are **SED**
  */
