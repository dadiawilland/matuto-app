import React from 'react'
import styles from './Login.style'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'

const Login = () => {

    return (
        <div style={styles().containerForm}>
            <span style={styles().formTitleFont}>Login to Matuto</span>
            <TextInput style={styles().containerInputField} type="text" name="username" label="Username"/>
            <TextInput style={styles().containerInputField} type="password" name="password" label="Password"/>
            <div style={styles().containerCheckbox}>
                <input style={styles().checkboxField} type="checkbox"/>
                <span style={styles().checkboxFieldFont}>Keep me logged in</span>
            </div>
            <ProcessButton isNav={false} btnLabel="Login" style={styles().containerButton}/>
            <div style={styles().containerBreak}>
                <div style={styles().breakLines}/>
                <span style={styles().breakFont}>Or</span>
                <div style={styles().breakLines}/>
            </div>
            <AltLoginButton dest="/" src={'icon-google.png'} text={'Sign in with Google'} style={styles().containerButton}/>
            <AltLoginButton dest="/" src={'icon-fb.png'} text={'Sign in with Facebook'} style={styles().containerButton}/>
            <p style={styles().signUpFont}>Not a member yet? <NavLink style={styles().signUpLinkFont} to="/register">Sign up here</NavLink></p>
        </div>
    )
}

export default Login 