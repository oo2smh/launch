// Create a function that takes a str argument and returns a hash in which the keys represent the lowercase letters in the string and the values represent how often the corresponding letter occurs in the string

/*
INPUT: {str} inputStr
OUTPUT: {obj} hash: keys = lowercaseLetters, values = frequency of chars in str
RULES
- input is always lowercase a-z chas

PROCESS
 CREATE a v:hash = {}
 TRAVERSE each i:char of in:str
* ADD/INCREMENT frequency of char into v:hash
 RETURN hash

-----------------------------------
*/

function countLetters(str) {
  let hash = {};
  str = str.replaceAll(/[^a-z]/g, "");

  for (let char of str) {
    hash[char] = hash[char] || 0;
    hash[char]++;
  }

  return hash;
}

const p = console.log;
const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

let expected = { w: 1, o: 2, e: 3, b: 1, g: 1, n: 1 };
p(objeq(countLetters("woebegone"), expected));

expected = { l: 1, o: 1, w: 1, e: 4, r: 2, c: 2, a: 2, s: 2, u: 1, p: 2 };
p(objeq(countLetters("lowercase/uppercase"), expected));

expected = { u: 1, o: 1, i: 1, s: 1 };
p(objeq(countLetters("W. E. B. Du Bois"), expected));

p(objeq(countLetters("x"), { x: 1 }));
p(objeq(countLetters(""), {}));
p(objeq(countLetters("!!!"), {}));
