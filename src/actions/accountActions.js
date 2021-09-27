import { ACCOUNT } from '../redux-constants/accountConstants';

export const registerAccountAction = (request) => {
    return {
        type: ACCOUNT.ACCOUNT_REGISTER_REQUEST,
        data: request,
    }
}