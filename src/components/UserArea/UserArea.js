import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'
import icon from '../../assets/icon-sample.png'
import styles from './UserArea.style'
import { StyleRoot } from 'radium'
import { NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <StyleRoot>            
            <div style={isActive ? styles().containerIconActive : styles().containerIcon}>
                <img onClick={() => setIsActive(!isActive)} key="img" style={isActive ? styles().imgIconActive : styles().imgIcon} src={icon} alt="Sign in logo"/>
            </div>
        </StyleRoot>
    )
}


export default Header