import React from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'
import icon from '../../assets/icon-sample.png'
import styles from './Header.style'
import { StyleRoot } from 'radium'
import { NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const location = useLocation().pathname
    const onBoardingLocations = ['/login', '/register', '/payment']
    // const icon = require(`../../assets/icon-sample.png`);

    const renderHeader = (loc) => {
        switch(loc) {
            case '/login':
            case '/register':
            case '/payment':
              return  (<div>
                            <NavLink style={styles().containerLink} to="/">
                                <span style={styles().btnFont} key="help">Help</span>
                            </NavLink>
                            <NavLink style={styles().containerLink} to="/">
                                <span style={styles().btnFont} key="contact">Contact</span>
                            </NavLink>
                        </div>);
            case '/a':
                return (<div>
                            <NavLink style={styles().containerLink} to="/login">
                                <span style={styles().btnFont} key="login">Login</span>
                            </NavLink>
                            <NavLink style={styles().containerLink} to="/register">
                                <span style={styles().btnFont} key="register">Register</span>
                            </NavLink>
                        </div>);
            default:
                return (<div style={styles().containerIcon}>
                            <img key="img" style={styles().imgIcon} src={icon} alt="Sign in logo"/>
                        </div>);
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