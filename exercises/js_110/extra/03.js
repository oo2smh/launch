/* Create a function that takes a string argument and returns a copy of the
 * string with every second character in every third word converted to
 * uppercase. Other characters should remain the same.
 */

/* [30min]
INPUT: {str}
OUTPUT: {str}
RULES
- every 2nd char in every 3rd word converted to uppercase
DS:
- {arr}

0,1,2,3,4,5,6,7,8

PROCESS
  CONVERT string into an array of words
  TRANSFORM each i:word of array
    IF it's idx + 1 is divisible by 3
      YES: UPPERCASE every 2nd char and RETURN new Str
      NO: RETURN orig str
  CONVERT array back into str
  RETURN converted String
*/

function toWeirdCase(str) {
  let answer = str
    .split(" ")
    .map((word, idx) => {
      if ((idx + 1) % 3 === 0) {
        let capitalize = false;
        let newWord = "";

        for (let char of word) {
          if (capitalize) char = char.toUpperCase();
          newWord += char;
          capitalize = !capitalize;
        }
        return newWord;
      }
      return word;
    })
    .join(" ");
  console.log(answer);
  return answer;
}

const p = console.log;

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
