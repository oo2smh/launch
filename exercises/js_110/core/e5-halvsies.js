/* HALVSIES
INPUT: {arr}
OUTPUT: {arr[arrs]} array of arrays
RULES
- if original arr has an odd length, place the middle elem in 1st half
GOAL: Return 2 arrays with the elems of the input array split into 2
DS
- {arr} newArray (holds new subarrays)
- {arr} firstHalf
- {arr} secondHalf
- {num} midpoint
PROCESS
? SET midpoint = Math.ceil(arr.length / 2)
  SET newArray = []
  EXTRACT from original array firstHalf
  EXTRACT from original array secondHalf
  APPEND firstHalf and secondHalf to newArray
  RETURN newArray
*/

function halvsies(array) {
  let midpoint = Math.ceil(array.length / 2);
  let newArray = [];
  newArray = [array.slice(0, midpoint), array.slice(midpoint)];
  return newArray;
  // console.log(midpoint);
}

// # TESTS
function testHalvsies() {
  console.log(
    halvsies([1, 2, 3, 4]), // [[1, 2], [3, 4]]
    halvsies([1, 5, 2, 4, 3]), // [[1, 5, 2], [4, 3]]
    halvsies([5]), // [[5], []]
    halvsies([]), // [[], []]
  );
}

testHalvsies();
