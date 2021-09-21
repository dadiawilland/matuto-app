import React, { useState } from 'react'
import styles from './FilterButton.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import filterIcon from '../../assets/icon-filter.png'
import logoWhite from '../../assets/logo-white.png'

import { StyleRoot } from 'radium'

const FilterButton = (props) => {

    const [isActive, setisActive] = useState(false)

    return (
        <StyleRoot>
            <div onClick={() => setisActive(!isActive)} style={{...styles(isActive).containerSearchFilter, ...props.style}}>
                    <img style={styles().searchFilterIconImg} src={filterIcon} alt="Matuto logo"/>
                    <span style={styles().fontSearchFilter}>Filter</span>
            </div>
        </StyleRoot>

    )
}

export default FilterButton