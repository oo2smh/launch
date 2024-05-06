/*
1. Multiplicative Average
2. Multiply List
3. List of Digits
4. Array Average
5. After Midnight Pt 1
6. After Midnight Pt 2
*/
// 1 Multiplicative Average
function multiplicativeAverage(arrOfInt) {
  let product = arrOfInt.reduce((total, curr) => total * curr, 1);
  return (product / arrOfInt.length).toFixed(3);
}

// 2 Multiply List
function multiplyList(arr1, arr2) {
  return arr1.map((elem, idx) => elem * arr2[idx]);
}

// 3 List of Digits
function digitList(positiveInteger) {
  let array = [];
  for (let integer of String(positiveInteger)) {
    array.push(Number(integer));
  }
  return array;
}

// '3a' Using Map
function digitListA(positiveInteger) {
  return [...String(positiveInteger)].map(Number);
}

// 4. Array Average
function average(arrayOfInt) {
  let sum = arrayOfInt.reduce((total, integer) => total + integer, 0);
  return Math.trunc(sum / arrayOfInt.length);
}

// 5 After Midnight Pt 1-2
function timeOfDay(minutesInt) {
  // if number > 24, keep on subtractin 24 til it's 24 or less
  let hours = Math.floor(minutesInt / 60);
  while (hours > 24) {
    hours -= 24;
  }
  while (hours < 0) {
    // -30, 23
    24 - hours;
  }
}
let minutes = minutesInt % 60;
console.log(hours, minutes);

/* *********************
🧪 TESTS
*********************** */
console.log(
  // 1, multiplicativeAverage([3, 5]),                   // "7.500"
  // 1, multiplicativeAverage([2, 5, 7, 11, 13, 17]),    // "28361.667"
  // 2, multiplyList([3, 5, 7], [9, 10, 11]),    // [27, 50, 77]
  // 3, digitList(12345),       // [1, 2, 3, 4, 5]
  // 3, digitList(7),           // [7]
  // 3, digitList(375290),      // [3, 7, 5, 2, 9, 0]
  // 3, digitList(444),         // [4, 4, 4]
  // '3a', digitListA(12345),       // [1, 2, 3, 4, 5]
  // '3a', digitListA(7),           // [7]
  // '3a', digitListA(375290),      // [3, 7, 5, 2, 9, 0]
  // '3a', digitListA(444),         // [4, 4, 4]
  // 4, average([1, 5, 87, 45, 8, 8]),       // 25
  // 4, average([9, 47, 23, 95, 16, 52]),    // 40
  //  5,
  timeOfDay(0) === "00:00",
  //  5,
  //  timeOfDay(-3) === "23:57",
  //  5,
  timeOfDay(35) === "00:35",
  //  5,
  //  timeOfDay(-1437) === "00:03",
  //  5,
  timeOfDay(3000) === "02:00",
  //  5,
  timeOfDay(800) === "13:20",
  //  5,
  //  timeOfDay(-4231) === "01:29",
);

