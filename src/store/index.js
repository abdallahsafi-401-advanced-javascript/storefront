import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories';
import products from './products';
import cart from './cart';
import thunk from 'redux-thunk';





let reducers = combineReducers({categories, products, cart});

const store = () => {
    return createStore(reducers, composeWithDevTools(), applyMiddleware(thunk));
}

export default store();