import React, { Component } from 'react';
import Toolbar from './toolbar';
import Premades from './premades';

class Buttons extends Component {
    render() { 
        return (
            <div className="center">
                <Toolbar 
                playButton={this.props.playButton}
                pauseButton={this.props.pauseButton}
                slow={this.props.slow}
                fast={this.props.fast}
                clear={this.props.clear}
                seed={this.props.seed}
                gridSize={this.props.gridSize}
                />
                <Premades 
                createPremade={this.props.createPremade}
                />
            </div>
        );
    }
}
 
export default Buttons;