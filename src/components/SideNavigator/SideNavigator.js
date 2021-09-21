import React from 'react'
import styles from './SideNavigator.style'
import logoWhite from '../../assets/logo-white.png'
import Navigator from './Navigator'

const SideNavigator = () => {

    // const icon = require(`../../assets/${props.src}`).default;
    const icon = require(`../../assets/icon-career-market.png`).default;

    return (
            <div style={styles().containerSideNav}>
                <div style={styles().containerIcon}>
                    <img style={styles().imgLogo} src={logoWhite} alt="Matuto logo"/>
                </div>
                <div style={styles().containerNavBtnList}>
                    <Navigator src={'icon-career-market.png'} name={'Career Market'}/>
                    <Navigator src={'icon-student-center.png'} name={'Student Center'}/>
                    <Navigator src={'icon-recruitment.png'} name={'Recruitment'}/>
                    <Navigator src={'icon-partners.png'} name={'Partners'}/>
                </div>
            </div>
    )
}

export default SideNavigator