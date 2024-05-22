/* [35 min] Hardest part was determining each row of diamond namely how to
 * center the star with the right amount of padding
INPUT: {odd int}
OUTPUT: {series of *} console.log
RULES
- int will always be odd. Assuming it's always positive
- stars are centered
EXAMPLES
- (9) -> [1,3,5,7,9,7,5,3,1]j
- (1) -> [1]
- (3) -> [1,3,1]
GOAL: Given an odd, positive int, console.log a diamond of astericks with the
amt of the input
at the center of the diamond. Starting from 1, increment by 2 until input number
is reached. Then decrement until you reach 1.
----------------------------------------
DS
- {array:str}: each holding star(s) with padding
- {int}: numberOfStars: Determines number of stars for row
PROCESS
  CREATE a topDiamond array = [] (to house rows of stars)
  POPULATE each row
    - ADD number of stars for row
    - ADD necessary padding around star
      - DETERMINE leftPad and rightPad
    - PUSH the row of stars (represented as a str) to var:topDiamond
  CREATE bottomDiamond by reversing topDiamond
  PRINT each i-row of topDiamond
  PRINT each i-row of bottomDiamond
*/

/* NOTES
You don't have to account for right padding, just the left padding
*/

function diamond(oddInteger) {
  let topDiamond = []; // store diff rows of stars as strings
  for (let star = 1; star <= oddInteger; star += 2) {
    let stars = "*".repeat(star);
    let padding = (oddInteger - star) / 2;
    let row = `${" ".repeat(padding)}${stars}${" ".repeat(padding)}`;
    topDiamond.push(row);
  }

  let bottomDiamond = [...topDiamond].reverse();
  bottomDiamond.shift();

  topDiamond.forEach((elem) => console.log(elem));
  bottomDiamond.forEach((elem) => console.log(elem));
}

function hollowDiamond(oddInteger) {
  let topDiamond = []; // store diff rows of stars as strings
  for (let num = 1; num <= oddInteger; num += 2) {
    let space = " ".repeat(num);
    let stars = (oddInteger - num) / 2;
    let row = `${"*".repeat(stars)}${space}${"*".repeat(stars)}`;
    topDiamond.push(row);
  }
  topDiamond = topDiamond.filter((row) => row.trim().length !== 0);

  let bottomDiamond = [...topDiamond].reverse();
  bottomDiamond.shift();

  topDiamond.forEach((elem) => console.log(elem));
  bottomDiamond.forEach((elem) => console.log(elem));
}

// TESTS
// diamond(9);
hollowDiamond(9);
