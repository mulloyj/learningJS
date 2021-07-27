import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Create from './components/create';
import RecordList from './components/recordList';
import Edit from './components/edit';

const App = () => {
    return (
        <div>
        <Navbar />
        <Route exact path="/">
        <RecordList />
        </Route>
        <Route path="/edit/:id" component={Edit} />
         <Route path="/create">
        <Create />
        </Route>
        </div>
    );
}

export default App;