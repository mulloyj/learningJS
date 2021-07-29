import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import GameOfLife from './game-of-life/gameOfLife';
import LangtonsAnt from './langtons-ant/langtonsAnt';
import Navbar from './navbar';

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
                        <h1>
                            Josh React Site
                        </h1>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
 
export default App;