import React, {useState, useEffect} from 'react'
import styles from './SignIn.style'
import bg from '../../assets/sign-in-bg.png'
import { StyleRoot } from 'radium'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Payment from '../../components/Register/Payment'

const SignIn = () => {

    // const userName

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        <div style={styles().containerSignIn}>
            <div style={styles().containerLeft}>
                <span style={styles().copyFont}>Lifelong learning is a journey together.</span>
                <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
            </div>
            <div style={styles().containerRight}>
                {/* <Login/> */}
                <Payment/>
            </div>
        </div>
    )
}

export default SignIn 