import React from 'react';
import styles from './CloseButton.style';
import closeIcon from '../../assets/icon-close.png';
import { StyleRoot } from 'radium';

const CloseButton = (props) => {
  const { onClick, style } = props;

  return (
    <StyleRoot>
      <div
        onClick={() => onClick()}
        style={{ ...styles().containerClosebtn, ...style }}
      >
        <img
          key="asd"
          style={styles().filterIconImg}
          src={closeIcon}
          alt="Close Icon"
        />
      </div>
    </StyleRoot>
  );
};

export default CloseButton;
