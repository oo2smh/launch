/* ARRAY AVERAGE
INPUT: {arr(int)}
OUTPUT: {int} average of all the integers in array
RULES
- AVERAGE = sum of all elems / number of elems
- array will never be empty
- numbers will always be a positive int
- No need to worry about input validation
- Round to Nearest integer
PROCESS
  USE reduce
*/

function average(arr) {
  return Math.trunc(
    arr.reduce((accumulator, integer) => accumulator + integer) / arr.length,
  );
}

// # TESTS
function testAverage() {
  console.log(
    average([1, 5, 87, 45, 8, 8]), // 25
    average([9, 47, 23, 95, 16, 52]), // 40)
  );
}

testAverage();
