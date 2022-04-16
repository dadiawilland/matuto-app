import React, { useState, useEffect } from 'react';
import styles from './AssessmentModal.style';
import CloseButton from '../Buttons/CloseButton';
import icn from '../../assets/icon-arrow-white.png';
import lessonIcon from '../../assets/icon-lesson.png';
import AnswerCard from '../Cards/AnswerCard';

const AssessmentModal = (props) => {
  useEffect(() => {}, []);

  const closeModal = () => {
    props.onClose();
  };

  const submitModal = () => {
    props.onSubmit();
  };

  const answersList = [
    { title: 'Expand Your Definition of Service' },
    { title: 'Respond to your business email quickly' },
    { title: 'Develop a Customer Friendly Approach' },
    { title: 'Answering the Telephone' },
    { title: 'Telephone Etiquette' },
    { title: 'Who are your Customers?' }
  ];

  return (
    <div style={styles().containerModal}>
      <div style={styles().containerForm}>
        <CloseButton
          style={styles().containerCloseButton}
          onClick={() => closeModal()}
        />
        <div style={styles().containerTitle}>
          <img
            style={styles().imgTitle}
            src={lessonIcon}
            alt="Matuto logo white"
          />
          {/* <span>Customer
                        Service
                        Basics
                    </span> */}
          <p style={styles().fontTitle}>
            <span style={styles().fontTitle}>Customer</span>
            <span style={styles().fontTitle}>Service</span>
            <span style={styles().fontTitle}>Basics</span>
          </p>
        </div>
        <span style={styles().fontSubTitle}>Assessment 1</span>
        <div style={styles().containerQuestions}>
          <span style={styles().fontQuestions}>
            Which of these are the Three Key Elements of Customer Service?
          </span>
          <div style={styles().containerAnswers}>
            {answersList?.map((answer, i) => {
              return <AnswerCard key={i} title={answer.title} />;
            })}
          </div>
          <div
            onClick={() => submitModal()}
            style={styles().containerSubmitButton}
          >
            <span style={{ ...styles().hover, ...styles().fontSubmitButton }}>
              submit
            </span>
            <img
              style={{ ...styles().hover, ...styles().imgBg }}
              src={icn}
              alt="Matuto logo white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentModal;
