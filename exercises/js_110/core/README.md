# LEGEND
<!--==================-->
## FILE NAMES
```yaml
E(#): Easy(#)
M(#): Medium(#)
A1: Advanced 1
LP: List Processing
SP: String Processing
DB: Debugging
IP: Interpretative Problem-Solving
FileName + Set: Multiproblem file
```

## PROBLEM DESCRIPTION
Below is a problems tracker. After each question, the first () groups the
general pattern(s) used to solve the problem. The second parenthesis groups new,
useful syntax or tools that can be used to solve the problem.

```yaml
# USER ACTION
(*): revisit
(?): question

# PROBLEM-SOLVING TOOLS
mid: midpoint/intermediate data
accum: accumulator variable

## Loops
iter: iteration
tran: transformation
filt: filter
```

# PROBLEMS
<!--===================-->
```yaml
( ) e4-search101: (loop/iter, mid/array), (readline.questionInt())
( ) e4-palindromeSet(3): (mid/array, string-validation), (regex)
( ) e4-runningTotal: (mid/accum, loop/tran)
(*) e4-letterCounterSet(2): (mid/dict/tracker, loop-tran)
(*) e4-letterSwap: (loop/tran), (slice, destructuring-swap  )
(*) e4-conversionSet(4): (mid/dict/reference, mid/accum, math-logic, mid/boolean),
(Math.trunc(num), Math.floor(num), Math.sign(num))

(*) e5-cuteAngles: (math-logic), (Math.trunc(num), Math.sign(num))
( ) e5-comboSet(2): (mid/array), (..args, spread, set)
( ) e5-halvsies: (mid/arr), (slice)
( ) e5-dupes: (mid/dict/tracker), (sort)
( ) e5-multiplySet(2): (reduce, map)
( ) e5-digitsList: (typeConversions), (map)
( ) e5-howMany: (mid/dict/tracker), (for..of, for..in)
( ) e5-arrayAverage: (mathLogic), (Math.trunc())
( ) e5-midnightSet(2): (mathLogic), (destructuring, Date, modulus,
unitConversions)

( ) e6-doubleCharSet(2): (regex, stringManipulation)
( ) e6-reverseSet(4): (arrayManipulation)
( ) e6-countUp: (arrayManipulation), (Array())
( ) e6-nameSwap: (swapping)
( ) e6-sequenceCount: (mid/arr), (Array())
( ) e6-matchingParenthesis: (mid/toggle)

( ) lp-sumsSet(2):
( ) lp-alphabeticNumbers:
( ) lp-multiplyPairs:
( ) lp-substringSet(3):
( ) lp-groceryList:
( ) lp-inventorySet(2):

( ) sp-uppercaseCheck:
( ) sp-deleteVowels:
( ) sp-lettercaseCounter:
( ) sp-capitalizeWords:
( ) sp-swapCase:
( ) sp-staggeredCaseSet(2):
( ) sp-howLong:
( ) sp-searchWordSet(2):

( ) m1-rotationSet(3):
( ) m1-stackMachine:
( ) m1-wordToDigit:
( ) m1-fibonacciSet(4):

( ) m2-lettercasePercentage:
( ) m2-triangleSides:
( ) m2-triAngles:
( ) m2-unluckyDays:
( ) m2-nextFeaturedNum:
( ) m2-squareSum:
( ) m2-bubbleSort:
( ) m2-longestSentence:
( ) m2-isItPrime:

( ) db-wordLadder:
( ) db-reservedKeywords:
( ) db-recipeGenerator:
( ) db-taskList:
( ) db-range:
( ) db-memberDirectory:
( ) db-glory:
( ) db-gradeAnalysis:
( ) db-weekdayClasses:
( ) db-neutralizer:

( ) ip-1000Lights:
( ) ip-diamonds:
( ) ip-myABCs:
( ) ip-seeingStars:

( ) a1-madlibsRevisited:
( ) a1-transposeSimpleMatrix:
( ) a1-transposeComplexMatrix:
( ) a1-rotateMatrix:
( ) a1-mergeSortList:
( ) a1-mergeSort:
( ) a1-binarySearch:
( ) a1-egyptianFractions:
```

# RANDOM NOTES
<!--==================-->
- Object: to keep a running tracker
- Object: to keep a static referencer
- Types of Intermediate-Variables
  - Accumulator `sum, result = '', result = []`

# ELEGANT SYNTAX
<!--==================-->
```js [Destructuring Swap]
let a = 1, let b = 2;
[a,b] = [b,a]  // b === 1, a === 2
```

