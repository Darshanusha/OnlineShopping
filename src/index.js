import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.js';
import reducers from './reducers/index.tsx';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
<Provider store = {store} >
    <App/>
</Provider>
,document.querySelector('#root'));