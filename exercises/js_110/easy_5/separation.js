/*
These are problems that take a bigger whole and decompose it into smaller parts
1. Halvsies
*/

// 1 Halvsies
function halvsies(array) {
  let mid = Math.ceil((array.length / 2));
  return [[...array.slice(0,mid)], [...array.slice(mid)]];
}

halvsies([1,2,3,4]); //[[1,2], [3,4]]
halvsies([1,5,2,4,3]); //[[1,5,2], [4,3]]
halvsies([5]); //[[5], []]
halvsies([]); //[[], []]