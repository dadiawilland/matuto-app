import React, { useState } from 'react'
import styles from './Navigator.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'

const Navigator = (props) => {
    const { src, title, name, onClick, isActive, dest } = props;
    const icon = require(`../../assets/${src}`).default;
    
    return (
            <StyleRoot>
                <NavLink onClick={() => onClick()} style={{textDecoration: 'none'}} to={dest}>
                    <div style={styles().containerNavBtn}>
                        <img style={styles(isActive).navBtnImg} src={icon} alt="Matuto logo"/>
                        <span style={styles(isActive).fontNavBtn}>{title}</span>
                    </div>
                </NavLink>
            </StyleRoot>
    )
}

export default Navigator