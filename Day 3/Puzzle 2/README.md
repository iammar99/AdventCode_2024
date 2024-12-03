# Corrupted Memory Multiplication with Conditional Logic

## Problem Description

The corrupted memory now includes two additional instructions that control the enabling and disabling of multiplication:

### New Instructions
- `do()`: Enables future `mul` instructions
- `don't()`: Disables future `mul` instructions

### Key Rules
- Only the most recent `do()` or `don't()` instruction applies
- `mul` instructions are enabled by default at the start of the program
- Conditional instructions affect subsequent `mul` instructions until another conditional instruction is encountered

## Example Walkthrough

### Input String
```
xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)do()?mul(8,5))
```

### Instruction Processing
1. `mul(2,4)` → Enabled, result = 8
2. `mul(3,7)` → Enabled, result = 21
3. `don't()` → Disables subsequent `mul` instructions
4. `mul(5,5)` → Disabled, ignored
5. `mul(32,64)` → Disabled, ignored
6. `mul(11,8)` → Disabled, ignored
7. `do()` → Re-enables `mul` instructions
8. `mul(8,5)` → Enabled, result = 40

### Total Sum
8 + 21 + 40 = 48
