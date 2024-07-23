/*
A    ABC CBA  A       A      C
AB   AB  BA   BB     ABA     BC
ABC  A   A    CCC   ABCBA    ABC
*/

function getCharCode(num) {
  return String.fromCharCode(num + 97).toUpperCase();
}

function set3a(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += getCharCode(j);
    }
    console.log(row);
  }
}

function set3b(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += getCharCode(j);
    }
    console.log(row);
  }
}

function set3c(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
      row += getCharCode(j - 1);
    }
    console.log(row);
  }
}

function set3d(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += getCharCode(i);
    }
    console.log(row);
  }
}

function set3e(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let pad = "";
    let maxLength = n + n - 1;

    for (let j = 0; j < maxLength; j++) {
      if (j < n) row += getCharCode(j);
      else row += getCharCode(maxLength - j - 1);
    }

    console.log(row);
  }
}

function set3f(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let char = n - i - 1;
    for (let j = 0; j <= i; j++) {
      row += getCharCode(char);
      char++;
    }
    console.log(row);
  }
}

// C,
// BC,
// ABC

set3f(3);
