import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller  } from "react-hook-form";
import styles from './Login.style'
import common from './Common.style'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../Buttons/ProcessButton'
import AltLoginButton from '../Buttons/AltLoginButton'
import TextInput from '../TextInput/TextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FORM_FIELDS } from '../../constants/formConstants';
import { loginAction } from '../../actions/accountActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [hasError, setHasError] = useState(false);
    const {formState: { errors }, handleSubmit, control } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });
    const account = useSelector((state) => state.account.account);
    const accountLoginError = useSelector((state) => state.account.accountLoginError);


    const onSubmit = (data, e) => {
        dispatch(loginAction(data));
    }

    const onError = (data, e) => {
        console.log(data);
    }

    useEffect(() => {
        console.log(account)
        if(account.access_token && !accountLoginError) {
            setHasError(false)
            history.push('/home')
        } else if(accountLoginError) {

        console.log(accountLoginError)
            setHasError(true)
        }
    }, [account, accountLoginError]);

    return (
        <div style={common().containerForm}>
            <ErrorMessage hasError={hasError} message={accountLoginError?.data?.message} />
            <span style={common().formTitleFont}>Login to Matuto</span>
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
                            <TextInput onChange={onChange} val={value} style={common().containerInputField} type={formfield.type} 
                                name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                        }
                    />
                );
            })}
            <div style={styles().containerCheckbox}>
                <input style={styles().checkboxField} type="checkbox"/>
                <span style={styles().checkboxFieldFont}>Keep me logged in</span>
            </div>
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} isNav={false} btnLabel="Login" style={common().containerButton}/>
            <div style={styles().containerBreak}>
                <div style={styles().breakLines}/>
                <span style={styles().breakFont}>Or</span>
                <div style={styles().breakLines}/>
            </div>
            <AltLoginButton dest="/" src={'icon-google.png'} text={'Sign in with Google'} style={common().containerButton}/>
            <AltLoginButton dest="/" src={'icon-fb.png'} text={'Sign in with Facebook'} style={common().containerButton}/>
            <p style={styles().signUpFont}>Not a member yet? <NavLink style={styles().signUpLinkFont} to="/register">Sign up here</NavLink></p>
        </div>
    )
}

export default Login 