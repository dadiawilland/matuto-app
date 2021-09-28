import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import styles from './OnBoardingModal.style'
import SideNavigator from '../SideNavigator/SideNavigator'
import SearchBar from '../Search/SearchBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import DataTable from '../DataTable/DataTable'
import AdminCard from '../Cards/AdminCard';
import ProfileList from '../ProfileList/ProfileList'
import { StyleRoot } from 'radium'
import RegisterButton from '../Buttons/RegisterButton';
import AdminHeader from '../Header/AdminHeader';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import ProcessButton from '../Buttons/ProcessButton';
import CloseButton from '../Buttons/CloseButton';
import { toggleJobPostModalAction } from '../../actions/adminActions';
import icn from '../../assets/icon-arrow-white.png'
import { FORM_FIELDS } from '../../constants/formConstants';
import SelectOption from '../SelectOption/SelectOption';

const OnBoardingModal = (props) => {

    const optionsList = [{title: 'Cashering and Bookepin'},
    {title: 'Digital Marketing'}, 
    {title: 'Internet and Web Application'}, 
    {title: 'Customer Service and Front Office Operation'}, 
    {title: 'Business English and Communication'}]

    const closeModal = () => {
        props.onClose()
    }

    const submitModal = () => {
        props.onSubmit()
    }


    return (
            <div style={styles().containerModal}>
                <div style={styles().containerForm}>
                    <CloseButton style={styles().containerCloseButton} onClick={() => closeModal()}/>
                    <span style={styles().fontModalTitle}>Choose your interests</span>
                    <span style={styles().fontModalSubTitle}>Get personalized learning experience</span>
                    <div style={styles().containerOptionsList}>
                        {optionsList?.map((option, i) => {
                            return (<SelectOption key={i} title={option.title}/>)
                        })}
                    </div>
                    <div onClick={() => submitModal()} style={styles().containerSubmitButton}>
                        <img style={styles().imgBg} src={icn} alt="Matuto logo white"/>
                    </div>
                </div>
            </div>
    )
}

export default OnBoardingModal