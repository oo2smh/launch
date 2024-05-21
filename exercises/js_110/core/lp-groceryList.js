/* GROCERY LIST [8min]
INPUT: {arr}: nested 2d array
OUTPUT: {arr}: one dimensional array
GOAL: Return a 1d array with each item added to the output array specified by
the 2nd elem of each subarray
------------------------------------------
DS:
- {array} outputArray
PROCESS
- SET outputArray: holds all of the items of output
- TRAVERSE each i-subArray
  - WHILE 2nd elem of each subarray > 0
    - PUSH 1st elem into outputArray
    - DECREMENT 2nd elem by 1
- RETURN outputArray
*/

function buyFruit(nestedArray) {
  let outputArray = [];
  nestedArray.forEach((subArray) => {
    let count = subArray[1];
    while (count) {
      outputArray.push(subArray[0]);
      count--;
    }
  });
  return outputArray;
}

// Emma's solution
// Unique use of destructuring in a function parameter
function buyFruit2(arr) {
  return arr.reduce((list, [fruit, len]) => {
    return list.concat(Array(len).fill(fruit));
  }, []);
}

// TESTS
function testBuyFruit() {
  console.log(
    buyFruit([
      ["apple", 3],
      ["orange", 1],
      ["banana", 2],
    ]),
    // returns ["apple", "apple", "apple", "orange", "banana", "banana"]
  );
}

testBuyFruit();
