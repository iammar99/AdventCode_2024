const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const { performance } = require('perf_hooks');

async function main() {
    const data = await readFile("./input.txt", 'utf8');
    const grid = data.trim().split("\n").map(line => line.split(""));

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

    const ii = i;
    const jj = j;

    const dd = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    let dir = 0;
    const og_seen = new Set();
    while (true) {
        og_seen.add(`${i},${j}`);

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

    function will_loop(oi, oj) {
        if (grid[oi][oj] === "#") {
            return false;
        }

        grid[oi][oj] = "#";
        let i = ii;
        let j = jj;

        let dir = 0;
        const seen = new Set();
        while (true) {
            if (seen.has(`${i},${j},${dir}`)) {
                grid[oi][oj] = ".";
                return true;
            }
            seen.add(`${i},${j},${dir}`);

            const next_i = i + dd[dir][0];
            const next_j = j + dd[dir][1];

            if (!(0 <= next_i && next_i < n && 0 <= next_j && next_j < m)) {
                grid[oi][oj] = ".";
                return false;
            }

            if (grid[next_i][next_j] === "#") {
                dir = (dir + 1) % 4;
            } else {
                i = next_i;
                j = next_j;
            }
        }
    }

    let ans = 0;
    for (const pos of og_seen) {
        const [oi, oj] = pos.split(',').map(Number);
        const loop = will_loop(oi, oj);
        ans += loop ? 1 : 0;
    }

    console.log(ans);
}

main();

