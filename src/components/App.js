import React, { Component } from 'react';
import AddProducts from './AddProducts';
import { Router, Route} from 'react-router-dom';
import history from '../history/History';
import ViewProducts from './ViewProducts';
import Category from './Category';
import EditCategory from './EditCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import DeleteProducts from './DeleteProducts';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <NavBar/>
                    <Route exact path="/admin" component={AddProducts} />
                    <Route exact path="/" component={ViewProducts} />
                    <Route exact path='/product/:category/:del' component={Category} />
                    <Route exact path='/component/edit' component={EditCategory} />
                    <Route exact path='/admin/products/delete' component={DeleteProducts} />
                </Router>
            </div>
        );
    }
}

export default App;