/* 
Examples that use the frequency map
1. How Many?
*/

// 1 How Many?
function countOccurrences(array) {
  let frequencyMap = {};
  array.forEach(elem => {
    if (!frequencyMap[elem]) frequencyMap[elem] = 0;
    frequencyMap[elem]++;
  });
  for (let key in frequencyMap) {
    console.log(`${key} => ${frequencyMap[key]}`);
  }
  return frequencyMap;
}

/* **************
🧪 TESTS
************** */
console.log(
  1, countOccurrences(['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck']),
);