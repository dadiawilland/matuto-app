import React, { useState } from 'react';
import styles from './SearchInput.style';
import searchIcon from '../../assets/icon-search.png';
import Filter from './Filter';

const SearchInput = (props) => {
  const [val, setVal] = useState('');
  const [isActive, setisActive] = useState(false);

  const handleClose = () => {
    props.closeFilter(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.enterQueryParam(val);
    }
  };

  return (
    <div
      style={{
        ...styles(isActive || val != '').containerSearchInput,
        ...props.style
      }}
    >
      <img
        style={styles(isActive || val != '').searchIconImg}
        src={searchIcon}
        alt="Matuto logo"
      />
      {props.filter ? (
        <Filter key={1} onClickClose={handleClose} name={props.filter.title} />
      ) : null}

      <input
        type={'text'}
        style={styles().containerSearchField}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setisActive(true)}
        onBlur={() => setisActive(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
