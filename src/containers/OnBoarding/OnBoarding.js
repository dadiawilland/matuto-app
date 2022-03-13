import React, { useState, useMemo, useContext } from 'react'
import styles from './OnBoarding.style'
import bg from '../../assets/sign-in-bg.png'
import Login from '../../components/OnBoarding/Login'
import Register from '../../components/OnBoarding/Register'
import PaymentInfo from '../../components/OnBoarding/PaymentInfo'
import { useLocation } from "react-router-dom";
import Step1 from '../../components/OnBoarding/Step1'
import Step2 from '../../components/OnBoarding/Step2'
import Step3 from '../../components/OnBoarding/Step3'
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext'

const SignIn = () => {

  const [ onboardingError, setOnboardingError ] = useState()
  const value = useMemo(() => (
    { onboardingError, setOnboardingError }),
    [ onboardingError, setOnboardingError ]
  );

  const location = useLocation().pathname

  const renderBody = (loc) => {
    switch(loc) {
      case '/register':
        return <Register title={'Register to Matuto'}/>;
      case '/payment-info':
        return <PaymentInfo title={'Register to Matuto'} isRegistration={true}/>;
      case '/step1':
        return <Step1 title={'Select an Avatar'}/>
      case '/step2':
        return <Step2/>
      case '/step3':
        return <Step3 title={'Select an Avatar'}/>
      default:
        return <Login/>;
    }
  }

  return (
    <div style={styles().containerSignIn}>
      <div style={styles().containerLeft}>
        <span style={styles().copyFont}>Lifelong learning is a journey together.</span>
        <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
      </div>
      <div style={styles().containerRight}>
        <OnboardingErrorContext.Provider value={value}>
          <OnboardingErrorMessage />
          {renderBody(location)}
        </OnboardingErrorContext.Provider>
      </div>
    </div>
  )
}

const OnboardingErrorMessage = () => {
  const { onboardingError } = useContext(OnboardingErrorContext)
  return (
    <div style={styles().containerOnboardingErrorMessage}>
      { !!onboardingError ?
        (
          <div style={styles().containerMessage}>
            <span>
              { onboardingError }
            </span>
          </div>
        )
        :
        (
          <div></div>
        )
      }
    </div>
  )
}

export default SignIn;