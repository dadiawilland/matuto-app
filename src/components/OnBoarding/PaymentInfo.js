import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import styles from './PaymentInfo.style';
import common from './Common.style';
import ProcessButton from '../Buttons/ProcessButton';
import PaymentButton from '../Buttons/PaymentButton';
import NavButton from '../Buttons/NavButton';
import TextInput from '../TextInput/TextInput';
import { useLocation } from 'react-router-dom';
import { FORM_FIELDS } from '../../constants/formConstants';
import {
  registerAccountAction,
  registerAccountOnlyAction
} from '../../actions/accountActions';
import { StyleRoot } from 'radium';
import Register from './Register';
import { useHistory } from 'react-router-dom';
import { registerPaymentInfoService } from '../../services/account.service';
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';

const PaymentInfo = (props) => {
  const location = useLocation();
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
    const req = {
      user_id: location.state.id,
      payment_type: 1
    };
    setLoading(true);
    const res = await registerPaymentInfoService({
      paymentInfo: { ...data, ...req }
    });
    if (res.status == 200) {
      setOnboardingError(null);
      history.push('/step1');
    } else {
      setOnboardingError(res.data.error);
    }
    setTimeout(() => setLoading(false), 300);
  };

  const onError = (data, e) => {};

  const handleSkip = () => {
    history.push('/step1');
  };

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div style={{ ...common().containerForm, ...props.style }}>
      <span style={common().formTitleFont}>{props.title}</span>
      <span style={styles().paymentTitleFont}>Payment Information</span>
      <div style={styles().containerPaymentBtnRow}>
        <PaymentButton
          src={'icon-creditcard.png'}
          text={'Creditcard'}
          style={styles().containerPaymentBtn}
        />
        <PaymentButton
          src={'icon-gcash.png'}
          text={'GCash'}
          style={styles().containerPaymentBtn}
        />
      </div>
      <div style={common().containerInputFields}>
        {FORM_FIELDS.PAYMENT_INFO.map((formfield, i) => {
          if (formfield.subFields) {
            return (
              <div key={i} style={common().containerInputFieldRow}>
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
                            ...common().containerInputField,
                            ...common().containerInputFieldSml
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
                  <TextInput
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
        style={common().containerButton}
      />
      <span style={common().btnInlineLinkFont} onClick={handleSkip}>
        skip
      </span>
    </div>
  );
};

export default PaymentInfo;
