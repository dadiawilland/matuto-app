import React from 'react'
import styles from './AltLoginButton.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const AltLoginButton = (props) => {

    const icon = require(`../../assets/${props.src}`).default;

    return (
        <StyleRoot>
            <NavLink style={{textDecoration: 'none'}} to={props.dest}>
                <div key="help" style={{...styles().containerBtnAltLogin, ...props.style}}>
                    <img key="img" style={styles().imgIcon} src={icon} alt="Sign in logo"/>
                    <span key="text" style={styles().btnFont}>{props.text}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default AltLoginButton