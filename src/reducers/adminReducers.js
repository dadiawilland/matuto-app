import { ADMIN } from '../redux-constants/adminConstants';

const initialState = {
    jobPostModalVisible: false,
    createPartnerModalVisible: false,
    selectedNavigation: 'career',
}

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case ADMIN.TOGGLE_JOB_POST_MODAL: 
            return { ...state, jobPostModalVisible: !state.jobPostModalVisible };
        case ADMIN.TOGGLE_CREATE_PARTNER_MODAL: 
            return { ...state, createPartnerModalVisible: !state.createPartnerModalVisible };
    
        case ADMIN.CLOSE_ADMIN_MODALS:
            return {...state, jobPostModalVisible: false, createPartnerModalVisible: false};
        case ADMIN.SET_SELECTED_NAVIGATION:
            return {...state, selectedNavigation: data};
        default: 
            return state;
    }
}