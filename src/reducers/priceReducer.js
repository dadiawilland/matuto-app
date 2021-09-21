import { PRICE } from '../redux-constants/priceConstants';

const initialState = {
    priceList: [],
    selectedPrice: {}
}

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case PRICE.PRICE_LIST_SUCCESS: 
            return { ...state, priceList: data };
        case PRICE.SET_SELECTED_PRICE:
            return { ...state, selectedPrice: data};
        case PRICE.CLEAR_SELECTED_PRICE:
            return { ...state, selectedPrice: {}};
        default: 
            return state;
    }
}