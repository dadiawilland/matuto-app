import { takeLatest } from '@redux-saga/core/effects';

import { PRICE } from '../redux-constants/priceConstants';
import { ACCOUNT } from '../redux-constants/accountConstants';
import { getPriceListSaga } from './priceSagas';
import { registerAccountSaga } from './accountSagas';


export function* watchPrice() {
    yield takeLatest(PRICE.PRICE_LIST_REQUEST, getPriceListSaga);
}

export function* watchAccount() {
    yield takeLatest(ACCOUNT.ACCOUNT_REGISTER_REQUEST, registerAccountSaga);
}