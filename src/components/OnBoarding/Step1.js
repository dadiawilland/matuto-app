import React, { useContext, useState } from 'react';
import styles from './Step1.style';
import common from './Common.style';
import ProcessButton from '../Buttons/ProcessButton';
import { OnboardingErrorContext } from '../../contexts/OnboardingErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { StyleRoot } from 'radium';
import { useHistory } from 'react-router-dom';
import { APIService } from '../../services/APIService';
import { getId } from '../../providers/CreateAuthProvider';

const Step1 = (props) => {
  const API = APIService();
  const history = useHistory();

  const [isSelected, setIsSelected] = useState();
  const { setOnboardingError } = useContext(OnboardingErrorContext);
  const { setLoading } = useContext(LoadingContext);

  const handleClick = async () => {
    setLoading(true);
    if (!isSelected) {
      setOnboardingError('Please select an avatar');
      return;
    }

    const res = await API.addAvatar(getId(), isSelected);
    if (res.status === 200) {
      setOnboardingError(null);

      history.push('/step2');
    }
    setTimeout(() => setLoading(false), 300);
  };

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
        onClick={handleClick}
      />
    </div>
  );
};

export default Step1;
