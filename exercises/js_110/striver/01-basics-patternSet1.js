/* STRIVERS PATTERNS SET #1
Based off of Striver's A-Z DSA Course. Try to print out the patterns below. The input:n refers to the # of rows.

- Nested loops
- Outer loop: v:row declared
- Inner loop: Forming the contents of v:row
- Accum variable created in outer loop

***  *    1    1     *** 123  321
***  **   12   22    **  12   21
***  ***  123  3333  *   1    1
*/

/* SET 1a:: n=3
 ***
 ***
 ***
 */

function set1a(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

/* SET 1b :: n=3
 *
 **
 ***
 */

function set1b(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

/* SET 1c :: n=3
1
12
123
*/

function set1c(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j}`;
    }
    console.log(row);
  }
}

/* SET 1d :: n=3
1
22
333
*/

function set1d(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${i}`;
    }
    console.log(row);
  }
}

/* SET 1e :: n=3
 ***
 **
 *
 */

function set1e(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

/* SET 1f :: n=3
123
12
1

*/

function set1f(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j}`;
    }
    console.log(row);
  }
}

function set1g(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
      row += `${j}`;
    }
    console.log(row);
  }
}

/* SET 1g :: n=3
321
21
1
*/

set1g(3);
