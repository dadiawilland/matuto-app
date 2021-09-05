import React, {Component, useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'
import styles from './Header.style'
import { StyleRoot } from 'radium'
import { BrowserRouter, Route, NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const location = useLocation().pathname

    return (
        <StyleRoot>            
            <div style={styles().containerHeader}>
                <div>
                    <NavLink to="/">
                        {(location == ('/signIn' || '/signUp')) ?
                        (<img style={styles().imgLogo} src={logoWhite} alt="Matuto logo white"/>)
                        :
                        (<img style={styles().imgLogo} src={logo} alt="Matuto logo"/>)}
                    </NavLink>
                </div>
                <div style={styles().containerBtn}>
                    {
                        (location == ('/signIn' || '/signUp')) ?
                        (
                            <div>
                                <NavLink style={styles().containerLink} to="/">
                                    <span style={styles().btnFont} key="help">Help</span>
                                </NavLink>
                                <NavLink style={styles().containerLink} to="/">
                                    <span style={styles().btnFont} key="contact">Contact</span>
                                </NavLink>
                            </div>
                        )
                        :
                        (
                            <div>
                                <NavLink style={styles().containerLink} to="/signIn">
                                    <span style={styles().btnFont} key="signIn">Sign In</span>
                                </NavLink>
                                <NavLink style={styles().containerLink} to="/signUp">
                                    <span style={styles().btnFont} key="signUp">Sign Up</span>
                                </NavLink>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        </StyleRoot>
    )
}


export default Header