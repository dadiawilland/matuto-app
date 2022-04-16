import React, { useEffect, useState } from 'react';
import styles from './ErrorMessage.style';

const ErrorMessage = (props) => {
  return (
    <div>
      {props.hasError ? (
        <div style={styles().containerErrorMessage}>
          <span>{props.message}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
