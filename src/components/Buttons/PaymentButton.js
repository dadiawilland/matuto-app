import React from 'react'
import styles from './PaymentButton.style'
// import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const PaymentButton = (props) => {

    const icon = require(`../../assets/${props.src}`).default;

    return (
        <StyleRoot>
            {/* <NavLink style={{textDecoration: 'none'}} to={props.dest}> */}
            <div>
                <div key="help" style={{...styles().containerBtnAltLogin, ...props.style}}>
                    <img key="img" style={styles().imgIcon} src={icon} alt="Sign in logo"/>
                    <span key="text" style={styles().btnFont}>{props.text}</span>
                </div>
            </div>
            {/* </NavLink> */}
        </StyleRoot>                                    
    )
}

export default PaymentButton