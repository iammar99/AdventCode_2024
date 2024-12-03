# Corrupted Memory Multiplication Solver

## Problem Overview

In this challenge, we need to parse a corrupted memory string and extract valid multiplication instructions.

## Validation Rules

### Valid Multiplication Instructions
- Must start with `mul(`
- Contain two numbers separated by a comma
- Numbers can be 1-3 digits long
- Closed with a `)`
- Ignore any invalid or corrupted instructions

### Invalid Instruction Examples
- `mul(4*`
- `mul(6,9!`
- `?(12,34)`
- `mul ( 2 , 4 )`

## Input Processing Strategy

1. Scan the entire memory string
2. Identify valid `mul(X,Y)` patterns
3. Extract and multiply the numbers
4. Sum all valid multiplication results

## Example Breakdown

### Input String
```
xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
```

### Valid Instructions
- `mul(2,4)` → 2 * 4 = 8
- `mul(3,7)` → 3 * 7 = 21
- `mul(32,64)` → 32 * 64 = 2048
- `mul(11,8)` → 11 * 8 = 88
- `mul(8,5)` → 8 * 5 = 40

### Total Sum
8 + 21 + 2048 + 88 + 40 = 161
