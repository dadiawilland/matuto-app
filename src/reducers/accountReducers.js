import { ACCOUNT } from '../redux-constants/accountConstants';

const initialState = {
  account: {},
  accountLoginError: null,
  accountRegisterError: null
};

export default (state = initialState, action) => {
  const data = action.data;
  switch (action.type) {
    case ACCOUNT.REGISTER_SUCCESS:
    case ACCOUNT.LOGIN_SUCCES:
      return {
        ...state,
        account: data,
        accountLoginError: null,
        accountRegisterError: null
      };
    case ACCOUNT.LOGIN_ERROR:
      return { ...state, account: {}, accountLoginError: data };
    case ACCOUNT.REGISTER_ERROR:
      return { ...state, account: {}, accountRegisterError: data };
    default:
      return state;
  }
};
