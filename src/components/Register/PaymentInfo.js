import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import styles from './PaymentInfo.style'
import ProcessButton from '../Buttons/ProcessButton'
import PaymentButton from '../Buttons/PaymentButton'
import NavButton from '../Buttons/NavButton';
import TextInput from '../TextInput/TextInput'
import { useLocation } from "react-router-dom";
import { FORM_FIELDS } from '../../constants/formConstants';
import { registerAccountAction, registerAccountOnlyAction } from '../../actions/accountActions';
import { StyleRoot } from 'radium'
import Register from './Register';
import { useHistory } from 'react-router-dom';


const PaymentInfo = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const {formState: { errors }, handleSubmit, control, getValues } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });
    const history = useHistory();

    const account = useSelector((state) => state.account.account);
    const accountLoginError = useSelector((state) => state.account.accountLoginError);

    const onSubmit = (data, e) => {
        data.paymentInfoType = 1;
        dispatch(registerAccountAction({
            account: location.state.account,
            paymentInfo: data,
        }));
        
    }

    const onError = (data, e) => {
        console.log(data);
    }

    const handleClick = () => {
        dispatch(registerAccountOnlyAction({
            account: location.state.account,
        }));
    }

    useEffect(() => {
        if(account.id && !accountLoginError) {
            history.push('/on-boarding')
        }
    }, [account, accountLoginError]);

    return (
        <div style={{...styles().containerForm, ...props.style}}>
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
                        <span style={styles().priceFieldFont}>Total Amount:{'\u00A0'} {props.amount}</span>
                    </div>)
            }
            <ProcessButton onClick={handleSubmit(onSubmit, onError)} style={{paddingTop: 11}} isNav={false} btnLabel="Submit" style={styles().containerButton}/>
            { props.isRegistration ? 
                // <NavButton title={'Skip'} dest="home" style={styles().containerButton} /> 
                <StyleRoot style={styles().containerSkipBtn}>
                    <span onClick={handleClick} style={styles().skipBtnFont}>Skip</span>
                </StyleRoot>
                : null}
        </div>
    )
}

export default PaymentInfo 