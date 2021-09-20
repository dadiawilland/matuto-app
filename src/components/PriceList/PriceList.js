import React, { useState } from 'react'
import styles from './PriceList.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StyleRoot } from 'radium'
import NavButton from '../../components/Buttons/NavButton'

const PriceList = () => {

    const [isSelected, setisSelected] = useState(false);

    return (
        <div style={styles().containerPriceList}>
            <div style={styles().containerCardContent}>
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
            {/* <ProcessButton isNav={false} btnLabel="Proceed" style={{...styles().containerButton,
                                                                          ...{display: isSelected ? 'flex' : 'flex'}}}/> */}
            <NavButton dest="payment" style={styles().containerButton} />
        </div>
    )
}

export default PriceList