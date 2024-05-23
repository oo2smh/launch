/* [3min]
We are assigned the task to implement a range function that returns an array of
integers beginning and ending with specified start and end numbers. When only a
single argument is provided, that argument should be used as the ending number
and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying
Maximum call stack size exceeded? Can you fix the code, so it runs without error
and satisfies the requirements?

ANSWER
=================
There are 2 range functions declared. Therefore, JS will use the 2nd function.
This is a recursive function with no exit clause. As a result, the function that
calls itself will do so forever. To fix the code, you should change the function
names to range and range1
- Term: 'function overloading'

FURTHER EXPLORATION
===================
Change the parameter order to (end, start = 0) that way if only one argument is
passed, it will be used for the end value. Additionally the start parameter will
default to  be used for the end value. Additionally the start parameter will
default to 0. The given solution is problematic. First, the condition of the
clause is not very precise. If you pass in 0 as an argument, the if clause will
still run. Secondly, on line 4, end will always be assigned to 0. Hence the
range will always be [0,0]. To fix this issue, you should flip the two lines
*/

// FURTHER EXPLORATION
function rangeFurther(start, end) {
  if (!end) {
    // change condition to (end === undefined)
    start = 0; // flip next line with this line
    end = start; // flip previous line with this line
  }
  // ...
}

function range1(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  jk;
  return range1(0, end); // range(0, 10)
}

// Examples
console.log(range(10, 20));
console.log(range(5));
