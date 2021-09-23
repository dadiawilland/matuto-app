import React, { useState, useEffect } from 'react'
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
import AdminModal from '../../components/Modal/AdminModal';

const Admin = () => {
    const [headerText, setHeaderText] = useState('Career Market');
    const [content, setContent] = useState(<ProfileList />);
    const icon = require(`../../assets/icon-career-market.png`).default;
    const location = useLocation().pathname;

    useEffect(() => {
        switch(location) {
            case '/admin':
            case '/admin-career':
                setContent(<ProfileList/>);
                setHeaderText('Career Market');
                return;
            case '/admin-student':
                setContent(<ProfileList/>);
                setHeaderText('Student Center');
                return;
            case '/admin-recruitment':
                setContent(<ProfileList/>);
                setHeaderText('Recruitment');
                return;
            case '/admin-partner':
                setContent(<ProfileList/>);
                setHeaderText('Partners');
                return;
        }
    }, [location])

    return (
        <div style={styles().containerAdmin}>
            <SideNavigator/>
            <div style={styles().containerContent}>
                <AdminHeader title={headerText}/>
                <SearchBar/>
                {content}
                {/* <DataTable/> */}
            </div>
            <AdminModal/>
        </div>
    )
}

export default Admin