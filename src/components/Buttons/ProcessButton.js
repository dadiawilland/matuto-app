import React, {useState, useEffect} from 'react'
import styles from './ProcessButton.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const ProcessButton = (props) => {

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        <StyleRoot>
            <NavLink to="/">
                <div key="help" style={{...styles().containerBtnSignIn, ...props.style}}>
                    <span style={styles().btnFont}>{props.btnLabel}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default ProcessButton