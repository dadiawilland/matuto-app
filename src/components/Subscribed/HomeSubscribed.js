import Reactt, { useState, useEffect } from 'react';
import styles from './HomeSubscribed.style';
import CommonCard from '../../components/Cards/CommonCard';
import NavCard from '../../components/Cards/NavCard';
import 'react-multi-carousel/lib/styles.css';
import { StyleRoot } from 'radium';
import LevelOption from '../SelectOption/LevelOption';

const HomeSubscribed = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isBg1Open, setIsBg1Open] = useState(false);
  const [isBg2Open, setIsBg2Open] = useState(false);
  const [isBg3Open, setIsBg3Open] = useState(false);
  const [isBg4Open, setIsBg4Open] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
    //route to home subscribed
  };

  const handleBg1 = () => {
    setIsBg1Open(!isBg1Open);
    setIsBg2Open(false);
    setIsBg3Open(false);
    setIsBg4Open(false);
  };

  const handleBg2 = () => {
    // setIsBg1Open(false)
    // setIsBg2Open(!isBg2Open)
    // setIsBg3Open(false)
    // setIsBg4Open(false)
  };

  const handleBg3 = () => {
    // setIsBg1Open(false)
    // setIsBg2Open(false)
    // setIsBg3Open(!isBg3Open)
    // setIsBg4Open(false)
  };

  const handleBg4 = () => {
    // setIsBg1Open(false)
    // setIsBg2Open(false)
    // setIsBg3Open(false)
    // setIsBg4Open(!isBg4Open)
  };

  const optionsList = [
    { title: 'Cashering and Bookepin', level: 5, isDisabled: true },
    { title: 'Digital Marketing', level: 4, isDisabled: true },
    { title: 'Internet and Web Application', level: 3, isDisabled: true },
    {
      title: 'Customer Service and Front Office Operation',
      level: 2,
      isDisabled: true
    },
    {
      title: 'Social Media Landscape and Platforms',
      level: 1,
      isDisabled: false
    }
  ];

  return (
    <div style={styles().containerCardContent}>
      <StyleRoot>
        <div
          onClick={() => handleBg1()}
          key="bg1"
          style={styles(isBg1Open).containerLevel1}
        >
          {!isBg1Open ? (
            <div style={styles().containerTitle1}>
              <span style={styles().fontTitle}>Level 1</span>
              <span style={styles().fontTitle}>Fundamentals</span>
              <span style={styles().fontTitle}>and</span>
              <span style={styles().fontTitle}>Essential</span>
            </div>
          ) : (
            <div>
              <div style={styles().containerTitle1}>
                <span style={styles().fontTitle}>Level 1</span>
                <span style={styles().fontTitle}>
                  Fundamentals and Essential
                </span>
              </div>
              <div style={styles().containerOptionsList}>
                {optionsList?.map((option, i) => {
                  return (
                    <LevelOption
                      key={i}
                      title={option.title}
                      level={option.level}
                      isDisabled={option.isDisabled}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => handleBg2()}
          key="bg2"
          style={styles(isBg2Open).containerLevel2}
        >
          <div style={styles().containerTitle2}>
            <span style={styles().fontTitle}>Level 2</span>
            <span style={styles().fontTitle}>Specialized</span>
            <span style={styles().fontTitle}>and</span>
            <span style={styles().fontTitle}>Advanced Management</span>
          </div>
        </div>
        <div
          onClick={() => handleBg3()}
          key="bg3"
          style={styles(isBg3Open).containerLevel3}
        >
          <div style={styles().containerTitle3}>
            <span style={styles().fontTitle}>Level 3</span>
            <span style={styles().fontTitle}>Leadership</span>
            <span style={styles().fontTitle}>and</span>
            <span style={styles().fontTitle}>Entrepreneurship</span>
          </div>
        </div>
        <div
          onClick={() => handleBg4()}
          key="bg4"
          style={styles(isBg4Open).containerLevel4}
        >
          <div style={styles().containerTitle4}>
            {/* <span style={styles().fontTitle}>Level 1</span> */}
            <span style={styles().fontTitle}>Self-transformation</span>
            <span style={styles().fontTitle}>Programs</span>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
};

export default HomeSubscribed;
