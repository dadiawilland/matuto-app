import { combineReducers } from 'redux';

import price from './priceReducer';
const rootReducer = combineReducers({
    price
});

export default rootReducer;