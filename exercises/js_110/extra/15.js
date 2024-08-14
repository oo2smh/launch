/*
Create a function that takes a string argument that consists entirely of
numeric digits and computes the greatest product of four consecutive digits in
the string. The argument will always have more than 4 digits.
*/

/* [12min]
INPUT: {str} inputStr: (0-9)
OUTPUT: {+int} product
RULES
- arg will always have more than 4 digits
- computes the greatest product of 4 consecutive digits
-----------------
PROCESS
  CREATE v:allProducts = []
  GATHER all possible 4-consecutive digit products
  RETURN the max of the products
(slice, push, Math.max())
*/

function greatestProduct(strDigits) {
  let allProducts = [];
  let array = [...strDigits];

  for (let idx = 0; idx < array.length; idx++) {
    let slice = array.slice(idx, idx + 4);
    if (slice.length === 4) {
      let product = slice.reduce((total, currValue) => total * currValue, 1);
      allProducts.push(product);
    }
  }

  return Math.max(...allProducts);
}

const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
