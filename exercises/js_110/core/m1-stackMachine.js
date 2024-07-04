/* [27min] (2nd attempt)
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

    n : Place a value, n, in the register. Do not modify the stack.
    PUSH : Push the register value onto the stack. Leave the value in the register.
    ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
    SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
    MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
    DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
    REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
    POP : Remove the topmost item from the stack and place it in the register.
    PRINT : Print the register value.

All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively. */

/*
IN: {str} a series of cmds
OUT: {output} whenever there is a "PRINT statement"
RULES
- All values are integers (matters for DIV & REMAINDER) operations
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

PROCESS
  CREATE stack = []
  CREATE reg = 0
  CREATE an array of words (chars separated by space)
  TRAVERSE array of words and for each i:word CHECK:
    IF value is "PRINT" --> PRINT value in register
    IF value is "A DIGIT" --> v:reg = value
    IF value is "PUSH" --> push register value onto the stack
    IF value is [POP, ADD, SUB, MULT DIV REMAINDER] --> POP the topmost item and place it in a location
      IF POP --> store popped value into reg
      IF value is NOT POP then
        PERFORM ARITHMETIC OPERATION and store result in the register
*/

function minilang(cmds) {
  let stack = [];
  let reg = 0;
  cmds.split(" ").forEach((word) => {
    if (word === "PRINT") console.log(reg);
    if (/\d/.test(word)) reg = Number(word);
    if (word === "PUSH") stack.push(reg);
    if (["POP", "ADD", "SUB", "MULT", "DIV", "REMAINDER"].includes(word)) {
      let tempValue = stack.pop();
      switch (word) {
        case "POP":
          return (reg = tempValue);
        case "ADD":
          return (reg += tempValue);
        case "SUB":
          return (reg -= tempValue);
        case "MULT":
          return (reg *= tempValue);
        case "DIV":
          return (reg = Math.floor(reg / tempValue));
        case "REMAINDER":
          return (reg = Math.floor(reg % tempValue));
      }
    }
  });
}

// TESTS
//minilang("PRINT"); // 0
//minilang("5");
//minilang("5 PUSH 3 MULT PRINT"); // 15
//minilang("5 PRINT PUSH 3 PRINT ADD PRINT"); // 5 3 8
//minilang("5 PUSH POP PRINT"); // 5
minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT"); // 5 10 4 7
minilang("3 PUSH PUSH 7 DIV MULT PRINT"); // 6
minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT"); // 12
minilang("-3 PUSH 5 SUB PRINT"); // 8 stack: [-3] reg: 5 - -3, 8
minilang("6 PUSH"); // (nothing is printed because the `program` argument has no `PRINT` commands)
