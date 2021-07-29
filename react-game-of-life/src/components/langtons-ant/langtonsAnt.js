import React, { Component } from 'react';

import Grid from './grid';

class LangtonsAnt extends Component {
    constructor() {
        super();

        this.speed = 100;
        this.rows = 90;
        this.cols = 150;

        this.state = {
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
        }
    }

    selectBox = (row, col) => {
        console.log(row, col);
    }

    render() { 
        return (
            <div>
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}/>
            </div>
        );
    }
}
 
export default LangtonsAnt;