import { takeLatest } from '@redux-saga/core/effects';

import { PRICE } from '../redux-constants/priceConstants';
import { ACCOUNT } from '../redux-constants/accountConstants';
import { getPriceListSaga } from './priceSagas';
import { registerAccountSaga, accountLoginSaga } from './accountSagas';


export function* watchPrice() {
    yield takeLatest(PRICE.PRICE_LIST_REQUEST, getPriceListSaga);
}

export function* watchAccount() {
    yield takeLatest(ACCOUNT.REGISTER_REQUEST, registerAccountSaga);
    yield takeLatest(ACCOUNT.LOGIN_REQUEST, accountLoginSaga);
}