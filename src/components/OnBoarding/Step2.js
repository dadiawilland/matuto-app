import React, { useState, useEffect } from 'react';
import styles from './Step2.style';
import common from './Common.style';
import CommonCard from '../Cards/CommonCard';
import NavCard from '../Cards/NavCard';
import PriceCard from '../Cards/PriceCard';
import { StyleRoot } from 'radium';
import ProcessButton from '../Buttons/ProcessButton';
import PaymentInfo from './PaymentInfo';
import bg from '../../assets/on-boarding-bg.png';
import OnBoardingModal from '../Modal/OnBoardingModal';
import NavButton from '../Buttons/NavButton';
import { useHistory } from 'react-router-dom';

const Step1 = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);

    //route to home subscribed
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    setIsSubmitted(true);
  };

  return (
    <div style={styles().containerOnBoarding}>
      <div>
        <img style={styles().imgBg} src={bg} alt="Matuto logo white" />
        {isSubmitted ? (
          <div style={styles().containerDialogue}>
            <span style={styles().fontDialogue}>
              You're now ready to start your learning journey with us!
            </span>
          </div>
        ) : null}
        {!isSubmitted ? (
          <ProcessButton
            onClick={handleClick}
            isNav={false}
            btnLabel="Get started"
            style={common().containerButton}
          />
        ) : (
          <NavButton
            title="Let's Go!"
            dest="home-subscribed"
            style={styles().containerButton}
          />
        )}
      </div>
      {isModalOpen ? (
        <OnBoardingModal onSubmit={handleSubmit} onClose={handleCloseModal} />
      ) : null}
    </div>
  );
};

export default Step1;
