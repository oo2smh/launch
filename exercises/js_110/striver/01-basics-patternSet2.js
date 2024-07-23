/* SET #2
Solve these without using the String instance method of repeat. Only use loops
pad = (MaxLength - # of marks) / 2

n = 3 for these examples
  *     *****
 ***     ***
*****     *
  *     *
 ***    **
*****   ***
*****   **
 ***    *
  *
*/
function set2a(n) {
  for (let i = 0; i < n; i++) {
    let row = "*";

    for (let j = 1; j <= i; j++) {
      row += "**";
    }

    let maxLength = n + (n - 1);
    let numOfMarks = row.length;
    let padAmt = (maxLength - numOfMarks) / 2;
    let pad = "";

    for (let j = 1; j <= padAmt; j++) {
      pad += " ";
    }

    console.log(pad + row);
  }
}

function set2b(n) {
  for (let i = n; i > 0; i--) {
    let row = "*";

    for (let j = i; j > 1; j--) {
      row += "**";
    }

    let maxLength = n + (n - 1);
    let numOfMarks = row.length;
    let padAmt = (maxLength - numOfMarks) / 2;
    let pad = "";

    for (let j = 1; j <= padAmt; j++) {
      pad += " ";
    }

    console.log(pad + row);
  }
}

function set2c(n) {
  set2_1(n);
  set2_2(n);
}

function set2d(n) {
  for (let i = 0; i < n * 2; i++) {
    let row = "";

    if (i <= n) {
      for (let j = 0; j < i; j++) {
        row += "*";
      }
    } else {
      for (let j = i; j < n * 2; j++) {
        row += "*";
      }
    }

    console.log(row);
  }
}
