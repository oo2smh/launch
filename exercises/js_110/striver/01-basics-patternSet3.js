/*
n=4
1        1      1  1
0 1      12    21  2 3
1 0 1    123  321  4 5 6
0 1 0 1  12344321  7 8 9 10
*/

function set3a(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let isEven = i % 2 === 0;
    for (let j = 0; j <= i; j++) {
      if (isEven) row += "1 ";
      else row += "0 ";
      isEven = !isEven;
    }
    console.log(row);
  }
}

function set3b(n) {
  for (let i = 1; i <= n; i++) {
    let ledge = "";
    let redge = "";
    let gap = "";

    for (let j = 1; j <= i; j++) {
      ledge += `${j}`;
    }

    for (let idx = ledge.length - 1; idx >= 0; idx--) {
      redge += ledge[idx];
    }

    let marksLength = ledge.length * 2;
    let totalLength = n * 2;
    let gapLength = totalLength - marksLength;

    for (let j = 0; j < gapLength; j++) {
      gap += " ";
    }

    let row = ledge + gap + redge;
    console.log(row);
  }
}

function set3c(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${count} `;
      count++;
    }
    console.log(row);
  }
}
