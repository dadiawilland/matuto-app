import React from 'react'
import styles from './OnBoarding.style'
import bg from '../../assets/sign-in-bg.png'
import Login from '../../components/OnBoarding/Login'
import Register from '../../components/OnBoarding/Register'
import PaymentInfo from '../../components/OnBoarding/PaymentInfo'
import { useLocation } from "react-router-dom";
import Step1 from '../../components/OnBoarding/Step1'
import Step2 from '../../components/OnBoarding/Step2'

const SignIn = () => {

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
                {renderBody(location)}
            </div>
        </div>
    )
}

export default SignIn 