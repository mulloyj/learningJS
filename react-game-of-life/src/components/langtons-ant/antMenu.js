import React, { Component } from 'react';

class AntMenu extends Component {
    render() { 
        return (
            <div className="center">
                <button className="btn btn-primary" onClick={this.props.playButton}>Play</button>
                <button className="btn btn-secondary" onClick={this.props.pauseButton}>Pause</button>
                <button className="btn btn-info" onClick={this.props.addAnt}>Add Ant</button>
            </div>
        );
    }
}
 
export default AntMenu;