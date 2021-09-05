import React, {useState, useEffect} from 'react'
import styles from './SignIn.style'
import bg from '../../assets/sign-in-bg.png'
import { StyleRoot } from 'radium'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Payment from '../../components/Register/Payment'
import { BrowserRouter, Route, NavLink, useLocation } from "react-router-dom";

const SignIn = () => {

    const location = useLocation().pathname

    useEffect(() => {
        console.log('asdasd')
    });

    const renderBody = () => {
        switch(location) {
            case 'register':
              return <Register/>;
            case 'payment':
                return <Payment/>;
            default:
              return <Login/>;
          }
    }

    return (
        <div style={styles().containerSignIn}>
            <div style={styles().containerLeft}>
                <span style={styles().copyFont}>Lifelong learning is a journey together.</span>
                <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
            </div>
            <div style={styles().containerRight}>
                {renderBody()}
            </div>
        </div>
    )
}

export default SignIn 