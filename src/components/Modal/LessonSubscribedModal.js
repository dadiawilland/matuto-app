import React, { useState, useEffect } from 'react'
import styles from './LessonSubscribedModal.style'
import CloseButton from '../Buttons/CloseButton';
import icn from '../../assets/icon-arrow-white.png'
import lessonIcon from '../../assets/icon-lesson.png'

const LessonSubscribedModal = (props) => {

    useEffect(() => {
    }, []);

    const closeModal = () => {
        props.onClose()
    }

    const submitModal = () => {
        props.onSubmit()
    }

    return (
            <div style={styles().containerModal}>
                <div style={styles().containerForm}>
                <CloseButton style={styles().containerCloseButton} onClick={() => closeModal()}/>
                <div style={styles().containerTitle}>
                    <img style={styles().imgTitle} src={lessonIcon} alt="Matuto logo white"/>
                    {/* <span>Customer
                        Service
                        Basics
                    </span> */}
                    <p style={styles().fontTitle}><span style={styles().fontTitle}>Social Media</span><span style={styles().fontTitle}>Landscape and</span><span style={styles().fontTitle}>Platforms</span></p>
                </div>
                <span style={styles().fontSubTitle}>Introduction</span>
                <iframe id="test" style={styles().containerPdf} src="https://drive.google.com/file/d/1ultqE2Qxq3v96loVN9GbuLIULUvMBxw-/preview" frameBorder="0"></iframe>
                <div onClick={() => submitModal()} style={styles().containerSubmitButton}>
                    <span style={{...styles().hover, ...styles().fontSubmitButton}}>proceed to assessment</span>
                    <img  style={{...styles().hover, ...styles().imgBg}} src={icn} alt="Matuto logo white"/>
                </div>
                </div>
            </div>
    )
}

export default LessonSubscribedModal