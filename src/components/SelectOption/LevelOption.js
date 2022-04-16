import Reactt, { useState, useEffect } from 'react';
import styles from './LevelOption.style';
import CommonCard from '../../components/Cards/CommonCard';
import NavCard from '../../components/Cards/NavCard';
import 'react-multi-carousel/lib/styles.css';
import { StyleRoot } from 'radium';
import { useHistory } from 'react-router-dom';

const LevelOption = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    e.stopPropagation();
    // setIsSelected(!isSelected)
    if (!props.isDisabled) {
      history.push({
        pathname: '/lesson'
      });
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} style={styles().containerOption}>
      <div style={styles(props.isDisabled).containerNumber}>
        <span style={styles(props.isDisabled).fontNumber}>{props.level}</span>
      </div>
      <div style={styles(props.isDisabled).containerDescription}>
        <span style={styles(props.isDisabled).fontContainer}>
          {props.title}
        </span>
      </div>
    </div>
  );
};

export default LevelOption;
