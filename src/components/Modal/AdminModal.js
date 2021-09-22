import React from 'react'
import styles from './AdminModal.style'
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

const AdminModal = () => {

    // const icon = require(`../../assets/${props.src}`).default;
    const icon = require(`../../assets/icon-career-market.png`).default;

    return (
            <div style={styles().containerModal}>
                <div style={styles().containerForm}>
                    <span style={styles().fontModalTitle}>Create Job Post</span>
                    <div style={styles().containerFormBody}>
                        <div style={styles().containerInputFieldRow}>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="lastName" label="Last Name"/>
                        </div>
                        <div style={styles().containerInputFieldRow}>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="lastName" label="Last Name"/>
                        </div>
                        <div style={styles().containerInputFieldRow}>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="lastName" label="Last Name"/>
                        </div>
                        <div style={styles().containerInputFieldRow}>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                            <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="lastName" label="Last Name"/>
                        </div>
                        <TextArea style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                        <TextArea style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                    </div>
                    <ProcessButton isNav={false} btnLabel="Submit" style={styles().containerButton}/>
                </div>
            </div>
    )
}

export default AdminModal