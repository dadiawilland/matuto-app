import React from 'react'
import styles from './Payment.style'
import ProcessButton from '../../components/Buttons/ProcessButton'
import PaymentButton from '../../components/Buttons/PaymentButton'
import TextInput from '../../components/TextInput/TextInput'

const Payment = () => {

    return (
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
            <ProcessButton style={{paddingTop: 11}} isNav={false} btnLabel="Submit" style={styles().containerButton}/>
        </div>
    )
}

export default Payment 