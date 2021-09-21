import React from 'react'
import styles from './AdminHeader.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import SearchBar from '../../components/Search/SearchBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import DataTable from '../../components/DataTable/DataTable'
import AdminCard from '../../components/Cards/AdminCard';
import ProfileList from '../../components/ProfileList/ProfileList'
import { StyleRoot } from 'radium'
import RegisterButton from '../../components/Buttons/RegisterButton';

const AdminHeader = () => {

    // const icon = require(`../../assets/${props.src}`).default;
    const icon = require(`../../assets/icon-career-market.png`).default;


    //insertHeader logic here. icon and title
    //remove button on Career Market & Student Center


    return (
        <div style={styles().containerHeader}>
            <div style={styles().containerTitle}>
                <img style={styles().titleImg} src={icon} alt="Matuto logo"/>
                <span style={styles().fontTitle}>Career Market</span>
            </div>
            <RegisterButton/>
        </div>
    )
}

export default AdminHeader