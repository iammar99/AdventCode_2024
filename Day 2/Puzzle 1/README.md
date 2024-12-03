# Puzzle 1
# Reactor Safety Report Analysis

## Problem Description

The Red-Nosed reactor safety systems have strict requirements for determining the safety of reports based on their levels.

### Safety Criteria

A report is considered safe if it meets **both** of the following conditions:
1. The levels are either **completely increasing** or **completely decreasing**
2. Adjacent levels must differ by **at least one** and **at most three**

### Example Analysis

Let's break down the safety of each report in the given example:

| Report       | Safety Status | Reason |
|--------------|--------------|--------|
| `7 6 4 2 1`  | Safe         | Consistently decreasing, each step is 1 or 2 |
| `1 2 7 8 9`  | Unsafe       | `2 7` increases by 5, violating the step size rule |
| `9 7 6 2 1`  | Unsafe       | `6 2` decreases by 4, violating the step size rule |
| `1 3 2 4 5`  | Unsafe       | Mixed increasing and decreasing |
| `8 6 4 4 1`  | Unsafe       | `4 4` shows no change |
| `1 3 6 7 9`  | Safe         | Consistently increasing, each step is 1, 2, or 3 |


# Example usage
example_reports = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
]

