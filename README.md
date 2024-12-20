# TypeScript Closure Issue in setTimeout Loop

This repository demonstrates a common closure-related bug in TypeScript when using `setTimeout` within a loop.  The issue arises because the callback function within `setTimeout` closes over the variable `i`, which is updated after the `setTimeout` function is called.  This leads to unexpected results.

## Bug

The `printNumbers2` function intends to print numbers 1 through 10 with a one-second delay between each number. However, due to the closure issue, it prints 11 eleven times.

## Solution

The solution uses `let` in the loop to create a new variable `i` for each iteration of the loop, thereby avoiding the closure problem and ensuring that the correct value is logged. 

## How to run

1. Clone this repository
2. Navigate to the project's directory
3. Run `tsc bug.ts` and `tsc bugSolution.ts` to compile
4. Run `node bug.js` and `node bugSolution.js` to see the results