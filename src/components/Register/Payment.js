import React, {useState, useEffect} from 'react'
import styles from './Register.style'
import bg from '../../assets/sign-in-bg.png'
import { StyleRoot } from 'radium'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'

const Payment = () => {

    // const userName

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        // <div style={styles().containerSignIn}>
        //     <div style={styles().containerLeft}>
        //         <span style={styles().copyFont}>Lifelong learning is a journey together.</span>
        //         <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
        //     </div>
        //     <div style={styles().containerRight}>
                <div style={styles().containerForm}>
                    <span style={styles().formTitleFont}>Register to Matuto</span>
                    <div style={styles().containerInputFieldRow}>
                        <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="firstName" label="First Name"/>
                        <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="text" name="lastName" label="Last Name"/>
                    </div>
                    <TextInput style={styles().containerInputField} type="text" name="emailAddress" label="Email Address"/>
                    <TextInput style={styles().containerInputField} type="text" name="contactNumber" label="Contact Number"/>
                    <TextInput style={styles().containerInputField} type="password" name="password" label="Password"/>
                    <TextInput style={styles().containerInputField} type="password" name="password" label="Confirm Password"/>
                    {/* <div style={styles().containerCheckbox}>
                        <input style={styles().checkboxField} type="checkbox"/>
                        <span style={styles().checkboxFieldFont}>Keep me logged in</span>
                    </div> */}
                    <ProcessButton btnLabel="Next" style={styles().containerButton}/>
                    {/* <AltLoginButton src={'icon-google.png'} text={'Sign in with Google'} style={styles().containerButton}/>
                    <AltLoginButton src={'icon-fb.png'} text={'Sign in with Facebook'} style={styles().containerButton}/> */}
                </div>
        //     </div>
        // </div>
    )
}

export default Payment 