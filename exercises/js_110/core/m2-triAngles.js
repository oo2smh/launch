/* [14min]
A triangle is classified as follows:
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
====================
GOAL: Return a str classifying the triangle based on its angles
IN: {3 ints} angles a1,a2,a3
OUT: {str} triangleClassification
RULES
- valid triangle has a total angle sum of 180
- valid triangle has an angle > 0
A triangle is classified as follows:
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

PROCESS
  DETERMINE if triangle is invalid
  DETERMINE if triangle is acute
  DETERMINE if triangle is obtuse
  RETURN right
*/

function triangle(a1, a2, a3) {
  let arrOfAngles = [a1, a2, a3];
  if (a1 + a2 + a3 !== 180 || arrOfAngles.some((num) => num <= 0))
    return "invalid";
  if (arrOfAngles.every((num) => num < 90)) return "acute";
  if (arrOfAngles.filter((num) => num > 90).length === 1) return "obtuse";
  if (arrOfAngles.filter((num) => num === 90).length === 1) return "right;";
}

console.log(
  triangle(60, 70, 50), // "acute"
  triangle(30, 90, 60), // "right"
  triangle(120, 50, 10), // "obtuse"
  triangle(0, 90, 90), // "invalid"
  triangle(50, 50, 50), // "invalid"
);
