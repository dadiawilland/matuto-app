import { call, put } from 'redux-saga/effects';
import { ACCOUNT } from '../redux-constants/accountConstants';

import { registerAccountService, registerPaymentInfoService } from '../services/account.service';

export function* registerAccountSaga(request) {
    try {
        const response = yield call(registerAccountService, request.data.account);
        if (response.status == 200) {
            request.data.paymentInfo.accountId = response.data.id;
            const paymentResponse = yield call(registerPaymentInfoService, request.data.paymentInfo);
            if (paymentResponse.status === 200) {
                yield put({type: ACCOUNT.ACCOUNT_REGISTER_SUCCESS, data: response.data});
            } else {
                yield put({type: ACCOUNT.ACCOUNT_REGISTER_ERROR, data: response});
            }
        } else {
            yield put({type: ACCOUNT.ACCOUNT_REGISTER_ERROR, data: response});
        }
    } catch (error) {

    }
}