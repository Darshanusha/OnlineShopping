import React, { Component } from 'react';
import AddProducts from './AddProducts';
import { Router, Route } from 'react-router-dom';
import history from '../history/History';
import ViewProducts from './ViewProducts';
import Category from './Category';
import EditCategory from './EditCategory';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/admin" component={AddProducts} />
                    <Route exact path="/" component={ViewProducts} />
                    <Route exact path='/product/:category' component={Category} />
                    <Route exact path='/component/edit' component = {EditCategory}/>
                </Router>
            </div>
        );
    }
}

export default App;