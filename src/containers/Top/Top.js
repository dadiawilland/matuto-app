import React from 'react'
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
import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation().pathname

    const renderContent = (loc) => {
        switch(loc) {
            case '/home':
                return <FreeCourse/>
            case '/pricing':
                return <PriceList/>
            case '/payment':
                return <Payment/>

        }
    }

    const renderHeader = (loc) => {
        switch(loc) {
            case '/home':
                return 'Free Courses'
            case '/pricing':
                return 'Select Package'
            case '/payment':
                return 'Payment'

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