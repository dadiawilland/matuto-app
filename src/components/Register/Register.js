import React from 'react'
import styles from './Register.style'
import ProcessButton from '../../components/Buttons/ProcessButton'
import TextInput from '../../components/TextInput/TextInput'

const Register = () => {

    return (
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
            <ProcessButton style={{marginTop: 11}} isNav={true} dest={'payment'} btnLabel="Next" style={styles().containerButton}/>
        </div>
    )
}

export default Register 