// Rules of Game of Life
// 1. Any live cell with < 2 live neighbors dies by underpopulation
// 2. Any live cell with 2 or 3 live neighbors lives to next gen
// 3. Any live cell with > 3 live neighbors dies by overpopulation
// 4. Any dead cell with exactly 3 live neighbors becomes a live cell by reproduction

class Cell {
    alive = false;

    setAlive(alive) {
        this.alive = alive;
    }

    get isAlive() {
        return this.alive;
    }
}

class Grid {
    cells = []
    height;
    width;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init() {
        for(let i = 0; i < this.width; i++) {
            this.cells[i] = [];
            for(let j = 0; j < this.height; j++) {
                const cell = new Cell();
                this.cells[i][j] = cell;
                this.cells[i][j].alive = Math.random() < 0.5;
                console.log(this.cells[i][j].alive)
            }
        }
    }

    update() {
        let temp = new Grid(this.width, this.height);
        temp.init();

        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const count = this.countAliveNeighbors();

                if (this.cells[i][j].isAlive && (count < 2 || count > 3)) {
                    temp.cells[i][j].alive = false;
                    ctx.fillStyle = 'white';
                    ctx.fillRect(i, j, 1, 1);
                }
                else if (this.cells[i][j].isAlive) {
                    temp.cells[i][j].alive = true;
                    ctx.fillStyle = 'black';
                    ctx.fillRect(i, j, 1, 1);
                }
                else if (!this.cells[i][j].isAlive && count === 3) {
                    temp.cells[i][j].alive = true;
                    ctx.fillStyle = 'black';
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }

    }

    countAliveNeighbors(x, y) {
        const coordinateArray =
            [   [-1, -1], [-1, 0], [-1, 1],
                [0,  -1], [0,  1],
                [1,  -1], [1,  0], [1,  1]
            ];
        let count = 0;

        for (let coordinate in coordinateArray) {
            if((x + coordinate[0] < 0 || x + coordinate[0] >= this.width)
             && (y + coordinate[1] < 0 || y + coordinate[1] >= this.height)
             && this.cells[x + coordinate[0]][y + coordinate[1]].isAlive)
                count++;
        }

        return count;
    }
}

window.onload = function() {
    canvas = document.getElementById('gameOfLife');
    ctx = canvas.getContext('2d');

    const grid = new Grid(canvas.width, canvas.height);

    grid.init();
    setInterval(updateGrid, 1000/13, grid);
}

function updateGrid(grid) {
    grid.update();
    ctx.stroke();
}