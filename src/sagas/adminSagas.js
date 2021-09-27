import { call, put } from 'redux-saga/effects';
import { ADMIN } from '../redux-constants/adminConstants';

import { createJobPostService, createPartnerService } from '../services/admin.service';

export function* createJobPostSaga(request) {
    try {
        request.data.partnerId = 1;
        const response = yield call(createJobPostService, request.data);
        if (response.status == 200) {
            yield put({type: ADMIN.CREATE_JOBPOST_SUCCESS, data: response.data});
        } else {
            yield put({type: ADMIN.CREATE_JOBPOST_ERROR, data: response});
        }
    } catch (error) {
        console.log(error);
    }
};

export function* createPartnerSaga(request) {
    try {
        request.data.applicationStatus = 0;
        const response = yield call(createPartnerService, request.data);
        if (response.status == 200) {
            yield put({type: ADMIN.CREATE_PARTNER_SUCCESS, data: response.data});
        } else {
            yield put({type: ADMIN.CREATE_PARTNER_ERROR, data: response});
        }
    } catch (error) {
        console.log(error);
    }
};
