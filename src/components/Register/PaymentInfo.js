import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import styles from './PaymentInfo.style'
import ProcessButton from '../Buttons/ProcessButton'
import PaymentButton from '../Buttons/PaymentButton'
import TextInput from '../TextInput/TextInput'
import { useLocation } from "react-router-dom";
import { FORM_FIELDS } from '../../constants/formConstants';
import Register from './Register';

const PaymentInfo = (props) => {

    const location = useLocation();

    const {formState: { errors }, handleSubmit, control, getValues } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });

    useEffect(() => {
        console.log(location.state.account)
    }, [])

    const requestOptions = (credentials, addFields) => {
        if(addFields) {
            for (const object of Object.entries(addFields)) {
                console.log(object)
                Object.assign(credentials, object[1])
            }
        }
        return ({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })

    }

    function registerAccount(account) {
        let resAccount = null;
        return new Promise(resolve => {
            fetch("http://localhost:3001/api/account/", requestOptions(account))
                .then(res => res.json())
                .then(res => {
                    resAccount = res
                    console.log(resAccount)
                    resolve(resAccount)
                })
        });
    }

    function registerPaymentInfo(paymentInfo, addFields) {
        let resPaymentInfo = null;
        return new Promise(resolve => {
            fetch("http://localhost:3001/api/payment-info/", requestOptions(paymentInfo, addFields))
                .then(res => res.json())
                .then(res => {
                    resPaymentInfo = res
                    console.log(resPaymentInfo)
                    resolve(resPaymentInfo)
                })
        });
    }

    async function register(data) {
        const account = await registerAccount(location.state.account)
        console.log(account)
        if(account && account != undefined) {
            console.log(account)
            const paymentInfo = await registerPaymentInfo(data, [{accountId: account.id},{paymentInfoType: 1}])
            console.log(paymentInfo)
        }
    }

    const onSubmit = (data, e) => {
        register(data)
    }

    const onError = (data, e) => {
        console.log(data);
    }

    return (
        <div style={styles().containerForm}>
            <span style={styles().formTitleFont}>{props.title}</span>
            <span style={styles().paymentTitleFont}>Payment Information</span>
            <div style={styles().containerPaymentBtnRow}>
                <PaymentButton src={'icon-creditcard.png'} text={'Creditcard'} style={styles().containerPaymentBtn}/>
                <PaymentButton src={'icon-gcash.png'} text={'GCash'} style={styles().containerPaymentBtn}/>
            </div>
            <div style={styles().containerInputFields}>
                {FORM_FIELDS.PAYMENT_INFO.map((formfield, i) => {
                    if (formfield.subFields) {
                        return (
                            <div key={i} style={styles().containerInputFieldRow}>
                                {formfield.subFields.map((subFormField, ii) => {
                                    return (
                                        <Controller
                                            key={ii}
                                            control={control}
                                            name={subFormField.name}
                                            rules={subFormField.validators}
                                            defaultValue=""
                                            render={({
                                                field: { onChange, value  }
                                                }) => 
                                                <TextInput onChange={onChange} val={value} style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type={subFormField.type} 
                                                    name={subFormField.name} label={subFormField.label} error={errors[subFormField.name]}/>
                                            }
                                        />
                                    );
                                })}
                            </div>
                        );
                    } else {
                        return (        
                            <Controller
                                key={i}
                                control={control}
                                name={formfield.name}
                                rules={formfield.validators}
                                render={({
                                    field: { onChange, value }
                                    }) => 
                                    <TextInput onChange={onChange} val={value} style={{...styles().containerInputField}} type={formfield.type} 
                                        name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                                }
                            />
                        );
                    }
                })}
            </div>
            {
                props.isRegistration ?
                    null
                :
                    (<div  style={styles().containerPriceField}>
                        <span style={styles().priceFieldFont}>Total Amount:{'\u00A0'} 1,123 php</span>
                    </div>)
            }
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} style={{paddingTop: 11}} isNav={false} btnLabel="Submit" style={styles().containerButton}/>
        </div>
    )
}

export default PaymentInfo 