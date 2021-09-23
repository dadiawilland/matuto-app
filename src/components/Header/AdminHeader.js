import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import styles from './AdminHeader.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import SearchBar from '../../components/Search/SearchBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import DataTable from '../../components/DataTable/DataTable'
import AdminCard from '../../components/Cards/AdminCard';
import ProfileList from '../../components/ProfileList/ProfileList'
import { StyleRoot } from 'radium'
import RegisterButton from '../../components/Buttons/RegisterButton';
import { toggleJobPostModalAction, 
        toggleCreatePartnerModalAction,
        closeAdminModalsAction, 
        setNavigationAction 
    } from '../../actions/adminActions';

const AdminHeader = (props) => {
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const [title, setTitle] = useState('Career Market');
    const [headerButton, setHeaderButton] = useState(null);
    const icon = require(`../../assets/icon-career-market.png`).default;

    useEffect(() => {
        dispatch(closeAdminModalsAction());
        switch(location) {
            case '/admin':
            case '/admin-career':
                dispatch(setNavigationAction('career'));
                setTitle('Career Market');
                setHeaderButton(null);
                return;
            case '/admin-student':
                dispatch(setNavigationAction('student'));
                setTitle('Student Center');
                setHeaderButton(null);
                return;
            case '/admin-recruitment':
                dispatch(setNavigationAction('recruitment'));
                setTitle('Recruitment');
                setHeaderButton(<RegisterButton title={'Create Job Post'} onClick={() => dispatch(toggleJobPostModalAction())}/>);
                return;
            case '/admin-partner':
                dispatch(setNavigationAction('partner'));
                setTitle('Partners');
                setHeaderButton(<RegisterButton title={'Create Partner'} onClick={() => dispatch(toggleCreatePartnerModalAction())}/>);
                return;
        }
    }, [location]);
    
    return (
        <div style={styles().containerHeader}>
            <div style={styles().containerTitle}>
                <img style={styles().titleImg} src={icon} alt="Matuto logo"/>
                <span style={styles().fontTitle}>{title}</span>
            </div>
            {headerButton}
        </div>
    )
}

export default AdminHeader