import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/GameOfLife">
                    Game of Life
                </Link>
                <Link to="/LangtonsAnt">
                    Langton's Ant
                </Link>
            </div>
        );
    }
}
 
export default Navbar;