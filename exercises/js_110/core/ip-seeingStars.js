/* [36min] extra spacing caused me some issues
INPUT: {+int}: smallest value being 7 [7, largeNum]
OUTPUT: {console.log}: 8-pointed star
RULES
- stars are depicted by *
- in:int also corresponds to the number of rows
- top part mirror the bottom part separated by a hr of stars
  - HR has the same # of stars as in:integer
  - Rest of the rows have 3 stars exactly
    - Separated by an increasing amount of space between stars
- spacing between stars
EXAMPLES
- star(9)
  1: 0 _ _ _ 4 _ _ _ 8
  2: _ 1 _ _ 4 _ _ 7 _
  3: _ _ 2 _ 4 _ 6 _ _
  4: _ _ _ 3 4 5 _ _ _
- length is always constant. Midpoint is always constant
- you are shifting where the star shows up incrementing by one on left side,
decrementing by 1 on right side
------------------------
DS
- {array:str} arrayOfRows: each row depicted by a str
PROCESS
- SET v:arrayOfRows = []
- SET v:counter = 0
- SET v:midpoint = in:integer / 2
- TRANSFORM each i-elem of v:arrayOfRows to their respective row
  - SET v:innerPadding = v:midpoint - v:counter
  - SET v:outerPadding = v:counter
  - SET v:row = v:outerPadding + * + v:innerPadding + * + v:innerPadding + *
  - INCREMENT v:counter by 1
- PRINT each i-row of v:arrayOfRows
*/

function star(integer) {
  let midpoint = Math.floor(integer / 2);
  let topSection = Array(midpoint).fill("");
  let midRow = ` ${"*".repeat(integer)} `;
  let counter = 0;

  topSection = topSection.map((row) => {
    let innerPadding = " ".repeat(midpoint - counter - 1);
    let outerPadding = " ".repeat(counter);
    row = ` ${outerPadding}*${innerPadding}*${innerPadding}* `;
    counter++;
    return row;
  });

  let bottomSection = topSection.toReversed();
  topSection.forEach((row) => console.log(row));
  console.log(midRow);
  bottomSection.forEach((row) => console.log(row));
}

// TESTS
function testStar() {
  // star(7);
  star(9);
}

testStar();
