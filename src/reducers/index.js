import { combineReducers } from 'redux';

import price from './priceReducer';
import admin from './adminReducers';
const rootReducer = combineReducers({
    price,
    admin
});

export default rootReducer;