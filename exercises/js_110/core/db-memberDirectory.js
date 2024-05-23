/* []
INPUT VALIDATION
- names to be formatted:
  - only alphabetic chars in names [firstName lastName]

ANSWER
===========================
The regex expression that the test method is
called on within the isValidName fn is problematic. Specifically, the \w will
match [0-9,a-z,_] chars. It seems however, that the user meant to capture only
[a-z] characters for names. The regex expression /[A-Z][a-z]+ [A-Z][a-z]+ will
ensure that the user inputs only alphabetical letters with the first char of the
1st/last names capitalized. Alternatively, you can also accept any a-z input and
capitalize it.
*/
let memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

function isValidName(name) {
  // return (/^\w+ \w+$/).test(name);
  return /[A-Z][a-z]+ [A-Z][a-z]+/.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223");
addMember("Rachel Garcia", "232-1191");
addMember("Earl 5mith", "331-9191");
addMember("*DSF EEE", "323-2823");
addMember("DSF EEE", "323-2823");
addMember("Name   LastName");

console.log(memberDirectory);
