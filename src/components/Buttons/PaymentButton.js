import React, {useState, useEffect} from 'react'
import styles from './PaymentButton.style'
import bg from '../../assets/icon-google.png'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const PaymentButton = (props) => {

    // const photo = require(`../../assets/images/${obj.photo}`).default;
    const icon = require(`../../assets/${props.src}`).default;
    useEffect(() => {
        console.log(bg)
    });

    return (
        <StyleRoot>
            <NavLink to="/signIn">
                <div key="help" style={{...styles().containerBtnAltLogin, ...props.style}}>
                    <img key="img" style={styles().imgIcon} src={icon} alt="Sign in logo"/>
                    <span key="text" style={styles().btnFont}>{props.text}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default PaymentButton