// Count Frequency of Each Elem in Array

function getOccurrences(arr) {
  let hash = {};
  arr.forEach((item) => {
    hash[item] = hash[item] ?? 0;
    hash[item]++;
  });
  return hash;
}

//console.log(getOccurrences([1, 1, 1, 3, 4, 5, 3]));

// FIND HIGHEST & LOWEST FREQUENCIES

function getHighLow(arr) {
  let hashSet = getOccurrences(arr);
  let entries = Object.entries(hashSet).sort((a, b) => a[1] - b[1]);
  return { min: +entries[0][0], max: +entries.at(-1)[0] };
}

console.log(getHighLow([1, 1, 2, 2, 2, 4]));
