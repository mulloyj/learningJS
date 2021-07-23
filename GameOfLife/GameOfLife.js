// Rules of Game of Life
// 1. Any live cell with < 2 live neighbors dies by underpopulation
// 2. Any live cell with 2 or 3 live neighbors lives to next gen
// 3. Any live cell with > 3 live neighbors dies by overpopulation
// 4. Any dead cell with exactly 3 live neighbors becomes a live cell by reproduction

// Setup the Canvas
const canvas = document.getElementById("gameOfLife");
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let grid;

const rows = 40;

let boxSize = Math.floor(width / rows)

let dx = width - boxSize * rows;
let dy = height % boxSize;

let cols = Math.floor(height / boxSize);

function make2DArray() {
    let arr = new Array(cols);

    for (let r = 0; r < rows; r++) {
        arr[r] = new Array(rows);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr[i][j] = false;
        }
    }

    return arr;
}

function drawGrid() {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();

    for (let i = 0; i < rows + 1; i++) {
        ctx.moveTo(i * boxSize, 0);
        ctx.lineTo(i * boxSize, height - dy);

    }
    for (let j = 0; j < cols + 1; j++) {
        ctx.moveTo(0, j * boxSize);
        ctx.lineTo(width - dx, j * boxSize);
    }
    ctx.stroke();
}

function fill(x, y, colour) {
    x = x * boxSize;
    y = y * boxSize;
    ctx.fillStyle =
        'rgb(' + colour * 255 + ',' + colour * 255 + ',' + colour * 255 + ')';
    ctx.fillRect(x + 1, y + 1, boxSize - 2, boxSize - 2);
    ctx.fill();
}

function checkLiveNeighbors(i, j) {
    let count = 0;

    if (j > 0 && grid[i][j - 1])
        count++;
    if (j < cols - 1 && grid[i][j + 1])
        count++;
    if (i < rows - 1 && grid[i + 1][j])
        count++;
    if (i < rows - 1 && j > 0 && grid[i + 1][j - 1])
        count++;
    if (i < rows - 1 && j < cols - 1 && grid[i + 1][j + 1])
        count++;
    if (i > 0 && grid[i - 1][j])
        count++;
    if (i > 0 && j > 0 && grid[i - 1][j - 1])
        count++;
    if (i > 0 && j < cols - 1 && grid[i - 1][j + 1])
        count++;

    return count;
}

function update(grid) {
    let tempGrid = make2DArray();

    let liveNeighbors;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            liveNeighbors = checkLiveNeighbors(i, j);
            if (grid[i][j] && (liveNeighbors < 2 || liveNeighbors > 3)) {
                tempGrid[i][j] = false;
            }
            else if (!grid[i][j] && liveNeighbors == 3) {
                tempGrid[i][j] = true;
            }
            else
                tempGrid[i][j] = grid[i][j];
        }
    }

    return tempGrid;
}

function randomizeGrid() {
    let rand;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rand = Math.floor(Math.random() * 2);
            if (rand == 1)
                grid[i][j] = true;
            else
                grid[i][j] = false;
        }
    }
}

function setup() {
    drawGrid();

    grid = make2DArray();

    randomizeGrid();

    loop();
}


function loop() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!grid[i][j])
                fill(i, j, 1);
            else
                fill(i, j, 0);
        }
    }

    grid = update(grid);

    requestAnimationFrame(loop);
}

setup();
