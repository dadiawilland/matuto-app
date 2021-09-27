import { ACCOUNT } from '../redux-constants/accountConstants';

const initialState = {
    account: {},
}

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case ACCOUNT.ACCOUNT_REGISTER_SUCCESS: 
            return { ...state, account: data };
        default: 
            return state;
    }
}