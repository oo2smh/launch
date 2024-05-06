
// My Solution
function swap(words) {
  return words.split(' ').map(word => {
    if (word.length === 1) return word;
    if (word.length === 2) return `${word[1]}${word[0]}`;
    if (word.length >= 3) {
      return `${word[word.length - 1]}${word.slice(1,word.length - 1)}${word[0]}`;
    }
  }).join(' ');
}

console.log(
  1, swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  1, swap('Abcde'),                          // "ebcdA"
  1, swap('a'),                              // "a"
);

// Destructuring Solution
function swap1(words) {
  return words.split(' ').map(word => {
    word = word.split('');
    [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
    return word.join('');
  }).join(' ');
}


console.log(
  2, swap1('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  2, swap1('Abcde'),                          // "ebcdA"
  2, swap1('a'),                              // "a"
);