import React, { useState } from 'react';
import styles from './CommonCard.style';
import { NavLink } from 'react-router-dom';
import { StyleRoot } from 'radium';
import ProcessButton from '../Buttons/ProcessButton';

const CommonCard = (props) => {
  const icon = require(`../../assets/${props.src}`).default;
  const [isHovered, setisHovered] = useState(false);
  // const icon = require(`../../assets/icon-free-subj-1.png`).default;

  const handleClick = () => {
    props.handleClick();
    //route to home subscribed
  };

  return (
    <StyleRoot>
      <div
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        style={styles().containerCard}
      >
        <div style={styles().containerInnerCard}>
          <div style={styles().containerImage}>
            <img
              key="img"
              style={styles().imgIcon}
              src={icon}
              alt="Free course logo"
            />
          </div>
          <span style={styles().fontTitle}>{props.title}</span>
          <div style={styles().containerFontContent}>
            <span style={styles().fontContent}>{props.content}</span>
          </div>
          <ProcessButton
            onClick={handleClick}
            isNav={false}
            btnLabel="Start"
            style={{
              ...styles().containerButton,
              ...{ display: isHovered ? 'flex' : 'none' }
            }}
          />
        </div>
      </div>
    </StyleRoot>
  );
};

export default CommonCard;
