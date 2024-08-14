/* Create a function that takes an array of integers as an argument
And returns an array of two numbers that are closest together in value. If
there are multiple pairs that are equally close, return the pair that occurs
first in the array.
*/

/* [35min]
INPUT: {int[]}
OUTPUT: {2num[]}
RULES
- Return 2 numbers closest together in value
- In the case of a tie, return the pair that occurs 1st
- Numbers do not have to be consecutive
GOAL: Return the 2 pairs of numbers that are closest to each other (you have to
add the least amt of number) to get from the 1st to 2nd num
MM: Store the indices and differences of two numbers. Then compare the num
differences and return indices with the lowest value
- 3 elem array (1st 2elems are values and the last elem is number diff)
- Sort by the number differences
- Return an array of the 1st 2 elems
-------------------------------------------
PROCESS:
  CREATE v:outputArray = []
  CREATE currentDifference
  TRAVERSE each i:elem of in:array
    CALCULATE difference of i:elem with 2nd elem
      CHECK if Math.abs() version of num > currentDifference
        YES: currentDifference = newDifference
*/

function closestNumbers(array) {
  let allPossibleCombos = [];
  array.forEach((int, idx) => {
    for (let otherInt = idx + 1; otherInt < array.length; otherInt++) {
      allPossibleCombos.push([
        int,
        array[otherInt],
        Math.abs(int - array[otherInt]),
      ]);
    }
  });

  allPossibleCombos.sort((a, b) => a[2] - b[2]);
  return allPossibleCombos[0].slice(0, 2);
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
