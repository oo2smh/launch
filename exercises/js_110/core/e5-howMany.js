/* HOW MANY?
INPUT: {arr}
OUTPUT: {console.log} output count of each array elem
RULE
- case sensitive CAR !== car
================
DS:
- {obj} counterDict (trackerDict)
=======================
PROCESS
  SET the counterDict = {}
  TRAVERSE each (i-elem) of array
  CHECK if counterDict has a prop called i-elem
    NO: CREATE counterDict[i-elem] = 0
  INCREMENT counterDict[i-elem] by 1
  TRAVERSE each (i-property) of counterDict
    LOG the property => value for each (i-count)
*/

function countOccurrences(arr) {
  let counterDict = {};
  for (let elem of arr) {
    elem = elem.toLowerCase();
    if (!counterDict[elem]) counterDict[elem] = 0;
    counterDict[elem]++;
  }

  for (let key in counterDict) {
    console.log(`${key} => ${counterDict[key]}`);
  }
}

// # TESTS
function test1() {
  let vehicles = [
    "car",
    "car",
    "truck",
    "car",
    "SUV",
    "truck",
    "motorcycle",
    "suv",
    "motorcycle",
    "car",
    "truck",
  ];
  countOccurrences(vehicles);
}

test1();
