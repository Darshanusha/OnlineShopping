import { combineReducers } from "redux";
import { reducer } from "redux-form";
import categories from './categories';
import products from './products';

export default combineReducers({
    form: reducer,
    categories: categories,
    products: products
})