import React, { useEffect } from 'react';
import styles from './ProfileList.style';
import SideNavigator from '../../components/SideNavigator/SideNavigator';
import SearchBar from '../../components/Search/SearchBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DataTable from '../../components/DataTable/DataTable';
import AdminCard from '../../components/Cards/AdminCard';
import { StyleRoot } from 'radium';

const ProfileList = (props) => {
  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <StyleRoot>
      <div style={styles().containerCardContent}>
        <div style={styles().containerCardList}>
          {props.data?.map((account, i) => {
            return <AdminCard account={account} />;
          })}
          {/* <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/> */}
        </div>
      </div>
    </StyleRoot>
  );
};

export default ProfileList;
