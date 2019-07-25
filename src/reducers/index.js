import { combineReducers } from 'redux';
import USERS from './users';
import PRODUCTS from './products';

export default combineReducers({
    users: USERS,
    products: PRODUCTS
});