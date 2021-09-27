import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import styles from './Admin.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import JobPostModal from '../../components/Modal/JobPostModal';
import CreatePartnerModal from '../../components/Modal/CreatePartnerModal';
import CareerMarket from '../../components/Admin/CareerMarket';
import StudentCenter from '../../components/Admin/StudentCenter';
import Recruitment from '../../components/Admin/Recruitment';
import Partners from '../../components/Admin/Partners';


const Admin = () => {
    const jobPostModalVisible = useSelector((state) => state.admin.jobPostModalVisible);
    const createPartnerModalVisible = useSelector((state) => state.admin.createPartnerModalVisible);
    const location = useLocation().pathname;

    const renderContent = () => {
        switch(location) {
            case '/admin':
            case '/admin-career':
                return <CareerMarket/>;
            case '/admin-student':
                return <StudentCenter/>;
            case '/admin-recruitment':
                return <Recruitment/>;
            case '/admin-partner':
                return <Partners/>;
        }
    }

    return (
        <div style={styles().containerAdmin}>
            <SideNavigator/>
            {renderContent()}
            {jobPostModalVisible && <JobPostModal/>}
            {createPartnerModalVisible && <CreatePartnerModal />}
        </div>
    )
}

export default Admin