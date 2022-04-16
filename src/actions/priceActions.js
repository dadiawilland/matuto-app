import { PRICE } from '../redux-constants/priceConstants';

export const getPriceListAction = (request) => {
  return {
    type: PRICE.PRICE_LIST_REQUEST,
    request
  };
};

export const setSelectedPriceAction = (price) => {
  return {
    type: PRICE.SET_SELECTED_PRICE,
    data: price
  };
};

export const clearSelectedPriceAction = () => {
  return {
    type: PRICE.CLEAR_SELECTED_PRICE
  };
};
