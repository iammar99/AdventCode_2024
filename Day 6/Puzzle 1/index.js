let matrix = [
    "..........#.....................#...................#.......................................................................#....#",
    ".........#................................................................#....##......#........##.............#..................",
    "............#..............#..#.................................................................#.................................",
    "..............#.....#................................................................................#...........................#",
    "............................................................................................................#.............#.......",
    ".........#..........##......................................#......................................#......#...#.......#...#.....#.",
    "..#...................................................#.................#....#........#.....#.................#...................",
    ".....#............#.#..#..................#.......................#................................#......#..............#........",
    "#.................................................................#..........#.......................................#.#..........",
    "..##...................#..................................#..#.................................#...#..#.#.#.........#...##........",
    "..#..........................#...............#...............#..........................#.................................#.......",
    "................##......#......#......................##.............#........#................................#.#..#.............",
    ".............................................................#.#.......................................................#..........",
    ".....##.............................................#.......................#...............#...............#..#...#....#.........",
    ".#.........................#..................................#..........#....#...............................................#...",
    ".......................#..#.............#......#.....#..#................................................#....#........#..........",
    "...............#.....................#................#...................................#......#........................#.......",
    ".......................#....#..............#.......#...........................#....................................#.#...........",
    "..#..................#...........#........................#............#...................#......................#.............#.",
    "..............................................#........................................#..............#...........#.........#.....",
    "............#.................#...#..........#.#.....................##.........#................##...........##............#.....",
    "..................#.......#..................................................................#....#..................#.......#....",
    "..........##......#...............................................#.................................#.......#.............#.......",
    "................................................................................#.......................................#.........",
    ".....#........................#.............##......................#.......#.......#...............................#.............",
    "..#.......................................##........#.............#...............................................#...............",
    ".............#.....#..........................................#...................#.................................#..........#..",
    ".........#............#..#....................#............##.............#..................................#....................",
    "........................................................#..........#.............................#................................",
    "......................#..............................................................................................#............",
    ".......#............#..#........................#...............#.......#.............................#......................#....",
    "...................................................................................#........................#........#..#.....#.#.",
    "..#.......#......#...................................................................................#..#.....#................#..",
    ".....#...#......................................................#...................#.#..............................#.#..........",
    "..#.#.....................#....................#...........#.................#........#..#.........#........#..................#..",
    "....#......#.......#.....................................................##...........#...........................................",
    "........................#......#......................#......#.....................................................#.......#......",
    "............................................................#..........................#...#.#..................................#.",
    ".#..........#..............................#.....#.............................................#..................................",
    "#..........................................#......#.............#...........................................#.........#...........",
    "......#...............................#..#......................#.....#.......#.....#..#......................#.......#...........",
    "........................................#..#.................................#......#.......................#.....................",
    ".#................#...........#.........#.............................................................#...........................",
    ".....#.......................#....................................................................................................",
    ".............#................#............................................#...........#......................#..................#",
    "#........................#....#.....................#................#..##.............#......................#...#...............",
    "....#....................#....#.#..................#...........................................................#......##..........",
    "#............#..........##............................................................#...........................................",
    "...........#..................................#..##................#..............................................................",
    "..........................#..............................................................................#...............#........",
    ".......................................................................#...........#...#...........#..#.....#..................#..",
    ".........................#....#.......#......................#....................................#...............................",
    "..#..................#...................................................#......................................#.................",
    "..............#....##........................................#..................#.................................................",
    "..........................#............................................#...................#............................#.........",
    "......#...............................#..........................#.............................#..................................",
    "...................................#.............................................................#..............#.................",
    ".................#...#.......#..............#.#...........................................#.......#.....#.........................",
    "........................#.......................................#..#.........................#...##...#...........................",
    "....#..#.............#........#.............#..........#......#.........................................#....#..#.................",
    ".......................................................................#...........#......#.....................#...........#.....",
    "#.#..............................#................................................................................................",
    ".#.................................................#...................#..........................................................",
    "..............................#.............#.............................#.....#............#....................................",
    ".#...............................#.......#...##.#.................#............................................#..................",
    ".............#....#.................#.........#..............#....#...............................................................",
    "......................#.#..........................................................................#................#.............",
    ".#....................#.....#................#.....................#..................#......................#....................",
    ".............#.#............#......................................#.......................#......................#...............",
    ".#..#...#...................#.....................................................................................................",
    "...........................................................................#.....................#................................",
    "...........#.............................#......#.................................................................................",
    "..............#.................................................#.##........#..........................#.........................#",
    "..................#...#...........................................................................................................",
    "........#.....#......................#..#....#...#.#......................................#.#............#........................",
    ".....#..#.........................................................#......#.....#...........#..................#...#..........#....",
    "......#.........................................#......................#........#...................................#.............",
    "..........................................#........................#........#.............#........#..#...........................",
    ".......#..............#...................#...........................................#.............#.............................",
    "..............#....#....#......#...........................................................#..........................#...........",
    "..................................................................................#.......#...................#...#....#..........",
    ".................#........................#........#...#.....................................................#........#...........",
    "...........................#......^.#..............#.#.....................#.#...........#....##.......#..........................",
    ".............#.....#.........................................................................#..........#......#..#.#.............",
    "...................................................................#.......#.......#...........................................#..",
    ".......#.........#.......................#...................................................................#..........#.....#..#",
    ".....................#...............#...#..#.....................................................#.....##.##..........#..........",
    ".......................#.......#..................................#.................#.....................................#.......",
    "................................................#........#....................#........................#..........................",
    "......#....#..#....#.......................#....#...#.............................#............................#......#...........",
    "...................................................................................................##.#.....#.................#...",
    ".................#...#....................#........................#...............##.....#...........#........#.............#....",
    ".....#............#......................................................................#................#....#..................",
    "........#.............#..................................................................#....#.......#...........................",
    ".#.......................................#.......................................#....#.............................#.............",
    "...#.............................#..................#............................#.....................#.....#...........#........",
    "....#......#.................................................................................................................#....",
    ".....................................#..........#.............#......................................#............................",
    "..#...#....#............#.....................................................#..#................................................",
    ".....#.......................................................#............#..........................#...........#................",
    "#.....................#..............#................................................#..........................#......#........#",
    "........#.........................#........................#................#.......................#.............................",
    "...........................#........#............................#.......#..............#.........................................",
    "......###.........................................................................#.........#........#................#...#.......",
    "............#........................#................#.................#........................#.............#.......#..........",
    "........#.#................................#.....................................................#................................",
    ".#...#............#........#........#..#...............................................#............................#............#",
    "...#.............#.........#....................................#..............#.......................................##.........",
    "...#...........#.....................................#.........#................#......................#............#.............",
    "..................#....................................................##.......##..........#...............................##....",
    "........................#.........#...........#............................................................###....................",
    "....................#.......#....................................................#...#..............................#............#",
    "............................#.....................................................................................................",
    "......#........#........................#..........#..........#.......#..........................#................................",
    "....................................#..............#...#.#......................................................................#.",
    ".....#.....#...#..............................................###......#..............#.........##......#...............#.........",
    "........................#.........................#...............#...............#.#........#.....................#.#............",
    "...............#..............#........#........................................#..........#........#......#......................",
    ".....................#..........................#...............................#........#.......#.....#...................#......",
    ".........#...........................................#.............................#....#.......#......#..#....#..................",
    ".........#...#........#....................#.......#..#...#..............................................................#........",
    "..................#......................................#........................................................................",
    "........#.....................................................#..#...........#........#......................#...#....#.....#.....",
    "...........................#........#....#.........................................................#.............#................",
    ".....#.#.........#................................................................................#...............................",
    "...#............................................#......................#.......#.#...............#............#...................",
    ".........#................................#.....#...........#.#....................#...#.....................................#.#..",
    "..........#.#....#......#.........#....#.....#........#...........................#...............................................",
    "............#...............#............#..........#.............................#...............................................",
    "#.#............#.....................##................................................#....#.................##.................."
]

for(let i = 0 ; i < matrix.length ; i++){
    matrix[i] = matrix[i].split("")
}


const program = (grid) => {
    const n = grid.length;
    const m = grid[0].length;
    
    let found = false;
    let i, j;
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if (grid[i][j] === "^") {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    
    let dir = 0;
    const dd = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const seen = new Set();
    while (true) {
        seen.add(`${i},${j}`);
    
        const next_i = i + dd[dir][0];
        const next_j = j + dd[dir][1];
    
        if (!(0 <= next_i && next_i < n && 0 <= next_j && next_j < m)) {
            break;
        }
    
        if (grid[next_i][next_j] === "#") {
            dir = (dir + 1) % 4;
        } else {
            i = next_i;
            j = next_j;
        }
    }
    
return seen.size    
}

console.time("Execution Time")
console.log(program(matrix))
console.timeEnd("Execution Time")