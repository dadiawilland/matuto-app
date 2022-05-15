import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './AdminHeader.style';
import SideNavigator from '../../components/SideNavigator/SideNavigator';
import SearchBar from '../../components/Search/SearchBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DataTable from '../../components/DataTable/DataTable';
import AdminCard from '../../components/Cards/AdminCard';
import ProfileList from '../../components/ProfileList/ProfileList';
import { StyleRoot } from 'radium';
import RegisterButton from '../../components/Buttons/RegisterButton';

const AdminHeader = (props) => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const [title, setTitle] = useState('Career Market');
  const [headerButton, setHeaderButton] = useState(null);
  const [iconImg, setIconImg] = useState('icon-career-market.png');
  const icon = require(`../../assets/${iconImg}`).default;

  useEffect(() => {
    // TODO: add close modal effect here on show
    switch (location) {
      case '/admin':
      case '/admin-career':
        // TODO: add navigation to career
        setTitle('Career Market');
        setHeaderButton(null);
        setIconImg('icon-career-market.png');
        return;
      case '/admin-student':
        // TODO: add navigation to student center
        setTitle('Student Center');
        setHeaderButton(null);
        setIconImg('icon-student-center.png');
        return;
      case '/admin-recruitment':
        // TODO: add navigation to student center
        setTitle('Recruitment');
        setHeaderButton(
          <RegisterButton
            title={'Create Job Post'}
            onClick={() => console.log()}
          />
          // TODO: add toggle show job post modal
        );
        setIconImg('icon-recruitment.png');
        return;
      case '/admin-partner':
        // TODO: add navigation to partner
        setTitle('Partners');
        setHeaderButton(
          <RegisterButton
            title={'Create Partner'}
            onClick={() => console.log()}
          />
          // TODO: add toggle show create partmer modal Action
        );
        setIconImg('icon-partners.png');
        return;
    }
  }, [location]);

  return (
    <div style={styles().containerHeader}>
      <div style={styles().containerTitle}>
        <img style={styles().titleImg} src={icon} alt="Matuto logo" />
        <span style={styles().fontTitle}>{title}</span>
      </div>
      {headerButton}
    </div>
  );
};

export default AdminHeader;
