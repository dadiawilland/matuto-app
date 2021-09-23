import { ADMIN } from '../redux-constants/adminConstants';

const initialState = {
    jobPostModalVisible: false,
}

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case ADMIN.TOGGLE_JOB_POST_MODAL: 
            return { ...state, jobPostModalVisible: !state.jobPostModalVisible };
        default: 
            return state;
    }
}