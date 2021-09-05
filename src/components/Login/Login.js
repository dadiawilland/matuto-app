import React, {useState, useEffect} from 'react'
import styles from './Login.style'
import bg from '../../assets/sign-in-bg.png'
import { StyleRoot } from 'radium'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'

const Login = () => {

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
                    <span style={styles().formTitleFont}>Login to Matuto</span>
                    <TextInput style={styles().containerInputField} type="text" name="username" label="Username"/>
                    <TextInput style={styles().containerInputField} type="password" name="password" label="Password"/>
                    <div style={styles().containerCheckbox}>
                        <input style={styles().checkboxField} type="checkbox"/>
                        <span style={styles().checkboxFieldFont}>Keep me logged in</span>
                    </div>
                    <ProcessButton btnLabel="Login" style={styles().containerButton}/>
                    <div style={styles().containerBreak}>
                        <div style={styles().breakLines}/>
                        <span style={styles().breakFont}>Or</span>
                        <div style={styles().breakLines}/>
                    </div>
                    <AltLoginButton src={'icon-google.png'} text={'Sign in with Google'} style={styles().containerButton}/>
                    <AltLoginButton src={'icon-fb.png'} text={'Sign in with Facebook'} style={styles().containerButton}/>
                    <p style={styles().signUpFont}>Not a member yet? <NavLink style={styles().signUpLinkFont} to="/signIn">Sign up here</NavLink></p>
                </div>
        //     </div>
        // </div>
    )
}

export default Login 