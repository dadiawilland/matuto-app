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
import NavButton from '../Buttons/NavButton';
import { useHistory } from 'react-router-dom';

const OnBoarding = () => {

    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        console.log(isSubmitted)
    }, [])

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        setIsModalOpen(true)
        
        //route to home subscribed
    }
    const handleClickNav = () => {
        history.push('/home-subscribed')
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
                    // <ProcessButton key={1} onClick={handleClick} isNav={false} btnLabel="Get started" style={styles().containerButton}/>
                }
                }
                {!isSubmitted ? 
                <ProcessButton onClick={handleClick} isNav={false} btnLabel="Get started" style={styles().containerButton}/>
                :
                <NavButton title="Let's Go!" dest="home-subscribed" style={styles().containerButton}/>}
            </div>
            {isModalOpen ? <OnBoardingModal onSubmit={handleSubmit} onClose={handleCloseModal}/> : null}
        </div>
    )
}

export default OnBoarding;