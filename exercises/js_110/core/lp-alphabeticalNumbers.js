/* ALPHABETICAL NUMBERS [30min]
INPUT: {array: int} array: [0-19]
OUTPUT: {array} sortedArray: sorted based on English word for each number
EXAMPLES
- [0,1,2,3]  -> [zero, one, two, three] -> [one, three, two, zero] -> [1,3,2,0]
RULES
- 0-19 inclusive
GOAL: return an array of integer sorted by their english word counterpart
-------------------------------
DATA
- {arr} dict: convert integer into english equivalent
PROCESS
- SET dict {arr} = {0: 'zero'..1: 'one'}
- TRANFORM in:array into its string counterpart
- SORT the array
* TRANSFORM in:array back into integer counterpart
  - TRAVERSE numberDictionary for each i-word
    - CHECK if i-word is in in:array
      - YES: GET the idx where it shows up in in:array
          - SET idx of i:word into the number equivalent
      - NO: CONTINUE
- RETURN in:array
*/

const numberDictionary = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphaSortUsingSort(arrayOfInt) {
  return arrayOfInt.toSorted((a, b) => {
    if (numberDictionary[a] > numberDictionary[b]) return 1;
    if (numberDictionary[a] < numberDictionary[b]) return -1;
    return 0;
  });
}

function alphabeticNumberSort(arrayOfInt) {
  arrayOfInt = arrayOfInt.map((int) => numberDictionary[int]).sort();

  numberDictionary.forEach((word, idx) => {
    while (arrayOfInt.includes(word)) {
      let integerOccurrenceIdx = arrayOfInt.indexOf(word);
      arrayOfInt[integerOccurrenceIdx] = idx;
    }
  });

  return arrayOfInt;
}

function testCode() {
  console.log(
    alphabeticNumberSort([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ]),
    // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
  );
}

function testCode2() {
  console.log(
    alphaSortUsingSort([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ]),
    // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
  );
}

testCode2();
