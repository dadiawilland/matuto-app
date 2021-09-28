import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from './Payment.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import { StyleRoot } from 'radium'
import ProcessButton from '../../components/Buttons/ProcessButton'
import PaymentInfo from '../Register/PaymentInfo'
const Payment = () => {

    const [isSelected, setisSelected] = useState(false);
    const selectedPrice = useSelector((state) => state.price.selectedPrice);
    useEffect(() => {
        console.log(selectedPrice);
    }, [selectedPrice]);

    return (
        <div style={styles().containerPayment}>
            <div style={styles().containerLeft}>
                <PriceCard price={selectedPrice} isAlwaysActive={true}/>
            </div>
            <div style={styles().containerRight}>
                <PaymentInfo title={'Bank Details'} isRegistration={false}/>
            </div> 
        </div>
    )
}

export default Payment;