import React from 'react';
import styles from './ProcessButton.style';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { StyleRoot } from 'radium';

const ProcessButton = (props) => {
  const { onClick, isNav, dest, style } = props;
  const history = useHistory();

  const handleClick = () => {
    if (isNav) {
      history.push(dest);
    }
    onClick();
    //route to home subscribed
  };

  // TODO: add disabled function

  return (
    <StyleRoot>
      <div
        onClick={handleClick}
        key="process"
        style={{ ...styles().containerProcessBtn, ...style }}
      >
        <span style={styles().btnFont}>{props.btnLabel}</span>
      </div>
    </StyleRoot>
  );
};

export default ProcessButton;
