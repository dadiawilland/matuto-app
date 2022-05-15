import React, { useState, useEffect } from 'react';
import styles from './PriceCard.style';
import { NavLink } from 'react-router-dom';
import { StyleRoot } from 'radium';

// TODO: replicate commented out functions

const PriceCard = (props) => {
  // const selectedPrice = useSelector((state) => state.price.selectedPrice);
  const icon = props.price.logo
    ? require(`../../assets/${props.price.logo}`).default
    : null;
  const [isActive, setIsActive] = useState(false);
  // const icon = require(`../../assets/icon-free-subj-1.png`).default;

  const setActivePrice = () => {
    if (props.isAlwaysActive) return;
    // TODO: add setter for active price
  };

  // useEffect(() => {
  //   if (selectedPrice) {
  //     setIsActive(selectedPrice.type == props.price.type);
  //   }
  // }, [selectedPrice]);

  return (
    <StyleRoot>
      <div onClick={() => setActivePrice()} style={styles().containerCard}>
        <div
          style={{
            ...styles().containerInnerCard,
            ...{
              boxShadow: isActive
                ? '0px 2px 10px #00000040'
                : '0px 2px 10px #00000010'
            }
          }}
        >
          <div style={styles().containerImage}>
            <img
              key="img"
              style={styles().imgIcon}
              src={icon}
              alt="Free course logo"
            />
          </div>
          <span style={styles().fontTitle}>{props.price.title}</span>
          <span style={styles().fontDescription}>
            {props.price.description}
          </span>
          <span style={styles().fontPrice}>
            {props.price ? props.price.price : null}
          </span>
          <div style={styles().containerFontContent}>
            <span style={styles().fontContent}>{props.price.content}</span>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default PriceCard;
