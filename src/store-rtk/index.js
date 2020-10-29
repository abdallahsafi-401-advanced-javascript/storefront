import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';


const reducers = combineReducers({categories: categories, products: products, cart: cart })
const store = configureStore({ reducer: reducers});

export default store;