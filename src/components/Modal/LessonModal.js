import React, { useState, useEffect } from 'react'
import styles from './LessonModal.style'
import CloseButton from '../Buttons/CloseButton';
import icn from '../../assets/icon-arrow-white.png'

const LessonModal = (props) => {

    useEffect(() => {
    }, []);

    const closeModal = () => {
        // props.onClose()
    }

    const submitModal = () => {
        props.onSubmit()
    }

    return (
            <div style={styles().containerModal}>
                <div style={styles().containerForm}>
                <CloseButton style={styles().containerCloseButton} onClick={() => closeModal()}/>
                <span style={styles().fontTitle}>Introduction to Customer Service</span>
                <iframe id="test" style={styles().containerPdf} src="https://drive.google.com/file/d/1ultqE2Qxq3v96loVN9GbuLIULUvMBxw-/preview" frameborder="0"></iframe>
                <div onClick={() => submitModal()} style={styles().containerSubmitButton}>
                    <img style={styles().imgBg} src={icn} alt="Matuto logo white"/>
                </div>
                </div>
            </div>
    )
}

export default LessonModal