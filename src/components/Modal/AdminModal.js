import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import styles from './AdminModal.style'
import SideNavigator from '../../components/SideNavigator/SideNavigator'
import SearchBar from '../../components/Search/SearchBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import DataTable from '../../components/DataTable/DataTable'
import AdminCard from '../../components/Cards/AdminCard';
import ProfileList from '../../components/ProfileList/ProfileList'
import { StyleRoot } from 'radium'
import RegisterButton from '../../components/Buttons/RegisterButton';
import AdminHeader from '../../components/Header/AdminHeader';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import ProcessButton from '../../components/Buttons/ProcessButton';
import CloseButton from '../../components/Buttons/CloseButton';
import { toggleJobPostModal } from '../../actions/adminActions';
import { FORM_FIELDS } from '../../constants/formConstants';

const AdminModal = () => {
    const dispatch = useDispatch();
    const jobPostModalVisible = useSelector((state) => state.admin.jobPostModalVisible);
    const {formState: { errors }, handleSubmit, control, getValues, reset } = useForm({
        mode: 'onSubmit', 
        reValidateMode: 'onSubmit'
    });

    const onSubmit = (data, e) => {
        console.log(data);
    }

    const onError = (data, e) => {
        console.log(data);
    }

    const closeModal = () => {
        reset();
        dispatch(toggleJobPostModal());
    }


    return (
            <div style={styles(jobPostModalVisible).containerModal}>
                <div style={styles().containerForm}>
                    <span style={styles().fontModalTitle}>Create Job Post</span>
                    <CloseButton style={styles().closeButtonContainer} onClick={() => closeModal()}/>
                    <div style={styles().containerFormBody}>
                        {FORM_FIELDS.JOB_POST.map((formfield, i) => {
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
                                                    render={({
                                                        field: { onChange, value  }
                                                        }) => 
                                                        <TextInput onChange={onChange} val={value} style={{...styles().containerInputField, ...styles().containerInputFieldSml}} type={subFormField.type} 
                                                            name={subFormField.name} label={subFormField.label} error={errors[subFormField.name]}/>
                                                    }
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
                                        render={({
                                            field: { onChange, value }
                                            }) => 
                                            <TextArea onChange={onChange} val={value} style={{...styles().containerInputField}} type={formfield.type} 
                                                name={formfield.name} label={formfield.label} error={errors[formfield.name]}/>
                                        }
                                    />
                                );
                            }
                        })}
                    </div>
                    <ProcessButton onClick={handleSubmit(onSubmit, onError)} isNav={false} btnLabel="Submit" style={styles().containerButton}/>
                </div>
            </div>
    )
}

export default AdminModal