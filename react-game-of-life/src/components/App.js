import React, { Component } from 'react';

import GameOfLife from './game-of-life/gameOfLife';

class App extends Component {
    render() { 
        return (
            <div>
                <GameOfLife />
            </div>
        );
    }
}
 
export default App;