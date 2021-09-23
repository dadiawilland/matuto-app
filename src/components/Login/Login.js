import React, { useEffect} from 'react';
import { useForm, Controller  } from "react-hook-form";
import styles from './Login.style'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput';
import { FORM_FIELDS } from '../../constants/formConstants';

const Login = () => {
    const {formState: { errors }, handleSubmit, control } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });

    const onSubmit = (data, e) => {
        console.log(data);
    }

    const onError = (data, e) => {
        console.log(data);
    }

    return (
        <div style={styles().containerForm}>
            <span style={styles().formTitleFont}>Login to Matuto</span>
            {FORM_FIELDS.LOGIN.map((formfield, i) => {
                return (        
                    <Controller
                        key={i}
                        control={control}
                        name={formfield.name}
                        rules={formfield.validators}
                        render={({
                            field: { onChange, value }
                            }) => 
                            <TextInput onChange={onChange} val={value} style={styles().containerInputField} type={formfield.type} 
                                name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                        }
                    />
                );
            })}
            <div style={styles().containerCheckbox}>
                <input style={styles().checkboxField} type="checkbox"/>
                <span style={styles().checkboxFieldFont}>Keep me logged in</span>
            </div>
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} isNav={false} btnLabel="Login" style={styles().containerButton}/>
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