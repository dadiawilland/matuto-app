import React from 'react'
import styles from './NavButton.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const NavButton = (props) => {

    return (
        <StyleRoot>
            <NavLink style={{textDecoration: 'none'}} to={props.isDisabled ? '#' : props.dest}>
                <div key="help" style={{...styles().containerBtnSignIn, ...props.style}}>
                    <span style={styles().btnFont}>{props.title}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default NavButton