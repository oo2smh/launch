/*
n = 3, n = 2
******  ****
**  **  *  *
*    *  *  *
*    *  ****
**  **
******
*/

function set5a(n) {
  let maxWidth = 2 * n;

  // TOP PART
  for (let i = n; i > 0; i--) {
    let gap = "";
    let stars = "";

    for (let j = 0; j < i; j++) {
      stars += "*";
    }

    let gapAmt = maxWidth - stars.length * 2;

    for (let j = 0; j < gapAmt; j++) {
      gap += " ";
    }

    let row = stars + gap + stars;
    console.log(row);
  }

  // BOTTOM PART
  for (let i = 0; i < n; i++) {
    let gap = "";
    let stars = "";

    for (let j = 0; j <= i; j++) {
      stars += "*";
    }

    let gapAmt = maxWidth - stars.length * 2;

    for (let j = 0; j < gapAmt; j++) {
      gap += " ";
    }

    let row = stars + gap + stars;
    console.log(row);
  }
}

/*
n=3, n=2
*    *  *  *
**  **  ****
******  *  *
**  **
*    *
*/

function set5b(n) {
  for (let i = 0; i < n + (n - 1); i++) {
    let stars = "";
    let gap = "";
    let maxLength = 2 * n;

    // stars length
    for (let j = 0; j <= i; j++) {
      stars += "*";
      if (j >= n) stars = stars.slice(0, stars.length - 2);
    }

    // gap length
    let gapAmt = maxLength - stars.length * 2;

    for (let j = 0; j < gapAmt; j++) {
      gap += " ";
    }

    let row = stars + gap + stars;
    console.log(row);
  }
}

/*
n=3, n=2, input is always 2 or greater
* * * * * *  * * * *

*         *  *     *

*         *  *     *

*         *  * * * *

*         *

* * * * * *
*/

function set5c(n) {
  let stars = [];

  while (stars.length < n * 2) {
    stars.push("*");
  }

  console.log(stars.join(" "));
  for (let i = 0; i < (n + 1) * 2 - 1; i++) {
    if (i % 2 === 0) {
      console.log("\n");
      continue;
    }

    let totalLength = 3 * n + (n - 1);
    let gap = "";
    let gapAmt = totalLength - 2;

    while (gapAmt > 0) {
      gap += " ";
      gapAmt--;
    }
    console.log("*" + gap + "*");
  }
  console.log(stars.join(" "));
}

/*
n = 3
3 3 3 3 3    2 2 2    1
3 2 2 2 3    2 1 2
3 2 1 2 3    2 2 2
3 2 2 2 3
3 3 3 3 3

n = 2
maxLength = 3
i = 0
t: 0, l: 0, b: 3, r: 3
t: 0, l: 1, b: 2, r: 2
t: 0, l: 2, b: 2, r: 1

i = 1
t: 1, l:0, b: 2, r:3
t: 1, l:1, b: 2, r:2
t: 1, l:2, b: 2, r:1 // 0

2 - min
2, 1, 1

*/

function set5d(n) {
  let maxLength = 2 * n - 1;
  let matrix = [];
  for (let i = 0; i < maxLength; i++) {
    let row = [];
    for (let j = 0; j < maxLength; j++) {
      let top = i;
      let bottom = maxLength - top;
      let left = j;
      let right = maxLength - left - 1;
      row.push(n - Math.min(top, bottom, left, right));
    }
    matrix.push(row);
  }
  matrix.forEach((subarray) => {
    console.log(subarray.join(""));
  });
}

set5d(2);
