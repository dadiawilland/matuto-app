import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Admin.style';
import SideNavigator from '../../components/SideNavigator/SideNavigator';
import JobPostModal from '../../components/Modal/JobPostModal';
import CreatePartnerModal from '../../components/Modal/CreatePartnerModal';
import CareerMarket from '../../components/Admin/CareerMarket';
import StudentCenter from '../../components/Admin/StudentCenter';
import Recruitment from '../../components/Admin/Recruitment';
import Partners from '../../components/Admin/Partners';
import {
  clearJobPostSuccessAction,
  clearJobPostErrorAction,
  toggleJobPostModalAction,
  clearPartnerSuccessAction,
  clearPartnerErrorAction,
  toggleCreatePartnerModalAction
} from '../../actions/adminActions';

const Admin = () => {
  const dispatch = useDispatch();
  const jobPostModalVisible = useSelector(
    (state) => state.admin.jobPostModalVisible
  );
  const createPartnerModalVisible = useSelector(
    (state) => state.admin.createPartnerModalVisible
  );

  //job post success and error
  const jobPostSuccess = useSelector((state) => state.admin.jobPostSuccess);
  const jobPostError = useSelector((state) => state.admin.jobPostError);

  //partner create success and error
  const createPartnerSuccess = useSelector(
    (state) => state.admin.createPartnerSuccess
  );
  const createPartnerError = useSelector(
    (state) => state.admin.createPartnerError
  );
  const location = useLocation().pathname;

  const renderContent = () => {
    switch (location) {
      case '/admin':
      case '/admin-career':
        return <CareerMarket />;
      case '/admin-student':
        return <StudentCenter />;
      case '/admin-recruitment':
        return <Recruitment />;
      case '/admin-partner':
        return <Partners />;
    }
  };

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  useEffect(() => {
    if (jobPostSuccess) {
      notify('✔️ Job Post Created!');
      dispatch(toggleJobPostModalAction());
      dispatch(clearJobPostSuccessAction());
    }

    if (jobPostError) {
      notify('❌ Error Creating Job Post');
      dispatch(toggleJobPostModalAction());
      dispatch(clearJobPostErrorAction());
    }
  }, [jobPostSuccess, jobPostError]);

  useEffect(() => {
    if (createPartnerSuccess) {
      notify('✔️ Partner Created!');
      dispatch(toggleCreatePartnerModalAction());
      dispatch(clearPartnerSuccessAction());
    }

    if (createPartnerError) {
      console.log(createPartnerError);
      notify('❌ Error Creating Partner');
      dispatch(toggleCreatePartnerModalAction());
      dispatch(clearPartnerErrorAction());
    }
  }, [createPartnerSuccess, createPartnerError]);

  return (
    <div style={styles().containerAdmin}>
      <SideNavigator />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {renderContent()}
      {jobPostModalVisible && <JobPostModal />}
      {createPartnerModalVisible && <CreatePartnerModal />}
    </div>
  );
};

export default Admin;
