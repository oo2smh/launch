/* [1hr+]
Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.
============================
GOAL: Write a fn that simulates the bubble sort algo. It should mutate the in:array
IN: {array} ogArray
OUT: {array} sortedArray
RULES
- mutate the og array (done 'in place')
- exit condition: 1st time you make a pass through the array without making any swaps. Then the array is completely sorted
-----------
MM: nested loop. For each elem, move it until it can't be moved. stop the outer loop when there are no swaps

PROCESS
- CREATE v:isSwapped;
- DO WHILE elements are being swapped
    COMPARE if v:prevValue > v:nextValue
      TRUE: SWAP v:prevValue with v:nextValue
      SET v:isSwapped to true
- RETURN in:arr if no swaps were performed and loop is exited

*/

function bubbleSort(arr) {
  let isSwapped;

  do {
    isSwapped = false;

    for (let idx = 1; idx < arr.length; idx++) {
      let prev = arr[idx - 1];
      let next = arr[idx];

      if (prev > next) {
        [arr[idx - 1], arr[idx]] = [next, prev];
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

// 6
// arr[0] = 2 arr[1] = 6 [2,6,7,1,4]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
