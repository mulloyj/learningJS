// Ant turns left at a white pixel
// Ant turns right at a black pixel

let step = 1;

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

class Cell {
    alive = false;

    setAlive(alive) {
        this.alive = alive;
    }

    get isAlive() {
        return this.alive;
    }
}

class Ant {
    x = 0;
    y = 0;

    direction = UP;

    moveForward(width, height) {
        switch(this.direction) {
            case UP:
                this.x = ((this.x - 1) + width) % width;
                break;
            case RIGHT:
                this.y = ((this.y + 1) + height) % height;
                break;
            case DOWN:
                this.x = ((this.x + 1) + width) % width;
                break;
            case LEFT:
                this.y = ((this.y - 1) + height) % height;
                break;
        }
    }

    rotateRight() {
        this.direction = ((this.direction + 1) + (LEFT + 1)) % (LEFT + 1);
    }

    rotateLeft() {
        this.direction = ((this.direction - 1) + (LEFT + 1)) % (LEFT + 1);
    }
}

class Grid {
    cells = [];
    ant;
    height = 0;
    width = 0;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init() {
        for (let i = 0; i < this.width; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.height; j++) {
                const cell = new Cell;
                this.cells[i][j] = cell;
            }
        }

        this.ant = new Ant();
        this.ant.x = this.width / 2;
        this.ant.y = this.height / 2;
    }

    move() {
        for (let i = 0; i < step; i++) {
            let current = this.cells[this.ant.x][this.ant.y];
            if (current.isAlive) {
                current.alive = false;
                ctx.fillStyle = 'white';
                ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
                this.ant.rotateRight();
                this.ant.moveForward(this.width, this.height)
            } else {
                current.alive = true;
                ctx.fillStyle = 'black';
                ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
                this.ant.rotateLeft();
                this.ant.moveForward(this.width, this.height);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
        }
    }
}

window.onload = function() {
    canvas = document.getElementById('grid');
    ctx = canvas.getContext('2d');

    const grid = new Grid(canvas.width, canvas.height);

    grid.init();
    setInterval(moveAnt, 1000/13, grid);
}

function moveAnt(grid) {
    grid.move();
    ctx.stroke();
}
