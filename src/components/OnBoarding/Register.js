import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Register.style';
import common from './Common.style';
import ProcessButton from '../../components/Buttons/ProcessButton';
import TextInput from '../../components/TextInput/TextInput';
import { FORM_FIELDS } from '../../constants/formConstants';
import { useHistory } from 'react-router-dom';
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { APIService } from '../../services/APIService';

const Register = (props) => {
  const API = APIService();
  const history = useHistory();
  const { onboardingError, setOnboardingError } = useContext(
    OnboardingErrorContext
  );
  const { loading, setLoading } = useContext(LoadingContext);
  const {
    formState: { errors },
    handleSubmit,
    control,
    getValues
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = async (data, e) => {
    setLoading(true);
    const res = await API.registerAccount({
      user: data
    });
    console.log(res);
    if (res.status == 200) {
      setOnboardingError(null);
      history.push({
        pathname: '/payment-info',
        state: { id: res.data.user.id }
      });
    } else {
      setOnboardingError(res.data.error);
    }
    setTimeout(() => setLoading(false), 300);
  };

  const onError = (data, e) => {};

  const handleGoBack = () => {
    history.push('/login');
  };

  useEffect(() => {
    setOnboardingError(null);
  }, []);

  return (
    <div style={common().containerForm}>
      <span style={common().formTitleFont}>{props.title}</span>
      <div style={common().containerInputFieldRow}>
        {FORM_FIELDS.REGISTER_NAME.map((formfield, i) => {
          return (
            <Controller
              key={i}
              control={control}
              name={formfield.name}
              rules={formfield.validators}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChange={onChange}
                  val={value}
                  style={{
                    ...common().containerInputField,
                    ...common().containerInputFieldSml
                  }}
                  type={formfield.type}
                  name={formfield.name}
                  label={formfield.label}
                  error={errors[formfield.name]}
                />
              )}
            />
          );
        })}
      </div>
      <div style={common().containerInputFields}>
        {FORM_FIELDS.REGISTER.map((formfield, i) => {
          if (formfield.name === 'passwordConfirm') {
            formfield.validators = {
              ...formfield.validators,
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || 'Passwords should match!';
                }
              }
            };
          }
          return (
            <Controller
              key={i}
              control={control}
              name={formfield.name}
              rules={formfield.validators}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChange={onChange}
                  val={value}
                  style={common().containerInputField}
                  type={formfield.type}
                  name={formfield.name}
                  label={formfield.label}
                  error={errors[formfield.name]}
                />
              )}
            />
          );
        })}
      </div>
      <ProcessButton
        onClick={handleSubmit(onSubmit, onError)}
        isNav={false}
        dest={'payment-info'}
        btnLabel="Next"
        style={common().containerButton}
      />
      <span style={common().btnInlineLinkFont} onClick={handleGoBack}>
        back
      </span>
    </div>
  );
};

export default Register;
