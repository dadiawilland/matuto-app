import React, { useEffect, useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import styles from './Register.style'
import ProcessButton from '../../components/Buttons/ProcessButton'
import TextInput from '../../components/TextInput/TextInput'
import { FORM_FIELDS } from '../../constants/formConstants';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();

    const {formState: { errors }, handleSubmit, control, getValues } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });

    const [val, setVal] = useState('');

    const requestOptions = (credentials) => {
        return ({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
                // firstName: "Test3", 
                // lastName: "Dadia", 
                // username: "willand6", 
                // password: "qwer1234", 
                // emailAddress: "willanddadia6@gmail.com", 
                // address: "Borongan City", 
                // contactNumber: "09177055440", 
                // userStatus: 1, 
                // dateGraduated: "2021-09-23"
            // })
        })

    }

    const onSubmit = (data, e) => {
        history.push({
            pathname: '/payment-info',
            state: {account: data}
        })
        
        // fetch("http://localhost:3001/api/account/login", requestOptions(data))
        // .then(res => res.json())
        // .then(res => {
        //     setVal(res)
        // })

        // console.log(val)
    }

    const onError = (data, e) => {
        console.log(data);
    }

    return (
        <div style={styles().containerForm}>
            <span style={styles().formTitleFont}>Register to Matuto</span>
            <div style={styles().containerInputFieldRow}>
                {FORM_FIELDS.REGISTER_NAME.map((formfield, i) => {
                    return (        
                        <Controller
                            key={i}
                            control={control}
                            name={formfield.name}
                            rules={formfield.validators}
                            render={({
                                field: { onChange, value }
                                }) => 
                                <TextInput onChange={onChange} val={value} style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type={formfield.type} 
                                    name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                            }
                        />
                    );
                })}
            </div>
            <div style={styles().containerInputFields}>
                {FORM_FIELDS.REGISTER.map((formfield, i) => {
                    if (formfield.name === 'passwordConfirm') {
                        formfield.validators = {...formfield.validators, 
                            validate: {
                            matchesPreviousPassword: (value) => {
                              const { password } = getValues();
                              return password === value || 'Passwords should match!';
                            },
                          },
                        }
                    }
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
            </div>
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} style={{top: 300}} isNav={false} dest={'payment-info'} btnLabel="Next" style={styles().containerButton}/>
        </div>
    )
}

export default Register 