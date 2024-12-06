# Day 22: Guard Patrol in the Lab

## Problem Description

In this scenario, you're tracking a guard's movement through a laboratory in the year 1518. The guard follows a strict patrol protocol:

### Patrol Rules
- If something is directly in front, turn right 90 degrees
- If the path is clear, move forward

### Map Notation
- `.`: Empty space
- `#`: Obstruction (crates, desks, reactors)
- `^`: Guard facing up
- `v`, `>`, `<`: Guard facing different directions

### Example Map
```
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
```

### Patrol Progression
1. Guard starts facing up
2. Moves until hitting an obstacle
3. Turns right
4. Continues moving
5. Repeats until leaving the mapped area

### Goal
Determine the number of distinct positions the guard visits before leaving the mapped area.

### Example Walkthrough
- Initial state: Guard at `^`
- Moves up multiple times
- Turns right when blocked
- Continues moving in new direction
- Eventually leaves the mapped area

### Visualization of Visited Positions
```
....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..
```

### Task
*Predict how many distinct positions the guard will visit before leaving the mapped area.*

Would you like help solving this puzzle?