/* [8min]
PROBLEM
====================
We wrote a neutralize function that removes negative words from sentences.
However, it fails to remove all of them. What does happen? How would you fix
this problem?

ANSWER
====================
Splice is a destructive method. Bad things happen when you mutate the array that
you are iterating over using forEach. The problem occurs mainly because the
forEach loop continues with incremnting its idx even after you remove elements.
For example, let's say you console.log() and move the 1st element in each
iteration. Some words get ignored. To fix this problem, I would create a shallow
copy of the words array and iterate over that. Then I can successfully mutate
the words array within forEach
[1,2,3,4,5]
Iteration 1: (loop idx = 0) Outputs 1, Removes 1 [2,3,4,5]
Iteration 2: (loop idx = 1) Outputs 3, Removes 2 [3,4,5]
Iteration 3: (loop idx = 2) outputs 5 Removes 3 [4,5]
Iteration 5: (loop idx = 3) doesn't exist in array

LS recommends using the filter method over the solution that I provided.
*/

function neutralize(sentence) {
  let words = sentence.split(" ");

  [...words].forEach((word) => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game."),
);
