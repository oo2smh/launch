/*
MANUAL CONVERSION METHODS
1. String to Integer
2. String to Signed Integer
3. Integer to String
4. Signed Integer to String
*/

// 1
function stringToInteger(strInt) {
  let dictionary = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9};
  let value = 0;
  strInt = [...strInt].map(char => dictionary[char]);
  strInt.forEach(digit => {
    value = (value * 10) + digit;
  });
  return value;
}

// 2
function stringToSignedInteger(strInt) {
  let sign;
  if ('+-'.includes(strInt[0])) {
    sign = strInt[0];
    strInt = strInt.slice(1);
  }

  strInt = stringToInteger(strInt);

  if (sign === '-') return strInt - (strInt * 2);
  return strInt;
}

// 3
function integerToString(integer) {
  let strArray = [];
  let digit;

  do {
    digit = integer % 10;
    strArray.push(digit);
    integer = (integer - digit) / 10;
  } while (integer > 0);

  return strArray.reverse().join('');
}

//4
function signedIntegerToString(num) {
  let sign = Math.sign(num);

  num = Math.abs(num);
  let stringifiedNum = integerToString(num);

  if (sign === 1) return `+${stringifiedNum}`;
  if (sign === -1 || Object.is(-0, sign)) return `-${stringifiedNum}`;
  return stringifiedNum;
}

// 🧪 TESTS
// console.log(1, stringToInteger('4321') === 4321); //true\
// console.log(2, stringToSignedInteger("4321") === 4321); // logs true
// console.log(2, stringToSignedInteger("-570") === -570); // logs true
// console.log(2, stringToSignedInteger("+100") === 100); // logs true
// console.log(3, integerToString(4321));        // "4321"
// console.log(3, integerToString(0));           // "0"
// console.log(3, integerToString(5000));        // "5000"
// console.log(3, integerToString(1234567890));  // "1234567890"
// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");
// console.log(signedIntegerToString(-0) === "-0");
