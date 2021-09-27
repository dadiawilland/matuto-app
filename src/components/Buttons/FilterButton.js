import React, { useState } from 'react'
import styles from './FilterButton.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import filterIcon from '../../assets/icon-filter.png'
import logoWhite from '../../assets/logo-white.png'

import { StyleRoot } from 'radium'

const FilterButton = (props) => {

    const selectFilter = (opt) => {
        setisActive(false)
        props.onSelect(opt);            
    }

    const [isActive, setisActive] = useState(false)
    const [selected, setSelected] = useState()
    const [options, setOptions] = useState({
        option: [
          {
              id: 0,
              title: 'First Name',
              selected: false,
              key: 'firstName'
          },
          {
              id: 1,
              title: 'Last Name',
              selected: false,
              key: 'lastName'
          },
          {
              id: 2,
              title: 'Email Address',
              selected: false,
              key: 'emailAddress'
          },
          {
              id: 3,
              title: 'Contact Number',
              selected: false,
              key: 'contactNumber'
          },
          {
              id: 4,
              title: 'User Status',
              selected: false,
              key: 'userStatus'
          }
        ]
       })

    return (
        <StyleRoot>
            <div onClick={() => setisActive(!isActive)} style={{...styles(isActive).containerSearchFilter, ...props.style}}>
                    <img style={styles(isActive).searchFilterIconImg} src={filterIcon} alt="Matuto logo"/>
                    <span style={styles(isActive).fontSearchFilter}>Filter</span>
            </div>
            <div style={styles(isActive).itemList}>
                {options.option.map((option) => (
                    <div onClick={() => selectFilter(option)} key={option.id} style={styles(isActive).item}>
                        <span key={option.key} style={styles(isActive).fontItem}>{option.title}</span>
                    </div>
                ))}
                {/* <div key={1} style={styles(isActive).item}>
                    <span key={6} style={styles(isActive).fontItem}>Filter</span>
                </div>
                <div key={2}  style={styles(isActive).item}>
                    <span key={7} style={styles(isActive).fontItem}>Filter</span>
                </div>
                <div key={3}  style={styles(isActive).item}>
                    <span key={8} style={styles(isActive).fontItem}>Filter</span>
                </div>
                <div key={4}  style={styles(isActive).item}>
                    <span key={9} style={styles(isActive).fontItem}>Filter</span>
                </div>
                <div key={5}  style={styles(isActive).item}>
                    <span key={10} style={styles(isActive).fontItem}>Filter</span>
                </div> */}
            </div>
        </StyleRoot>

    )
}

export default FilterButton