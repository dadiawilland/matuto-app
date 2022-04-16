import { ADMIN } from '../redux-constants/adminConstants';

const initialState = {
  jobPostModalVisible: false,
  createPartnerModalVisible: false,
  selectedNavigation: 'career',
  jobPostSuccess: null,
  jobPostError: null,
  createPartnerSuccess: null,
  createPartnerError: null
};

export default (state = initialState, action) => {
  const data = action.data;
  switch (action.type) {
    case ADMIN.TOGGLE_JOB_POST_MODAL:
      return { ...state, jobPostModalVisible: !state.jobPostModalVisible };
    case ADMIN.TOGGLE_CREATE_PARTNER_MODAL:
      return {
        ...state,
        createPartnerModalVisible: !state.createPartnerModalVisible
      };
    case ADMIN.CLOSE_ADMIN_MODALS:
      return {
        ...state,
        jobPostModalVisible: false,
        createPartnerModalVisible: false
      };
    case ADMIN.SET_SELECTED_NAVIGATION:
      return { ...state, selectedNavigation: data };
    //handle job post success and error
    case ADMIN.CREATE_JOBPOST_SUCCESS:
      return { ...state, jobPostSuccess: data };
    case ADMIN.CREATE_JOBPOST_ERROR:
      return { ...state, jobPostError: data };
    case ADMIN.CLEAR_JOBPOST_SUCCESS:
      return { ...state, jobPostSuccess: null };
    case ADMIN.CLEAR_JOBPOST_ERROR:
      return { ...state, jobPostError: null };
    //handle create partner success and error
    case ADMIN.CREATE_PARTNER_SUCCESS:
      return { ...state, createPartnerSuccess: data };
    case ADMIN.CREATE_PARTNER_ERROR:
      return { ...state, createPartnerError: data };
    case ADMIN.CLEAR_CREATE_PARTNER_SUCCESS:
      return { ...state, createPartnerSuccess: null };
    case ADMIN.CLEAR_CREATE_PARTNER_ERROR:
      return { ...state, createPartnerError: null };
    default:
      return state;
  }
};
