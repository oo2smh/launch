/* Given an array of strings made only from lowercase letters, return an array
 * of all characters that show up in all strings within the given array
 * (including duplicates). For example, if a character occurs 3 times in all
 * strings, but not 4 times, you need to include that character 3 times in the
 * final answer.
 */

/* [8min]
IN: {str[]} input: only lowercase letters
OUT: {char[]} output: that show up in all strs within in:array
RULES
- EX: char occurs 3 times in all strings, not 4 times, include the char 3 times in the final answer
  - You can have the same char multiple times in out:array (ex 3 has 2 'l' chars)
- order of elems in out:arr seems to matter

PROCESS
  CREATE v:baseWord = 1st word of in:array
  CREATE v:output = []
  TRAVERSE each i:char of v:baseWord
    CHECK if i:char is included in each i:word of in:arr
      YES: APPEND i:char into v:output
  RETURN v:output
*/

function commonChar(arr) {
  let baseWord = arr.shift();
  let output = [];

  for (let char of baseWord) {
    if (arr.every((word) => word.includes(char))) output.push(char);
  }

  return output;
}

console.log(commonChar(["a", "b"])); // []
console.log(commonChar(["ab", "bc"])); // ['b']
console.log(commonChar(["bella", "label", "roller"])); // ['e', 'l', 'l']
console.log(commonChar(["cool", "lock", "cook"])); // ['c', 'o']
console.log(commonChar(["hello", "goodbye", "booya", "random"])); // ['o']
console.log(
  commonChar(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"]),
); // []
