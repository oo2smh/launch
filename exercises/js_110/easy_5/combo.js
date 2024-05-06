/*
Questions involving combining and dividing
*/

// 1a
function unionSet(arr1, arr2) {
  let unionArray = [...arr1, ...arr2];
  unionArray = new Set(unionArray);
  unionArray = Array.from(unionArray);
  return unionArray;
}

// 1b Using forEach
function unionLoop(arr1, arr2) {
  arr2.forEach(value => {
    if (!arr1.includes(value)) {
      arr1.push(value);
    }
  });
  return arr1;
}

// 2
function interleave(arr1, arr2) {
  let newArray = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    newArray.push(arr1[idx], arr2[idx]);
  }
  console.log(newArray);
  return newArray;
}

// 2a Using forEach
function interleaveA(arr1, arr2) {
  let newArray = [];

  arr1.forEach( (value, idx) => {
    newArray.push(value, arr2[idx]);
  });

  console.log(newArray);
  return newArray;
}

// 2b Using map
function interleaveB(arr1, arr2) {
  let subidx1 = 0;
  let subidx2 = 0;

  return [...arr1, ...arr2].map( (_, idx) => {
    if (idx % 2 !== 0) {
      let newElem = arr2[subidx2];
      subidx2++;
      return newElem;
    } else {
      let newElem = arr1[subidx1];
      subidx1++;
      return newElem;
    }
  });
}

// 2b Using Map, Other people's solutions
function interleaveB1(arr1, arr2) {
  return arr1.map( (elem, idx) => {
    return [elem, arr2[idx]];
  }).flat();
}

// 2c Using reduce
function interleaveC(arr1, arr2) {
  return arr1.reduce( (total, _, idx) => {
    total.push(arr1[idx], arr2[idx]);
    return total;
  }, []);
}

// 🧪 TESTS
console.log(
  '1a', unionSet([1,3,5], [3,6,9]), // [1,3,5,6,9]
  '1b', unionLoop([1,3,5], [3,6,9]), // [1,3,5,6,9]
);

console.log(
  2, interleave([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
  '2a', interleaveA([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
  '2b', interleaveB([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
  '2b1', interleaveB1([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
  '2c', interleaveC([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
);
