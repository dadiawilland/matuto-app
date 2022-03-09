import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'
import styles from './Header.style'
import UserArea from '../UserArea/UserArea'
import { StyleRoot } from 'radium'
import { NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const location = useLocation().pathname
    const onBoardingLocations = ['/login', '/register', '/payment-info']
    const account = useSelector((state) => state.account.account);

    useEffect(() => {
        // console.log(account)
    })

    const renderHeader = (loc) => {
        // console.log(loc)
        switch(loc) {
            case '/login':
            case '/register':
            case '/payment-info':
            case '/step1':
            case '/step2':
            case '/step3':
                return  (<div>
                                <NavLink style={styles().containerLink} to="/">
                                    <span style={styles().btnFont} key="help">Help</span>
                                </NavLink>
                                <NavLink style={styles().containerLink} to="/">
                                    <span style={styles().btnFont} key="contact">Contact</span>
                                </NavLink>
                            </div>);
            case '/':
                return (<div>
                            <NavLink style={styles().containerLink} to="/login">
                                <span style={styles().btnFont} key="login">Login</span>
                            </NavLink>
                            <NavLink style={styles().containerLink} to="/register">
                                <span style={styles().btnFont} key="register">Register</span>
                            </NavLink>
                        </div>);
            default:
                return (<UserArea/>);
        }
    }

    return (
        <StyleRoot>            
            <div style={styles().containerHeader}>
                <div>
                    <NavLink to="/">
                        {(onBoardingLocations.includes(location)) ?
                        (<img style={styles().imgLogo} src={logoWhite} alt="Matuto logo white"/>)
                        :
                        (<img style={styles().imgLogo} src={logo} alt="Matuto logo"/>)}
                    </NavLink>
                </div>
                <div style={styles().containerBtn}>
                    {renderHeader(location)}
                </div>
            </div>
        </StyleRoot>
    )
}


export default Header