import React, { useState, useCallback } from 'react';
import styles from './NavCard.style';
import { NavLink } from 'react-router-dom';
import { StyleRoot } from 'radium';
import colors from '../../helpers/colors';
import { navigateTo } from '../../utils/utils';
import { useHistory } from 'react-router-dom';

const NavCard = (props) => {
  const icon = require(`../../assets/${props.src}`).default;
  const [isHovered, setisHovered] = useState(false);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/pricing'), [history]);
  // const icon = require(`../../assets/icon-free-subj-1.png`).default;

  return (
    <StyleRoot>
      <div
        onClick={() => {
          history.push('/pricing');
        }}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        style={styles().containerCard}
      >
        <div
          style={{
            ...styles().containerInnerCard,
            ...{ backgroundColor: isHovered ? colors.red : colors.red3 }
          }}
        >
          <span style={styles().fontTitle}>{props.title}</span>
          <div style={styles().containerButton}>
            <img
              key="img"
              style={styles().imgIcon}
              src={icon}
              alt="Free course logo"
            />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default NavCard;
