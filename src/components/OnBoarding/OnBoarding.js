import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from './OnBoarding.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import { StyleRoot } from 'radium'
import ProcessButton from '../../components/Buttons/ProcessButton'
import PaymentInfo from '../Register/PaymentInfo'
import bg from '../../assets/on-boarding-bg.png'
import OnBoardingModal from '../Modal/OnBoardingModal';

const OnBoarding = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        setIsModalOpen(true)
        //route to home subscribed
    }

    const handleSubmit = () => {
        setIsModalOpen(false)
        setIsSubmitted(true)
    }

    return (
        <div style={styles().containerOnBoarding}>
            <div>
                <img style={styles().imgBg} src={bg} alt="Matuto logo white"/>
                {isSubmitted ? 
                    <div style={styles().containerDialogue}>
                        <span style={styles().fontDialogue}>You're now ready to start your learning journey with us!</span>
                    </div>
                    :
                    null
                }
                
                <ProcessButton onClick={handleClick} isNav={false} btnLabel="Let's Go!" style={styles().containerButton}/>
            </div>
            {isModalOpen ? <OnBoardingModal onSubmit={handleSubmit} onClose={handleCloseModal}/> : null}
        </div>
    )
}

export default OnBoarding;