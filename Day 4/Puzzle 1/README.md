# XMAS Word Search Challenge

## Problem Description

The little Elf needs help finding how many times the word `XMAS` appears in a word search grid.

## Unique Search Rules

### Word Appearance Characteristics
- Words can be found in multiple directions:
  - Horizontal
  - Vertical
  - Diagonal
  - Backwards
  - Overlapping with other words

### Key Challenge
- Count *all* occurrences of `XMAS`
- Not just finding a single instance

## Example Visualizations

### Simple Grid Example
```
..X...
.SAMX.
.A..A.
XMAS.S
.X....
```

### Complex Grid Example
```
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
```

### Highlighted Occurrences
```
....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
```

## Puzzle Goal
Find the total number of times `XMAS` appears in the word search grid.