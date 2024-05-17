/* DIGITS LIST
INPUT: {+int}
OUTPUT: {arr} of each individual number
RULES
- duplicate numbers are returned as separated items
GOAL: Return a list of all digits from a number
DS
- {arr} arrOfDigits (to hold pushed elems)
===================================
PROCESS
  CONVERT into str
  BREAK into array
  RETURN array
*/

function digitList(integer) {
  return [...String(integer)].map(Number);
}

function testDigitList() {
  console.log(
    digitList(12345), // [1, 2, 3, 4, 5]
    digitList(7), // [7]
    digitList(375290), // [3, 7, 5, 2, 9, 0]
    digitList(444), // [4, 4, 4])
  );
}

testDigitList();
