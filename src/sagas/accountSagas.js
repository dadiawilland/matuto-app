import { call, put } from 'redux-saga/effects';
import { ACCOUNT } from '../redux-constants/accountConstants';

import { registerAccountService, registerPaymentInfoService, accountLoginService } from '../services/account.service';

export function* accountLoginSaga(request) {
    try {
        const response = yield call(accountLoginService, request.data);
        if (response.status == 200) {
            yield put({type: ACCOUNT.LOGIN_SUCCES, data: response.data});
        } else {
            yield put({type: ACCOUNT.LOGIN_ERROR, data: response});
        }
    } catch (error) {
        console.log(error);
    }
};

export function* registerAccountPaymentSaga(request) {
    try {
        const response = yield call(registerAccountService, request.data);
        if (response.status == 200) {
            yield put({type: ACCOUNT.REGISTER_SUCCESS, data: response.data});
        } else {
            yield put({type: ACCOUNT.REGISTER_ERROR, data: response});
        }
    } catch (error) {
        console.log(error);
    }
}

export function* registerAccountSaga(request) {
    try {
        const response = yield call(registerAccountService, request.data.account);
        if (response.status == 200) {
            yield put({type: ACCOUNT.REGISTER_SUCCESS, data: response.data});
        } else {
            yield put({type: ACCOUNT.REGISTER_ERROR, data: response});
        }
    } catch (error) {
        console.log(error);
    }
}