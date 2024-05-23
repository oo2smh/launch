/* [04]
This is returning inside of the forEach method. This means it's returning to the
iteration of the forEach method which never gets used. The return value of true
is returned and never used. Return false occurs outside of the forEach and is
always ran when the function is invoked. Hence the function will always return
false.

Fixing this problem entails having an outer variable and reassigning that
outer variable within the forEach loop. At the end the outer variable can be
returned. Alternatively, you can use another looping mechanism such as a for
loop.
*/

const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

function isReserved(name) {
  // let isReservedWord = false;
  RESERVED_KEYWORDS.forEach((reserved) => {
    if (name === reserved) {
      // isReservedWord = true;
      return true;
    }
  });

  // return isReservedWord
  return false;
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true)
