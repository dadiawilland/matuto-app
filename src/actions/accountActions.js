import { ACCOUNT } from '../redux-constants/accountConstants';

export const loginAction = (request) => {
    return {
        type: ACCOUNT.LOGIN_REQUEST,
        data: request,
    }
}

export const registerAccountAction = (request) => {
    return {
        type: ACCOUNT.REGISTER_REQUEST,
        data: request,
    }
}

export const registerAccountOnlyAction = (request) => {
    return {
        type: ACCOUNT.REGISTER_ACCOUNT_ONLY_REQUEST,
        data: request,
    }
}