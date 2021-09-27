import { combineReducers } from 'redux';

import price from './priceReducer';
import admin from './adminReducers';
import account from './accountReducers';
const rootReducer = combineReducers({
    price,
    admin,
    account
});

export default rootReducer;