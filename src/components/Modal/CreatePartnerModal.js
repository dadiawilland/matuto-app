import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import styles from './CreatePartnerModal.style';
import SideNavigator from '../SideNavigator/SideNavigator';
import SearchBar from '../Search/SearchBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DataTable from '../DataTable/DataTable';
import AdminCard from '../Cards/AdminCard';
import ProfileList from '../ProfileList/ProfileList';
import { StyleRoot } from 'radium';
import RegisterButton from '../Buttons/RegisterButton';
import AdminHeader from '../Header/AdminHeader';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import ProcessButton from '../Buttons/ProcessButton';
import CloseButton from '../Buttons/CloseButton';
import {
  toggleCreatePartnerModalAction,
  createPartnerAction
} from '../../actions/adminActions';
import { FORM_FIELDS } from '../../constants/formConstants';

const CreatePartnerModal = () => {
  const dispatch = useDispatch();
  const {
    formState: { errors },
    handleSubmit,
    control,
    getValues,
    reset
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = (data, e) => {
    dispatch(createPartnerAction(data));
    console.log(data);
  };

  const onError = (data, e) => {
    console.log(data);
  };

  const closeModal = () => {
    reset();
    dispatch(toggleCreatePartnerModalAction());
  };

  return (
    <div style={styles().containerModal}>
      <div style={styles().containerForm}>
        <span style={styles().fontModalTitle}>Create Partner Application</span>
        <CloseButton
          style={styles().closeButtonContainer}
          onClick={() => closeModal()}
        />
        <div style={styles().containerFormBody}>
          {FORM_FIELDS.CREATE_PARTNER.map((formfield, i) => {
            if (formfield.subFields) {
              return (
                <div key={i} style={styles().containerInputFieldRow}>
                  {formfield.subFields.map((subFormField, ii) => {
                    return (
                      <Controller
                        key={ii}
                        control={control}
                        name={subFormField.name}
                        rules={subFormField.validators}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <TextInput
                            onChange={onChange}
                            val={value}
                            style={{
                              ...styles().containerInputField,
                              ...styles().containerInputFieldSml
                            }}
                            type={subFormField.type}
                            name={subFormField.name}
                            label={subFormField.label}
                            error={errors[subFormField.name]}
                          />
                        )}
                      />
                    );
                  })}
                </div>
              );
            } else {
              return (
                <Controller
                  key={i}
                  control={control}
                  name={formfield.name}
                  rules={formfield.validators}
                  render={({ field: { onChange, value } }) => (
                    <TextArea
                      onChange={onChange}
                      val={value}
                      style={{ ...styles().containerInputField }}
                      type={formfield.type}
                      name={formfield.name}
                      label={formfield.label}
                      error={errors[formfield.name]}
                    />
                  )}
                />
              );
            }
          })}
        </div>
        <ProcessButton
          onClick={handleSubmit(onSubmit, onError)}
          isNav={false}
          btnLabel="Submit"
          style={styles().containerButton}
        />
      </div>
    </div>
  );
};

export default CreatePartnerModal;
