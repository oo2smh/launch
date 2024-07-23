/* SELECTION SORT (O(n^2))
- Grab minimum and move it to the left
- O(n^2) time complexity
- Outer loop condition only goes to arr.length-2
  - The last elem does need to be checked b/c swapping prev elems will ensure
  that last elem is in correct pos
*/
let arr = [5, 3, 1, 2, 7];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

//console.log(selectionSort(arr));

/* BUBBLE SORT (O(n^2))
- Check curr value to adj value. If curr value is larger than adj, move it to left
- With each iteration, largest value will be on the right
- Outer loop decrements. Condition doesn't need to check idx 0 (i > 0)
- Inner loop increments up to i-1.
  - This is because within the loop (j+1) will compare the last elem for swap
*/
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

function bubbleRec(arr, n = arr.length) {
  if (n === 1) return arr;
  let didSwap = false;

  for (let i = 1; i < n - 1; i++) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      didSwap = true;
    }
  }

  if (!didSwap) return arr;
  return bubbleRec(arr, n - 1);
}

//console.log(bubbleRec([4, -2, 0, 3, 2, 1, 2, 3, 3, 11, 0, 22]));

/* INSERTION SORT (O(n^2))
- Create a window. Window will be sorted.
- Each iteration, place rightmost item into its proper spot in window
  - Move i leftward (using swaps) until it's at its proper position
- When converting nested loop into a recursive fn, the nested fn's logic
remains within the recursive fn and the outer loop's variable has to taken care
by using parameters. The condition of the outer loop becomes the base cond
of the recursive fn
*/

function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = i; j > 0 && arr[j - 1]; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

function insertionRec(arr, pivot = 1) {
  if (pivot > arr.length - 1 || arr.length <= 1) return arr;
  for (let j = pivot; j - 1 >= 0; j--) {
    if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
  }
  insertionRec(arr, pivot + 1);
  return arr;
}

console.log(insertionRec([3, 2, 1, 6, 2, 4, 6, -2]));

/* MERGE SORT (n log n)
- Decompose, Sort, Merge
- Divide arr into half
- 2 pointers (low, high)
- Initialization values (low,high) must be passed as arg
  - Low: 0, high: arr.length-1
- Left path of recursion tree resolves 1st before right path is invoked
- I opted not to use striver's method and use a slightly more space-intensive
method because it is more intuitive. It's based off of the medium article

#RESOURCES
https://medium.com/basecs/making-sense-of-merge-sort-part-1-49649a143478
*/

// INTUITIVE METHOD
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midpt = Math.floor(arr.length / 2);
  let leftSlice = arr.slice(0, midpt);
  let rightSlice = arr.slice(midpt);
  return merge(mergeSort(leftSlice), mergeSort(rightSlice));
}

function merge(leftSlice, rightSlice) {
  let newArr = [];
  let left = 0;
  let right = 0;

  while (leftSlice[left] && rightSlice[right]) {
    if (leftSlice[left] < rightSlice[right]) {
      newArr.push(leftSlice[left]);
      left++;
    } else {
      newArr.push(rightSlice[right]);
      right++;
    }
  }

  while (leftSlice[left]) {
    newArr.push(leftSlice[left]);
    left++;
  }

  while (rightSlice[right]) {
    newArr.push(rightSlice[right]);
    right++;
  }

  return newArr;
}
//console.log(mergeSort([4, 3, 2, 1, 5]));

/* QUICKSORT (n logn)
- https://medium.com/basecs/pivoting-to-understand-quicksort-part-2-30161aefe1d3
- This implementation takes a cue from merge sort and initially chooses the pivot pt as the main elem
*/

// Recursive
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
}

function partition(arr, start, end) {
  let pivot = start;

  while (start < end) {
    while (arr[start] <= arr[pivot]) {
      start++;
    }
    while (arr[end] > arr[pivot]) {
      end--;
    }
    if (start < end) [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  [arr[pivot], arr[end]] = [arr[end], arr[pivot]];
  return end;
}

//console.log(quickSort([4, 0, 4, 22, 4 - 4, 5, 8, 1]));
