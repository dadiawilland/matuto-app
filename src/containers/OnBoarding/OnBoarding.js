import React, { useState, useMemo, useContext, useEffect } from 'react';
import styles from './OnBoarding.style';
import bg from '../../assets/sign-in-bg.png';
import loadingGif from '../../assets/loading.gif';
import Login from '../../components/OnBoarding/Login';
import Register from '../../components/OnBoarding/Register';
import PaymentInfo from '../../components/OnBoarding/PaymentInfo';
import { useLocation } from 'react-router-dom';
import Step1 from '../../components/OnBoarding/Step1';
import Step2 from '../../components/OnBoarding/Step2';
import Step3 from '../../components/OnBoarding/Step3';
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { UserContext } from '../../contexts/UserContext';

const SignIn = () => {
  const [onboardingError, setOnboardingError] = useState();
  const error = useMemo(
    () => ({ onboardingError, setOnboardingError }),
    [onboardingError, setOnboardingError]
  );

  const [loading, setLoading] = useState();
  const isLoading = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading]
  );

  const location = useLocation().pathname;

  const renderBody = (loc, context) => {
    switch (loc) {
      case '/register':
        return <Register userContext={context} title={'Register to Matuto'} />;
      case '/payment-info':
        return (
          <PaymentInfo
            userContext={context}
            title={'Register to Matuto'}
            isRegistration={true}
          />
        );
      case '/step1':
        return <Step1 userContext={context} title={'Select an Avatar'} />;
      case '/step2':
        return <Step2 userContext={context} />;
      case '/step3':
        return <Step3 userContext={context} title={'Select an Avatar'} />;
      default:
        return <Login userContext={context} />;
    }
  };

  return (
    <div style={styles().containerOnboarding}>
      <UserContext.Consumer>
        {(value) => (
          <LoadingContext.Provider value={isLoading}>
            {loading ? <LoadingModal /> : null}
            <div style={styles().containerLeft}>
              <span style={styles().copyFont}>
                Lifelong learning is a journey together.
              </span>
              <img style={styles().imgBg} src={bg} alt="Matuto logo white" />
            </div>
            <div style={styles().containerRight}>
              <OnboardingErrorContext.Provider value={error}>
                <OnboardingErrorMessage />
                {renderBody(location, value)}
              </OnboardingErrorContext.Provider>
            </div>
          </LoadingContext.Provider>
        )}
      </UserContext.Consumer>
    </div>
  );
};

const LoadingModal = () => {
  const [gif, setGif] = useState(loadingGif);
  const { loading, setLoading } = useContext(LoadingContext);

  const reloadGif = () => {
    setGif(loadingGif.replace(/\?.*$/, '') + '?x=' + Math.random());
    setTimeout(() => {
      setGif(loadingGif);
    }, 0);
  };

  useEffect(() => {
    reloadGif();
    console.log(gif);
  }, [loading]);

  return (
    <div style={styles().containerLoading}>
      {gif !== '' && (
        <img style={styles().imgLoadingGif} src={gif} alt="loading" />
      )}
    </div>
  );
};

const OnboardingErrorMessage = () => {
  const { onboardingError } = useContext(OnboardingErrorContext);
  return (
    <div style={styles().containerOnboardingErrorMessage}>
      {!!onboardingError ? (
        <div style={styles().containerMessage}>
          <span>{onboardingError}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SignIn;
