/* Write a fn to find the longest common prefix string common amongst an array of strings. If there is no common prefix, return an empty string "". All given inputs are in lowercase letters a-z */

/* [26min]
IN: {str[]} input: a-z lowercase
OUT: {str} commonSubstr
GOAL: Find the longest common prefix str common amongsts an array of strs. IF no common prefix exists => ''
RULES
- the substr has to be consecutive and has to be a prefix (beginning of str)
- return "" if no common substr exists

PROCESS
  CREATE v:currSubstring = ''
  CREATE v:baseElem = last elem of array
  REMOVE last elem of array
  TRAVERSE each i:char of v:baseELem
    IF you successfully run through entire loop
    SET v:currSubstring += i:char (concatenation)
    MOVE to next iteration
  RETURN v:currSubstring
*/

function commonPrefix(array) {
  let currSubstring = "";
  let baseElement = array.pop();

  if (array.every((word) => word[0] !== baseElement[0])) return "";
  if (array.every((word) => word === baseElement)) return baseElement;

  for (let char of baseElement) {
    currSubstring += char;
    if (array.every((word) => word.startsWith(currSubstring))) {
      continue;
    }
    currSubstring = currSubstring.slice(0, currSubstring.length - 1);
    return currSubstring;
  }
}

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(commonPrefix(["dog", "racecar", "car"]) === "");
console.log(
  commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters",
);
console.log(commonPrefix(["throne", "dungeon"]) === "");
console.log(commonPrefix(["throne", "throne"]) === "throne");
