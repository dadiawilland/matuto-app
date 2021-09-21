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
            {/* <div style={styles().containerCardContent}>
                <StyleRoot>
                    <div style={styles().containerCardList}>
                        <PriceCard src={'icon-price-1.png'} title={'For Enterprise'} price={'Custom Pricing'}
                            content={`Tailor-fit gamified work-train program for you employees

                                        Connect with Matuto graduates and potential employees

                                        Post job openings

                                        Gain a company ad slot`}/>
                        <PriceCard src={'icon-price-2.png'} title={'For Individuals'} price={'1,499 php'} description={'per month'}
                            content={`Full Access to Matuto's work-train program

                                        Gain vouchers as you unlock skilss

                                        Get a certificate and a badge upon course completion

                                        Access job openings at our partner companies`}/>
                        <PriceCard src={'icon-price-3.png'} title={'For Team'} price={'1,499 php'} description={'per month and per employee'}
                            content={`Empower employees to enhance and master soft and hard skills through a gamified program

                                        Track employee progress realtime

                                        Create a more effective and efficient workplace

                                        Post Job openings`}/>
                    </div>
                </StyleRoot>
            </div>
            <ProcessButton isNav={false} btnLabel="Proceed" style={{...styles().containerButton,
                                                                          ...{display: isSelected ? 'flex' : 'flex'}}}/> */}
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