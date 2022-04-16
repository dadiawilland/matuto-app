import { takeLatest } from '@redux-saga/core/effects';

import { PRICE } from '../redux-constants/priceConstants';
import { ACCOUNT } from '../redux-constants/accountConstants';
import { ADMIN } from '../redux-constants/adminConstants';
import { getPriceListSaga } from './priceSagas';
import {
  registerAccountPaymentSaga,
  accountLoginSaga,
  registerAccountSaga
} from './accountSagas';
import { createJobPostSaga, createPartnerSaga } from './adminSagas';

export function* watchPrice() {
  yield takeLatest(PRICE.PRICE_LIST_REQUEST, getPriceListSaga);
}

export function* watchAccount() {
  yield takeLatest(ACCOUNT.REGISTER_ACCOUNT_ONLY_REQUEST, registerAccountSaga);
  yield takeLatest(ACCOUNT.REGISTER_REQUEST, registerAccountPaymentSaga);
  yield takeLatest(ACCOUNT.LOGIN_REQUEST, accountLoginSaga);
}

export function* watchAdmin() {
  yield takeLatest(ADMIN.CREATE_JOBPOST_REQUEST, createJobPostSaga);
  yield takeLatest(ADMIN.CREATE_PARTNER_REQUEST, createPartnerSaga);
}
