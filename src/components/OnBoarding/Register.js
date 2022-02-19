import React, { useEffect, useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import styles from './Register.style'
import common from './Common.style'
import ProcessButton from '../../components/Buttons/ProcessButton'
import TextInput from '../../components/TextInput/TextInput'
import { FORM_FIELDS } from '../../constants/formConstants';
import { useHistory } from 'react-router-dom';

const Register = (props) => {

    const history = useHistory();

    const {formState: { errors }, handleSubmit, control, getValues } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });

    const [val, setVal] = useState('');

    
    const onSubmit = (data, e) => {
        history.push({
            pathname: '/payment-info',
            state: {account: data}
        })
    }

    const onError = (data, e) => {
        console.log(data);
    }

    return (
        <div style={common().containerForm}>
            <span style={common().formTitleFont}>{props.title}</span>
            <div style={common().containerInputFieldRow}>
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
                                <TextInput onChange={onChange} val={value} style={{...common().containerInputField, ...common().containerInputFieldSml}} type={formfield.type} 
                                    name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                            }
                        />
                    );
                })}
            </div>
            <div style={common().containerInputFields}>
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
                                <TextInput onChange={onChange} val={value} style={common().containerInputField} type={formfield.type} 
                                    name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                            }
                        />
                    );
                })}
            </div>
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} style={{top: 300}} isNav={false} dest={'payment-info'} btnLabel="Next" style={common().containerButton}/>
        </div>
    )
}

export default Register 