/* [6min]
One bored and hungry evening we decided to randomly generate recipes. We can't
wait to see the first suggestions, but JavaScript raises a TypeError, telling us
that dishName.join is not a function. What is wrong?

The random function returns an array. (Ln42) the random function is invoked 3x
and JS attempts to concatenate 3 arrays. Since it's the concatenation operator,
the arrays will be coerced to a string. So dishName contains a string. join is
an array instance method so calling it on a string will cause the TypeError.

To concatenate arrays, you should use the Array.prototype.concat() method
*/

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients
let ingredients = [
  "rice",
  "green bell pepper",
  "mushrooms",
  "carrot",
  "kebab",
  "spinach",
  "soy bean sprouts",
  "mashed potatoes",
  "corn",
  "cucumber",
  "peas",
];
let spices = [
  "peri peri",
  "cinnamon",
  "nutmeg",
  "cardamom",
  "ground ginger",
  "poppy seed",
  "cumin",
];
let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// Name
let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// Generate!
let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log("How about: " + dishName.join(" "));
console.log("You need: " + dish.join(", "));
