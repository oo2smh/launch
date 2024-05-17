# LEGEND
<!--==================-->
## FILE NAMES
```yaml
E#: Easy(#)
LP: List Processing
SP: String Processing
M#: Medium(#)
A1: Advanced 1
DB: Debugging
IP: Interpretative Problem-Solving
FileName + Set: Multiproblem file
```

## PROBLEM DESCRIPTION
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
( ) e4-search101: [loop-iter, mid-array, readline]
( ) e4-palindromeSet(3): [mid-array, regex, string-validation]
( ) e4-runningTotal: [mid-accum, loop-tran]
(*) e4-letterCounterSet(2): [mid-dict, loop-tran]
(*) e4-letterSwap: [loop-tran, slice, destructuring]
(*) e4-conversionSet(4): [mid-dict, mid-accumulator, math-logic, mid-boolean]

(*) e5-cuteAngles:
( ) e5-comboSet(2):
( ) e5-halvsies:
( ) e5-dupes:
( ) e5-multiplySet(2):
( ) e5-digitsList:
( ) e5-howMany:
( ) e5-arrayAverage:
( ) e5-midnightSet(2):

( ) e6-doubleCharSet(2):
( ) e6-reverseSet(4):
( ) e6-countUp:
( ) e6-nameSwap:
( ) e6-sequenceCount:
( ) e6-matchingParenthesis:

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
( ) a1-egyptianFranctions:
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

