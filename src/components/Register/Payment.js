import React, {useState, useEffect} from 'react'
import styles from './Payment.style'
import bg from '../../assets/sign-in-bg.png'
import { StyleRoot } from 'radium'
import {NavLink} from 'react-router-dom'
import ProcessButton from '../../components/Buttons/ProcessButton'
import PaymentButton from '../../components/Buttons/PaymentButton'
import AltLoginButton from '../../components/Buttons/AltLoginButton'
import TextInput from '../../components/TextInput/TextInput'

const Payment = () => {

    // const userName

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        // <div style={styles().containerSignIn}>
        //     <div style={styles().containerLeft}>
        //         <span style={styles().copyFont}>Lifelong learning is a journey together.</span>
        //         <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
        //     </div>
        //     <div style={styles().containerRight}>
                <div style={styles().containerForm}>
                    <span style={styles().formTitleFont}>Register to Matuto</span>
                    <span style={styles().paymentTitleFont}>Payment Information</span>
                    <div style={styles().containerPaymentBtnRow}>
                        <PaymentButton src={'icon-creditcard.png'} text={'Creditcard'} style={styles().containerPaymentBtn}/>
                        <PaymentButton src={'icon-gcash.png'} text={'GCash'} style={styles().containerPaymentBtn}/>
                    </div>
                    <TextInput style={styles().containerInputField} type="text" name="nameOnCard" label="Name on Card"/>
                    <TextInput style={styles().containerInputField} type="text" name="cardNumber" label="Card Number"/>
                    <div style={styles().containerInputFieldRow}>
                        <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="password" name="cvv" label="CVV"/>
                        <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="password" name="expiryDate" label="Expiry Date"/>
                    </div>
                    <ProcessButton btnLabel="Next" style={styles().containerButton}/>
                </div>
        //     </div>
        // </div>
    )
}

export default Payment 