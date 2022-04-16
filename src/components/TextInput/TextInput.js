import React, { useEffect, useState } from 'react';
import styles from './TextInput.style';
import colors from '../../helpers/colors';

const TextInput = (props) => {
  const { val, onChange } = props;
  const [isActive, setisActive] = useState(false);

  return (
    <div style={{ ...styles().containerField, ...props.style }}>
      <span style={styles().inputFieldFont}>{props.label}</span>
      <input
        type={props.type}
        value={val}
        onChange={onChange}
        onFocus={() => setisActive(true)}
        onBlur={() => setisActive(false)}
        style={{
          ...{
            backgroundColor:
              isActive || (val !== '' && val !== undefined)
                ? colors.transparent
                : colors.gray5
          },
          ...(props.error
            ? styles().inputFieldError
            : styles().containerInputField)
        }}
      />
      <span style={styles().fontError}>
        {props.error && props.error.message}
      </span>
    </div>
  );
};

export default TextInput;
