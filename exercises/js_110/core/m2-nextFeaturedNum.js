/* [35min] 2nd attempt.
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice). Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number. NOTE: The largest possible featured number is 9876543201.
======================
GOAL: Return the next featured number after in:int that
IN: {int}
OUT: {int}
RULES:
- A featured number
    1. Is odd
    2. Is a multiple of 7
    3. All of the digits are unique (occurs exactly once)
- Max number is 9876543201

PROCESS
- SET v:maxInt = 9876543201
- SET v:errorMessage = 'There is no possible...'
- IF in:int >= v:maxInt --> RETURN errorMessage
- FIND next multiple of 7 after in:int
- FIND the next featuredNum  using the nextMultiple
    CHECK if it's odd
    CHECK if all digits are unique
- RETURN v:featuredNum
*/
function getNext7Multiple(int) {
  do {
    int++;
  } while (int % 7 !== 0);
  return int;
}

function hasDupes(num) {
  let tracker = {};

  for (let digit of [...String(num)]) {
    tracker[digit] = tracker[digit] || 0;
    tracker[digit]++;
  }

  return Object.values(tracker).filter((num) => num > 1).length >= 1;
}

function featured(int) {
  const MAX_INT = 9876543201;
  const ERROR_MSG =
    "There is no possible number that fulfills those requirements";

  if (int >= MAX_INT) return ERROR_MSG;
  let nextMultiple = getNext7Multiple(int);

  // FIND the next featuredNum
  for (
    let featuredNum = nextMultiple;
    featuredNum <= MAX_INT;
    featuredNum += 7
  ) {
    if (featuredNum % 2 === 0 || hasDupes(featuredNum)) continue;
    return featuredNum;
  }
}

console.log(
  featured(12), // 21
  featured(20), // 21
  featured(21), // 35
  featured(997), // 1029
  featured(1029), // 1043
  featured(999999), // 1023547
  featured(999999987), // 1023456987
  featured(9876543186), // 9876543201
  featured(9876543200), // 9876543201
  featured(9876543201), // "There is no possible number that fulfills those requirements."
);
