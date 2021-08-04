import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <div>
                <nav class="navbar navbar-expand navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">
                        Josh Site
                    </Link>
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/GameOfLife">
                            Game of Life
                        </Link>
                        <Link className="nav-item nav-link" to="/LangtonsAnt">
                            Lanton's Ant
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;