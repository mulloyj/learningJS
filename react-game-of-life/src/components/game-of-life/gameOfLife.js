import React, { Component } from 'react';
import Grid from './grid';
import Buttons from './buttons'

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

class GameOfLife extends Component {
    constructor() {
        super();

        this.speed = 100;
        this.rows = 30;
        this.cols = 50;

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
        }
    }

    selectBox = (row, col) => {
        let newGrid = arrayClone(this.state.gridFull);

        newGrid[row][col] = !newGrid[row][col];

        this.setState({
            gridFull: newGrid,
        });
    }

    seed = () => {
        let newGrid = arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.random() < 0.25) {
                    newGrid[i][j] = true;
                }
            }
        }

        this.setState({
            gridFull: newGrid,
        });
    }

    slow = () => {
        this.speed = 1000;
        this.playButton();
    }

    fast = () => {
        this.speed = 100;
        this.playButton();
    }

    clear = () => {
        this.setState({
        gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
        generation: 0
        });

        this.pauseButton();
    }

    pauseButton = () => {
        clearInterval(this.intervalId);
    }

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    }

    gridSize = (size) => {
        switch (size) {
            case "1":
                this.cols = 20;
                this.rows = 10;
                break;
            case "2":
                this.cols = 50;
                this.rows = 30;
                break;
            default:
                this.cols = 70;
                this.rows = 50;
                break;
        }
        this.clear();
    }

    countLiveNeighbors = (row, col) => {
        const coordinateArray = [
                [-1, -1], [-1, 0], [-1, 1],
                [0,  -1], [0,  1],
                [1,  -1], [1,  0], [1,  1]
            ];
        let count = 0;

        for (let [x, y] of coordinateArray) {
            if (!(row + x < 0 || row + x >= this.rows)
                && !(col + y < 0 || col + y >= this.cols)
                && this.state.gridFull[row + x][col + y])
                count++;
        }

        return count;
    }

    play = () => {
        let newGrid = arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let liveNeighbors = this.countLiveNeighbors(i, j);

                if (this.state.gridFull[i][j] && (liveNeighbors > 3 || liveNeighbors < 2)) newGrid[i][j] = false;
                if (!this.state.gridFull[i][j] && liveNeighbors === 3) newGrid[i][j] = true;
            }
        }

        this.setState({
            gridFull: newGrid,
            generation: this.state.generation+1,
        });
    }

    createPremade = (posArray) => {
        this.slow();

        let newGrid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));

        for (let [row, col] of posArray) {
            newGrid[row][col] = true;
        }

        this.setState({
            gridFull: newGrid,
            generation: 0,
        });
    }

    componentDidMount() {
        this.seed();
        this.playButton();
    }
   
    render() { 
        return (
            <div>
                <h1>The Game of Life</h1>
                <Buttons 
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}
                    createPremade={this.createPremade}
                />
                <Grid 
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}/>
                <h2>Generation: {this.state.generation}</h2>
            </div>
          );
    }
}
 
export default GameOfLife;