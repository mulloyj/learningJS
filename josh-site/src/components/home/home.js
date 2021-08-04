import React, { Component } from 'react';

import Bio from './bio';
import Todo from './todo';
import '../../css/home.css';

class Home extends Component {
    componentDidMount() {
        document.title = "Josh Site";
    }

    render() {
        return (
            <div className="center split">
                <Bio />
                <Todo />
            </div>
        );
    }
}
 
export default Home;