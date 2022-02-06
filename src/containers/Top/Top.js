import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './Top.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StyleRoot } from 'radium'
import FreeCourse from '../../components/FreeCourse/FreeCourse'
import PriceList from '../../components/PriceList/PriceList'
import Payment from '../../components/Payment/Payment'
import OnBoarding from '../../components/OnBoarding/OnBoarding'
import HomeSubscribed from '../../components/Subscribed/HomeSubscribed'
import HomeSubscribedMap from '../../components/Subscribed/HomeSubscribedMap'
import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation().pathname

    const account = useSelector((state) => state.account.account);

    useEffect(() => {
        console.log(account)
    })

    const renderContent = (loc) => {

        if (account.access_token !== '' && loc == '/home') {
            return <HomeSubscribed/>
        }

        switch(loc) {
            case '/home':
                return <FreeCourse/>
            case '/pricing':
                return <PriceList/>
            case '/payment':
                return <Payment/>
            case '/on-boarding':
                return <OnBoarding/>
            case '/lesson':
                return <HomeSubscribedMap/>

        }
    }

    const renderHeader = (loc) => {

        if (account.access_token !== '' && loc == '/home') {
            return 'Continue your Journey'
        }

        switch(loc) {
            case '/home':
                return 'Free Courses'
            case '/pricing':
                return 'Select Package'
            case '/payment':
                return 'Payment'
            case '/on-boarding':
                return 'Onboarding'
            case '/lesson':
                return 'Continue your Journey'

        }
    }

    return (
        <div style={styles().containerHome}>
            <span style={styles().headerFont}>{renderHeader(location)}</span>
            {renderContent(location)}
        </div>
    )
}

export default Home