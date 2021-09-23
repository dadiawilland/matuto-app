import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import styles from './Admin.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import SearchBar from '../../components/Search/SearchBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import DataTable from '../../components/DataTable/DataTable'
import AdminCard from '../../components/Cards/AdminCard';
import ProfileList from '../../components/ProfileList/ProfileList'
import { StyleRoot } from 'radium'
import RegisterButton from '../../components/Buttons/RegisterButton';
import AdminHeader from '../../components/Header/AdminHeader';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import ProcessButton from '../../components/Buttons/ProcessButton';
import JobPostModal from '../../components/Modal/JobPostModal';
import CreatePartnerModal from '../../components/Modal/CreatePartnerModal';

const Admin = () => {
    const jobPostModalVisible = useSelector((state) => state.admin.jobPostModalVisible);
    const createPartnerModalVisible = useSelector((state) => state.admin.createPartnerModalVisible);
    const [headerText, setHeaderText] = useState('Career Market');
    const [content, setContent] = useState(<ProfileList />);
    const icon = require(`../../assets/icon-career-market.png`).default;
    const location = useLocation().pathname;

    const renderContent = () => {
        switch(location) {
            case '/admin':
            case '/admin-career':
                return <DataTable/>;
            case '/admin-student':
                return <ProfileList/>;
            case '/admin-recruitment':
                return <ProfileList/>;
            case '/admin-partner':
                return <ProfileList/>;
        }
    }

    return (
        <div style={styles().containerAdmin}>
            <SideNavigator/>
            <div style={styles().containerContent}>
                <AdminHeader />
                <SearchBar/>
                {renderContent()}
            </div>
            {jobPostModalVisible && <JobPostModal/>}
            {createPartnerModalVisible && <CreatePartnerModal />}
        </div>
    )
}

export default Admin