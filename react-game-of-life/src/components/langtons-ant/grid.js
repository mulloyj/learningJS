import React, { Component } from 'react';

import Box from './box';

class Grid extends Component {
    render() { 
        const width = this.props.cols * 4;

        let rowsArr = [];

        let boxClass = "";
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "ant-box on" : "ant-box off";
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