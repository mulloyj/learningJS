import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import GameOfLife from './game-of-life/gameOfLife';
import LangtonsAnt from './langtons-ant/langtonsAnt';
import Navbar from './navbar';
import Home from './home/home'

class App extends Component {
    render() { 
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/GameOfLife">
                        <GameOfLife />
                    </Route>
                    <Route path="/LangtonsAnt">
                        <LangtonsAnt />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
 
export default App;