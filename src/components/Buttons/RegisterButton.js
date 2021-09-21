import React, { useState } from 'react'
import styles from './RegisterButton.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import registerIcon from '../../assets/icon-register.png'
import logoWhite from '../../assets/logo-white.png'

import { StyleRoot } from 'radium'

const RegisterButton = (props) => {

    const [isActive, setisActive] = useState(false)

    return (
        <StyleRoot>
            <div onClick={() => setisActive(!isActive)} style={{...styles(isActive).containerSearchFilter, ...props.style}}>
                    <img style={styles().searchFilterIconImg} src={registerIcon} alt="Matuto logo"/>
                    <span style={styles().fontSearchFilter}>Create Job Post</span>
            </div>
        </StyleRoot>

    )
}

export default RegisterButton