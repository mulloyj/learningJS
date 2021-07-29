import React, { Component } from 'react';

import Box from './box';

class Grid extends Component {
    render() { 
        const width = this.props.cols * 14;

        let rowsArr = [];
        
        let boxClass = "";
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "ant-box on" : "ant-box off";

                for (let ant of this.props.ants) {
                    if (ant.x === i && ant.y === j) boxClass = "ant-box ant";
                }

                rowsArr.push(
                    <Box
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                );
            }
        }

        return ( 
            <div className="ant-grid" style={{width: width}}>
                {rowsArr}
            </div>
        );
    }
}

export default Grid;