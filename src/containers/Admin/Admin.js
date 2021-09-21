import React from 'react'
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

const Admin = () => {

    // const icon = require(`../../assets/${props.src}`).default;
    const icon = require(`../../assets/icon-career-market.png`).default;

    return (
        <div style={styles().containerAdmin}>
            <SideNavigator/>
            <div style={styles().containerContent}>
                <AdminHeader/>
                <SearchBar/>
                <ProfileList/>
                {/* <DataTable/> */}
            </div>
        </div>
    )
}

export default Admin