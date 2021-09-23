import { call, put } from 'redux-saga/effects';
import { PRICE } from '../redux-constants/priceConstants';

import { getPriceListService } from '../services/priceServices';

export function* getPriceListSaga(request) {
    try {
        const response = yield call(getPriceListService, request);
        if (response.status == 200) {
            yield put({type: PRICE.PRICE_LIST_SUCCESS, data: response.data.price});
        } else {
            yield put({type: PRICE.PRICE_LIST_ERROR, data: response});
        }
    } catch (error) {

    }
}