import { ADMIN } from '../redux-constants/adminConstants';

export const toggleJobPostModalAction = () => {
    return {
        type: ADMIN.TOGGLE_JOB_POST_MODAL
    }
}

export const toggleCreatePartnerModalAction = () => {
    return {
        type: ADMIN.TOGGLE_CREATE_PARTNER_MODAL
    }
}

export const closeAdminModalsAction = () => {
    return {
        type: ADMIN.CLOSE_ADMIN_MODALS
    }
}

export const setNavigationAction = (route) => {
    return {
        type: ADMIN.SET_SELECTED_NAVIGATION,
        data: route
    }
}

