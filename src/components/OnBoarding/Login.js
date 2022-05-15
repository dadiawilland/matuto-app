import React, { useEffect, useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Login.style';
import common from './Common.style';
import { NavLink } from 'react-router-dom';
import ProcessButton from '../Buttons/ProcessButton';
import AltLoginButton from '../Buttons/AltLoginButton';
import TextInput from '../TextInput/TextInput';
import { FORM_FIELDS } from '../../constants/formConstants';
import { useHistory } from 'react-router-dom';
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { accountLoginService } from '../../services/account.service';
import { login, roles, useAuth } from '../../providers/CreateAuthProvider';

const Login = (props) => {
  const [logged] = useAuth();
  const history = useHistory();
  const { onboardingError, setOnboardingError } = useContext(
    OnboardingErrorContext
  );
  const { loading, setLoading } = useContext(LoadingContext);
  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = async (data, e) => {
    setLoading(true);
    const res = await accountLoginService(data);
    if (res.status === 200) {
      setOnboardingError(null);
      login(res.data);

      history.push('/register');
    } else {
      if (res.data.error === 'invalid_grant') {
        setOnboardingError('Incorrenct email or password');
      }
    }
    setTimeout(() => setLoading(false), 300);
  };

  const onError = (data, e) => {};

  const handleToRegister = () => {
    setOnboardingError(null);
    history.push('/register');
  };

  useEffect(() => {
    setOnboardingError(null);
    console.log(roles());
    console.log(logged);
  }, []);

  return (
    <div style={common().containerForm}>
      <span style={common().formTitleFont}>Login to Matuto</span>
      {FORM_FIELDS.LOGIN.map((formfield, i) => {
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
      <div style={styles().containerCheckbox}>
        <input style={styles().checkboxField} type="checkbox" />
        <span style={styles().checkboxFieldFont}>Keep me logged in</span>
      </div>
      <ProcessButton
        onClick={handleSubmit(onSubmit, onError)}
        isNav={false}
        btnLabel="Login"
        style={common().containerButton}
      />
      <div style={styles().containerBreak}>
        <div style={styles().breakLines} />
        <span style={styles().breakFont}>Or</span>
        <div style={styles().breakLines} />
      </div>
      <AltLoginButton
        dest="/"
        src={'icon-google.png'}
        text={'Sign in with Google'}
        style={common().containerButton}
      />
      <AltLoginButton
        dest="/"
        src={'icon-fb.png'}
        text={'Sign in with Facebook'}
        style={common().containerButton}
      />
      <p style={common().btnInlineFont}>
        Not a member yet?{' '}
        <span style={common().btnInlineLinkFont} onClick={handleToRegister}>
          Sign up here
        </span>
      </p>
    </div>
  );
};

export default Login;
