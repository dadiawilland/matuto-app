import React, { useEffect, useState } from 'react';
import styles from './Step1.style';
import common from './Common.style';
import ProcessButton from '../Buttons/ProcessButton';
import { StyleRoot } from 'radium';

const Step1 = (props) => {
  const [isSelected, setIsSelected] = useState();

  return (
    <div style={{ ...common().containerForm, ...props.style }}>
      <span style={common().formTitleFont}>Select an Avatar</span>
      <StyleRoot style={styles().containerGrid}>
        {[1, 2, 3, 4].map((i) => {
          return (
            <div
              key={i}
              onClick={() => setIsSelected(isSelected == i ? null : i)}
              style={styles(isSelected == i).containerAvatar}
            >
              <img
                style={styles().imgAvatar}
                src={require(`../../assets/avatar-${i}.png`).default}
              />
            </div>
          );
        })}
      </StyleRoot>
      <ProcessButton
        isNav={false}
        btnLabel="Select"
        style={common().containerButton}
      />
    </div>
  );
};

export default Step1;
