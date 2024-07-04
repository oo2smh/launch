/* [14min]
A triangle is classified as follows:
  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid. Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
==============================
GOAL: Classify the triangle given the 3 sides
IN: {3+int}
OUT: {str} triangleType
RULES
VALID TRIANGLE
- lengths of 2 shortest sides > length of longest side
- all sides must be > 0
PROCESS
- CHECK if all 3 sides are same
    RETURN 'equilateral'
- CHECK if any arg is 0 or 2 shortest sides do not equal the 3rd side
    RETURN 'invalid'
- CHECK if 2 sides are the same and the other side is diff
    RETURN 'isosceles'
- CHECK if all 3 sides are diff
    RETURN 'scalene'


s1 > s2 && s1 > s3 Longest = s1
s2 > s1 && s2 > s3 Longest = s2
Longest s3


***********
NOTES
***********
- Math.max, Math.min would have been useful here
- Then the other side could have been determined by doing Total - longest - smallest
- Solution extracted logic to its own fn. Doing that here would have been good
- Also could have used the sort fn
*/

function triangle(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) return "equilateral";
  if (s1 === 0 || s2 === 0 || s3 === 0) return "invalid";

  // Determine longest side
  let longest = s3;
  let otherOne = s1;
  let otherTwo = s2;
  if (s1 > s2 && s1 > s3) {
    longest = s1;
    otherOne = s3;
  }
  if (s2 > s1 && s2 > s3) {
    longest = s2;
    otherTwo = s3;
  }

  if (longest >= otherOne + otherTwo) return "invalid";
  if (otherOne === otherTwo) return "isosceles";

  return "scalene";
}

console.log(
  triangle(3, 3, 3), // "equilateral"
  triangle(3, 3, 1.5), // "isosceles"
  triangle(3, 4, 5), // "scalene"
  triangle(0, 3, 3), // "invalid"
  triangle(3, 1, 1), // "invalid"
);
