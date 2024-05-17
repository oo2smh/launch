/* #1 MULTIPLICATIVE AVERAGE
INPUT: {arr(int)} OUTPUT: {str} multiples all input integers together, divides
result by the number of array entries, returns the str with values rounded to
three decimal places RULES - Appears that all elems from ex are +int DS - {num}
currentProduct (accum var) ================================ PROCESS SET
currentProduct = 1 TRAVERSE each (i-elem) of array SET currentProduct *= i-elem
CALCULATE division of currentProduct / array.length ROUND and FORMAT to
3 decimal points CONVERT to string RETURN string
*/

// ****************************************************'
/* #2 MULTIPLY LISTS
INPUT: {arr(+int)} arr1, {arr{+int}} arr2
OUTPUT: {arr} product of each pair of num from the same idx
RULES
- Each elem has same amt of length
GOAL: Multiply each elem of the same idx and add them to the new array. Return the new array
=========================================================
DS
- {arr} newArray (holds product numbers)
==========================================================
PROCESS
  TRANSFORM each (i-elem) with the:
    Product of input(arr1)[idx] input(arr2)[idx]
  RETURN the transformedArray
*/

function multiplyList(arr1, arr2) {
  return arr1.map((elem, idx) => {
    return elem * arr2[idx];
  });
}

function multiplicativeAverage(arr) {
  let currentProduct = arr.reduce(
    (accumulator, integer) => accumulator * integer,
    1,
  );
  currentProduct /= arr.length;
  return currentProduct.toFixed(3);
}

// # TESTS
function testMultiplicativeAverage() {
  console.log(
    multiplicativeAverage([3, 5]), // "7.500"
    multiplicativeAverage([2, 5, 7, 11, 13, 17]), // "28361.667")
  );
}

function testMultiplyList() {
  console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
}

testMultiplyList();
