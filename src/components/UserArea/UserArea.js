import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import logoSearch from '../../assets/icon-search.png'
import logoMessage from '../../assets/icon-message.png'
import logoWallet from '../../assets/icon-wallet.png'
import voucher from '../../assets/voucher.png'
import icon from '../../assets/icon-user-1.jpeg'
import icon2 from '../../assets/icon-user-2.jpg'
import icon3 from '../../assets/icon-user-3.jpg'
import styles from './UserArea.style'
import { StyleRoot } from 'radium'
import { NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const [isActive, setIsActive] = useState(false)
    const [isMessageActive, setIsMessageActive] = useState(true)
    const [isWalletActive, setIsWalletActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
        if (!isActive) {
            // setIsMessageActive(false)
            // setIsWalletActive(false)
        }
    }

    const handleMessageClick = () => {
        setIsMessageActive(true)
        setIsWalletActive(false)
    }

    const handleWalletClick = () => {
        setIsWalletActive(true)
        setIsMessageActive(false)
    }

    return (
        <StyleRoot>            
            <div style={isActive ? styles().containerIconActive : styles().containerIcon}>
                <img onClick={handleClick} key="img" style={isActive ? styles().imgIconActive : styles().imgIcon} src={icon} alt="Sign in logo"/>
                {(isActive) ? (<div onClick={handleMessageClick} style={styles(isMessageActive).containerMessageIcon}>
                                <img key="img" style={styles(isMessageActive).imgMessage} src={logoMessage} alt="Sign in logo"/>
                            </div>) : null}
                {(isActive) ? (<div onClick={handleWalletClick} style={styles(isWalletActive).containerWalletIcon}>
                    <img key="img" style={styles(isWalletActive).imgWallet} src={logoWallet} alt="Sign in logo"/>
                </div>) : null}
                
                {(isActive && isMessageActive) ? 
                (<div style={styles().containerArea}>
                    <div style={styles().containerSearch}>
                        <img key="img" style={ styles().imgSearch } src={logoSearch} alt="Sign in logo"/>
                    </div>
                    <div style={styles().containerIcons}>
                        <img key="img" style={styles().imgUserIcn} src={icon2} alt="Sign in logo"/>
                        <img key="img" style={styles().imgUserIcn} src={icon3} alt="Sign in logo"/>
                        {/* <img key="img" style={styles().imgUserIcn} src={icon} alt="Sign in logo"/>
                        <img key="img" style={styles().imgUserIcn} src={icon} alt="Sign in logo"/>
                        <img key="img" style={styles().imgUserIcn} src={icon} alt="Sign in logo"/>
                        <img key="img" style={styles().imgUserIcn} src={icon} alt="Sign in logo"/> */}
                    </div>
                    <div style={styles().containerUser}>
                        <img key="img" style={styles().imgUser} src={icon2} alt="Sign in logo"/>
                        <span style={styles().userFont}>Juana Dela</span>
                    </div>
                    <div style={styles().containerMessages}>
                        <div style={styles().containerChatPink}>Hi Juana!</div>
                        <div style={styles().containerChatBlack}>Hello Maria! How are you?</div>
                        <div style={styles().containerChatPink}>Congrats on doing on good on your subjects. Don't hesitate to ask message me here if you have more questions. </div>
                    </div>

                    <div style={styles().containerTextArea}>
                        Type here to reply
                    </div>
                </div>)
                : null }
                {(isActive && isWalletActive) ?
                (<div style={styles().containerArea}>
                    <div style={styles().containerSearch}>
                        <img key="img" style={ styles().imgSearch } src={logoSearch} alt="Sign in logo"/>
                    </div>
                    <img style={styles().imgVoucher} src={voucher} alt="Matuto logo white"/>
                </div>)
                :
                null}
            </div>
        </StyleRoot>
    )
}


export default Header