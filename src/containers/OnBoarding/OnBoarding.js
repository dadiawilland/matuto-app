import React from 'react'
import styles from './OnBoarding.style'
import bg from '../../assets/sign-in-bg.png'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Payment from '../../components/Register/Payment'
import { useLocation } from "react-router-dom";

const SignIn = () => {

    const location = useLocation().pathname

    const renderBody = (loc) => {
        switch(loc) {
            case '/register':
              return <Register/>;
            case '/payment':
                return <Payment/>;
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