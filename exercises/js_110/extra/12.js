//Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not. Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

/* [12min]
INPUT: {str}
OUTPUT: {boolean}
RULES
- pangram: sentences that use every letter at least once (a-z)
- case insensitive
- no input validation needed
---------------------
PROCESS
  FORMAT str to get rid of all non a-z chars and lowercase all letters
  CREATE a set
    IF set is 26 chars long
      YES: RETURN true
      NO: RETURN false
*/

function isPangram(str) {
  str = str.toLowerCase().replaceAll(/[^a-z]/g, "");
  let set = new Set([...str]);
  return set.size === 26;
}

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
