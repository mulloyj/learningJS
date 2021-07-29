import React, { Component } from 'react';
import { ButtonToolbar, Dropdown } from 'react-bootstrap';

class Toolbar extends Component {
    handleSelect = (e) => {
        this.props.gridSize(e);
    }

    render() { 
        return (  
            <ButtonToolbar>
                <button className="btn btn-primary" onClick={this.props.playButton}>
                    Play
                </button>
                <button className="btn btn-secondary" onClick={this.props.pauseButton}>
                    Pause
                </button>
                <button className="btn btn-danger" onClick={this.props.slow}>
                    Slow
                </button>
                <button className="btn btn-warning" onClick={this.props.fast}>
                    Fast
                </button>
                <button className="btn btn-info" onClick={this.props.clear}>
                    Clear
                </button>
                <button className="btn btn-info" onClick={this.props.seed}>
                    Random Seed
                </button>
                <Dropdown onSelect={this.handleSelect}>
                    <Dropdown.Toggle id="size-menu">
                        Grid Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                        <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                        <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonToolbar>
        );
    }
}
 
export default Toolbar;