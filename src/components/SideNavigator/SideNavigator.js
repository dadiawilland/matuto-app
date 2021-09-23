import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './SideNavigator.style'
import logoWhite from '../../assets/logo-white.png'
import Navigator from './Navigator'
import { ADMIN } from '../../constants/adminConstants';

const SideNavigator = () => {
    const navigation = useSelector((state) => state.admin.selectedNavigation);
    // const icon = require(`../../assets/${props.src}`).default;
    const icon = require(`../../assets/icon-career-market.png`).default;
    const [selectedNavigation, setSelectedNavigation] = useState(ADMIN.NAVIGATION_TABS[0].name);

    useEffect(() => {
        setSelectedNavigation(navigation);
    }, [navigation]);

    return (
            <div style={styles().containerSideNav}>
                <div style={styles().containerIcon}>
                    <img style={styles().imgLogo} src={logoWhite} alt="Matuto logo"/>
                </div>
                <div style={styles().containerNavBtnList}>
                    {ADMIN.NAVIGATION_TABS.map((nav) => {
                        return (
                            <Navigator dest={nav.url} isActive={selectedNavigation === nav.name} 
                                        onClick={()=> setSelectedNavigation(nav.name)} 
                                        name={nav.name} src={nav.icon} title={nav.title}
                            />
                        );
                    })}
                </div>
            </div>
    )
}

export default SideNavigator