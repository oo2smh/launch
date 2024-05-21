/* [15min] -- got stuck on regex and a bug
INPUT: {array:str}
OUTPUT: {array:str} All vowels (aeiou) removed
RULES
- Ignore case. Remove both Capital and lowercase vowels
DS: skip
PROCESS
- TRAVERSE each i-word of array
  - SET newWord = '';
  - TRAVERSE each i-char of word
    - CHECK if i-char is not a vowel
      -APPEND to newWord
    - ADD newWord back to array
- RETURN newArray
*/

/* NOTES
- Using methods can sometimes lead to a more elegant solution
- It would have been better if I used the string instance method of replace rather
than having a nested loop
*/

function removeVowels(arr) {
  return arr.map((word) => {
    let newWord = "";
    for (let char of word) {
      if (/[^aeiou]/i.test(char)) newWord += char;
    }
    return newWord;
  });
}

// LS Solution
let removeVowelsLS(arr) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// TESTS
// ======================
function testRemoveVowels() {
  console.log(
    removeVowels(["abcdefghijklmnopqrstuvwxyz"]), // ["bcdfghjklmnpqrstvwxyz"]
    removeVowels(["green", "YELLOW", "black", "white"]), // ["grn", "YLLW", "blck", "wht"]
    removeVowels(["ABC", "AEIOU", "XYZ"]), // ["BC", "", "XYZ"]
  );
}

testRemoveVowels();
