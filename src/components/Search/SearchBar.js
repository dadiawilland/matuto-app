import React, { useState, useEffect } from 'react'
import styles from './SearchBar.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import filterIcon from '../../assets/icon-filter.png'
import logoWhite from '../../assets/logo-white.png'
import SearchInput from './SearchInput'
import { StyleRoot } from 'radium'
import FilterButton from '../Buttons/FilterButton'
import Filter from './Filter'


const SearchBar = (props) => {

    const [filter, setFilter] = useState()
    const [filterList, setFilterList] = useState([])

    useEffect(() => {
 
    }, [])

    const handleOnSelectFilter = (e) => {
        setFilter(e)
        console.log(filter)
    }

    const handleQueryParam = (e) => {
        props.setQueryParam({queryName: filter, value: e})
        if(filter !== undefined && filter) {
            let hasPair = false
            filterList.forEach((obj) => {
                if(filter.id == obj.id) {
                    obj.value = e
                    hasPair = true
                }
            });
            if(!hasPair) {
                filter.value = e
                filterList.push(filter)
            }
        }
    }

    const handleClose = (e) => {
        props.removeQueryParam(filterList.filter(filter => filter.id === e)[0].key)
        setFilterList(filterList.filter(filter => filter.id !== e))
    }

    return (
        <div style={styles().containerSearchBar}>
            <FilterButton onSelect={handleOnSelectFilter} style={styles().containerFilterBtn}/>
            <SearchInput enterQueryParam={handleQueryParam} closeFilter={handleOnSelectFilter} filter={filter} style={styles().containerSearchInput}/>
                {filterList?.map((filter, i) => {
                    console.log(filterList)
                    return (
                        <Filter onClickClose={handleClose} id={filter ? filter.id : null} key={i} name={filter? filter.value : null}/>
                    );
                })}
        </div>
    )
}

export default SearchBar