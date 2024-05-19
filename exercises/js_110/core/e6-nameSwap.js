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

console.log(
  swapName("Joe Roberts"), // "Roberts, Joe"
);
