import { takeLatest } from '@redux-saga/core/effects';

import { PRICE } from '../redux-constants/priceConstants';
import { getPriceListSaga } from './priceSagas';

export function* watchPrice() {
    yield takeLatest(PRICE.PRICE_LIST_REQUEST, getPriceListSaga);
}