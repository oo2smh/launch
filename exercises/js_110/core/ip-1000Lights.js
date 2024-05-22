/* [54min]
INPUT: {int} count: refers to the number of passes that you take (walks)
OUTPUT: {array} onLights: switches that are on
RULES
- no input validation needed
- [1,count]: specifies the number of passes
- For each pass, you are going to check the multiples of that pass #
  - So for pass 1, you check all the lights
  - pass 2, you check 2,4,6,8..count
  - pass 3, 3,6,9. so on
- light is initially off
- count 0 => empty array
DS
- {array:boolean} lightState of each
PROCESS
  CREATE an array of boolean values
  SET var:multiple = 1
  WHILE (multiple <= count)
    TRAVERSE every multiple of pass
      CHECK is (idx + 1) is a multiple of var:multiple
        YES: TOGGLE the element of the switch. (change boolean value)
  FILTER the indexes of the on values
  CHANGE indexes by adding 1 to offset zero based indexing in JS
  RETURN array
*/

/* NOTES
- Got stuck with the logic
- Cannot use 'switch' as a var name since it's a reserved word
- Might have been better to extract isMultiple to a subprocess

*/

function lightsOn(totalPasses) {
  let switches = Array(totalPasses).fill(false);
  let multiple = 1;

  while (multiple <= totalPasses) {
    switches.forEach((elem, idx, array) => {
      if ((idx + 1) % multiple === 0) array[idx] = !elem;
    });
    multiple++;
  }

  return switches
    .map((elem, idx) => (elem ? idx + 1 : elem))
    .filter((elem) => Number.isInteger(elem));
}
// ========================
// TESTS
function testLightsOn() {
  console.log(lightsOn(5), lightsOn(100));
}

testLightsOn();
