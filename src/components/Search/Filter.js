import React, { useState } from 'react'
import styles from './Filter.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import closeIcon from '../../assets/icon-close.png'
import logoWhite from '../../assets/logo-white.png'

import { StyleRoot } from 'radium'

const Filter = (props) => {

    const handleClose = () => {
        console.log(props.id)
        props.onClickClose(props.id)
    }

    return (
        <StyleRoot>
            <div style={{...styles().containerFilter, ...props.style}}>
                <span style={styles().fontFilter}>{props.name}</span>
                <img onClick={handleClose} style={styles().filterIconImg} src={closeIcon} alt="Close Icon"/>
            </div>
        </StyleRoot>

    )
}

export default Filter