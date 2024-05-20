/* [12min]
INPUT: {arr1:int, arr2:int}
OUTPUT: {array} product of all combinations of number pairs between 2 arrays
RULES
- return array should be sorted in ascending numerical order
- can assume that neither argument will be an empty array
- Can have duplicate numbers
EXAMPLE
- [2,4], [1,2,3,4] => [2, 4, 6, 8, 4, 8, 12, 16] -> [2,4,4,6,8,8,12,16]
GOAL: Return a new array that multiples each integer of arr1 with all the elems
from arr2
DATA
- {array} products: holds all of the products
PROCESS
- SET {array} productsArray = []
- TRAVERSE all i-elem of arr1
  - MULTIPLY each i-elem with all elems from arr2
  - APPEND product into productsArray
- SORT array
- RETURN array
*/

function multiplyAllPairs(arr1, arr2) {
  let productsArray = [];
  arr1.forEach((num) => {
    arr2.forEach((num2) => {
      let product = num * num2;
      productsArray.push(product);
    });
  });
  productsArray.sort((a, b) => a - b);
  return productsArray;
}

// TESTS
function testMultiplyAllPairs() {
  console.log(
    multiplyAllPairs([2, 4], [4, 3, 1, 2]), // [2, 4, 4, 6, 8, 8, 12, 16]
  );
}

testMultiplyAllPairs();
