import React from 'react'
import styles from './SearchBar.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import filterIcon from '../../assets/icon-filter.png'
import logoWhite from '../../assets/logo-white.png'
import SearchInput from './SearchInput'
import { StyleRoot } from 'radium'
import FilterButton from '../Buttons/FilterButton'
import Filter from './Filter'


const SearchBar = () => {
    return (
        <div style={styles().containerSearchBar}>
            <FilterButton style={styles().containerFilterBtn}/>
            <SearchInput style={styles().containerSearchInput}/>
            <Filter name={'Willand'}/>
            <Filter name={'Borongan City'}/>
            <Filter name={'Borongan City'}/>
            <Filter name={'Borongan City'}/>
            <Filter name={'Borongan City'}/>
        </div>
    )
}

export default SearchBar