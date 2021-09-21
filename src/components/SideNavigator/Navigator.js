import React, { useState } from 'react'
import styles from './Navigator.style'
import logoWhite from '../../assets/logo-white.png'
import { StyleRoot } from 'radium'

const Navigator = (props) => {

    const icon = require(`../../assets/${props.src}`).default;
    const [isActive, setIsActive] = useState(false);

    return (
            <StyleRoot>
                <div onClick={() => setIsActive(!isActive)} style={styles().containerNavBtn}>
                    <img style={styles(isActive).navBtnImg} src={icon} alt="Matuto logo"/>
                    <span style={styles(isActive).fontNavBtn}>{props.name}</span>
                </div>
            </StyleRoot>
    )
}

export default Navigator