import React, { useState, useEffect } from 'react'
import styles from './SelectOption.style';

const SelectOption = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        console.log('asdasdadas')
    }, [])

    return (
            <div onClick={() => setIsSelected(!isSelected)} style={styles(isSelected).containerOption}>{props.title}</div>
    )
}

export default SelectOption