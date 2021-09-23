import { ADMIN } from '../redux-constants/adminConstants';

export const toggleJobPostModal = () => {
    return {
        type: ADMIN.TOGGLE_JOB_POST_MODAL
    }
}