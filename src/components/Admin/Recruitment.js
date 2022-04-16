import React, { useState, useEffect } from 'react';
import styles from './Recruitment.style';
import SearchBar from '../../components/Search/SearchBar';
import DataTable from '../../components/DataTable/DataTable';
import AdminHeader from '../../components/Header/AdminHeader';
import { useHistory } from 'react-router-dom';

const Recruitment = () => {
  const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [queryParam, setQueryParam] = useState(new Map());

  useEffect(() => {
    getAccounts();
  }, []);

  async function getAccounts() {
    let response = await registerAccount();
    setSearchResult(response);
  }

  const requestOptions = () => {
    return {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
  };

  function registerAccount() {
    let resAccount = null;
    return new Promise((resolve) => {
      fetch(
        'http://localhost:3001/api/account/' + window.location.search,
        requestOptions()
      )
        .then((res) => res.json())
        .then((res) => {
          resAccount = res;
          console.log(resAccount);
          resolve(resAccount);
        });
    });
  }

  const handleSetQueryParam = (e) => {
    if (e.queryName.key !== null && e.value !== null) {
      queryParam.set(e.queryName.key, e.value);
    }

    history.push({
      pathname: '/admin-recruitment',
      search: '?' + new URLSearchParams(queryParam).toString()
    });

    getAccounts();
  };

  const handleRemoveQueryParam = (e) => {
    queryParam.delete(e);
    history.push({
      pathname: '/admin-recruitment',
      search: '?' + new URLSearchParams(queryParam).toString()
    });

    getAccounts();
  };

  return (
    <div style={styles().containerContent}>
      <AdminHeader />
      <SearchBar
        removeQueryParam={handleRemoveQueryParam}
        setQueryParam={handleSetQueryParam}
      />
      <DataTable data={searchResult} />
    </div>
  );
};

export default Recruitment;
