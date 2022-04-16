import { ADMIN } from '../redux-constants/adminConstants';

export const toggleJobPostModalAction = () => {
  return {
    type: ADMIN.TOGGLE_JOB_POST_MODAL
  };
};

export const toggleCreatePartnerModalAction = () => {
  return {
    type: ADMIN.TOGGLE_CREATE_PARTNER_MODAL
  };
};

export const closeAdminModalsAction = () => {
  return {
    type: ADMIN.CLOSE_ADMIN_MODALS
  };
};

export const setNavigationAction = (route) => {
  return {
    type: ADMIN.SET_SELECTED_NAVIGATION,
    data: route
  };
};

export const createJobPostAction = (request) => {
  return {
    type: ADMIN.CREATE_JOBPOST_REQUEST,
    data: request
  };
};

export const clearJobPostSuccessAction = () => {
  return {
    type: ADMIN.CLEAR_JOBPOST_SUCCESS
  };
};

export const clearJobPostErrorAction = () => {
  return {
    type: ADMIN.CLEAR_JOBPOST_ERROR
  };
};

//
export const createPartnerAction = (request) => {
  return {
    type: ADMIN.CREATE_PARTNER_REQUEST,
    data: request
  };
};

export const clearPartnerSuccessAction = () => {
  return {
    type: ADMIN.CLEAR_CREATE_PARTNER_SUCCESS
  };
};

export const clearPartnerErrorAction = () => {
  return {
    type: ADMIN.CLEAR_CREATE_PARTNER_ERROR
  };
};
