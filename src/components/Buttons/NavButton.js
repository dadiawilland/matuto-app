import React, {useState, useEffect} from 'react'
import styles from './NavButton.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const NavButton = () => {

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        <StyleRoot>
            <NavLink to="/">
                <div key="help" style={styles().containerBtnSignIn}>
                    <span style={styles().btnFont}>Get Started</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default NavButton