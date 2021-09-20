import React from 'react'
import styles from './PaymentInfo.style'
import ProcessButton from '../Buttons/ProcessButton'
import PaymentButton from '../Buttons/PaymentButton'
import TextInput from '../TextInput/TextInput'

const PaymentInfo = (props) => {

    return (
        <div style={styles().containerForm}>
            <span style={styles().formTitleFont}>{props.title}</span>
            <span style={styles().paymentTitleFont}>Payment Information</span>
            <div style={styles().containerPaymentBtnRow}>
                <PaymentButton src={'icon-creditcard.png'} text={'Creditcard'} style={styles().containerPaymentBtn}/>
                <PaymentButton src={'icon-gcash.png'} text={'GCash'} style={styles().containerPaymentBtn}/>
            </div>
            <div style={styles().containerInputFields}>
                <TextInput style={styles().containerInputField} type="text" name="nameOnCard" label="Name on Card"/>
                <TextInput style={styles().containerInputField} type="text" name="cardNumber" label="Card Number"/>
                <div style={styles().containerInputFieldRow}>
                    <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="password" name="cvv" label="CVV"/>
                    <TextInput style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type="password" name="expiryDate" label="Expiry Date"/>
                </div>
            </div>
            <div style={styles().containerPriceField}>
                <span style={styles().priceFieldFont}>Total Amount:{'\u00A0'} 1,123 php</span>
            </div>
            <ProcessButton style={{paddingTop: 11}} isNav={false} btnLabel="Submit" style={styles().containerButton}/>
        </div>
    )
}

export default PaymentInfo 