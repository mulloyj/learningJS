import React, { Component } from 'react';

import Grid from './grid';
import AntMenu from './antMenu';

import '../../css/ant.css';

const lodash = require('lodash');

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

function arrayClone(arr) {
    return lodash.cloneDeep(arr);
}

class Ant {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.direction = UP;
    }
}

class LangtonsAnt extends Component {
    constructor() {
        super();

        this.speed = 50;
        this.rows = 50;
        this.cols = 70;

        this.state = {
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            ants: [new Ant(25, 35)],
        }
    }

    moveForward(ant) {
        switch(ant.direction) {
            case UP:
                ant.x = ((ant.x - 1) + this.rows) % this.rows;
                break;
            case RIGHT:
                ant.y = ((ant.y + 1) + this.cols) % this.cols;
                break;
            case DOWN:
                ant.x = ((ant.x + 1) + this.rows) % this.rows;
                break;
            case LEFT:
                ant.y = ((ant.y - 1) + this.cols) % this.cols;
                break;
        }
    }

    rotateRight(ant) {
        ant.direction = ((ant.direction + 1) + (LEFT + 1)) % (LEFT + 1);
    }

    rotateLeft(ant) {
        ant.direction = ((ant.direction - 1) + (LEFT + 1)) % (LEFT + 1);
    }

    play = () => {
        let newGrid = arrayClone(this.state.gridFull);
        let newAnts = arrayClone(this.state.ants);
        let current;

        for (let ant of newAnts) {
            current = newGrid[ant.x][ant.y];
            if (current) this.rotateRight(ant);
            else this.rotateLeft(ant);
            newGrid[ant.x][ant.y] = !newGrid[ant.x][ant.y];
            this.moveForward(ant);
        }

        this.setState({
            gridFull: newGrid,
            ants: newAnts,
        });
    }

    addAnt = () => {
        let newAnts = arrayClone(this.state.ants);

        let newAnt = new Ant(25, 35); 
        
        newAnts.push(newAnt);

        this.setState({
            ants: newAnts,
        });
    }

    selectBox = (row, col) => {
        let newGrid = arrayClone(this.state.gridFull);

        newGrid[row][col] = !newGrid[row][col];

        this.setState({
            gridFull: newGrid
        });
    }

    pauseButton = () => {
        clearInterval(this.intervalId);
    }

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    }

    clear = () => {
        let newGrid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        let newAnts = [new Ant(25, 35)];

        this.setState({
            gridFull: newGrid,
            ants: newAnts,
        });

        this.pauseButton();
    }

    componentDidMount() {
        document.title = "Langton's Ant";
        this.playButton();
    }

    render() { 
        return (
            <div className = "ant">
                <h1>Langton's Ant</h1>
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                    ants={this.state.ants}/>
                <AntMenu
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    addAnt={this.addAnt}
                    clear={this.clear}
                />
            </div>
        );
    }
}
 
export default LangtonsAnt;