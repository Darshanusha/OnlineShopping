import React, { Component } from 'react';
import AddProducts from './AddProducts';
import { Router, Route } from 'react-router-dom';
import history from '../history/History';
import ViewProducts from './ViewProducts';
import Category from './Category';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/admin" component={AddProducts} />
                    <Route exact path="/" component={ViewProducts} />
                    <Route exact path='/product/:category' component={Category} />
                </Router>
            </div>
        );
    }
}

export default App;