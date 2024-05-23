/* [06min]
- missing semicolon after ladder. This causes the JS Engine to read this as
""[ elems here].forEach(). when a [] follows a string the JS engine thinks the
user intends to use bracket notation. An array is an invalid bracket notation
hence the error is returned. */

let ladder = "";
["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
  if (ladder !== "") {
    ladder += "-";
  }

  ladder += word;
});

console.log(ladder); // expect: head-heal-teal-tell-tall-tail
