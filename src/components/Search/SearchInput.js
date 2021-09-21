import React, { useState } from 'react'
import styles from './SearchInput.style'
import searchIcon from '../../assets/icon-search.png'

const SearchInput = (props) => {

    const [val, setVal] = useState('');
    const [isActive, setisActive] = useState(false)

    return (
        <div style={{...styles((isActive || val != '')).containerSearchInput, ...props.style}}>
            <img style={styles((isActive || val != '')).searchIconImg} src={searchIcon} alt="Matuto logo"/>
            <input type={'text'}
                    style={styles().containerSearchField}
                    onChange={(e) => setVal(e.target.value)}
                    onFocus={() => setisActive(true)}
                    onBlur={() => setisActive(false)}
                    />
        </div>
    )
}

export default SearchInput