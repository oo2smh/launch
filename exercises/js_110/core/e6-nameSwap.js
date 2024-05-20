/*
INPUT: {string} (firstName lastName)
OUTPUT: {string} (lastName, firstName)
RULES:
- no input validation needed
*/

function swapName(fullName) {
  let [firstName, lastName] = fullName.split(" ");
  return `${lastName}, ${firstName}`;
}

function swapName1(fullName) {
  return fullName.split(" ").reverse().join(" ");
}

console.log(
  swapName("Joe Roberts"), // "Roberts, Joe"
  swapName1("Joe Roberts"),
);
