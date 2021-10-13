import React, { useState, useEffect } from 'react'
import styles from './AssessmentResultModal.style'
import CloseButton from '../Buttons/CloseButton';
import voucher from '../../assets/voucher.png'
import lessonIcon from '../../assets/icon-lesson.png'
import icn from '../../assets/icon-arrow-white.png'

const AssessmentResultModal = (props) => {

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
                    <p style={styles().fontTitle}><span style={styles().fontTitle}>Social Media</span><span style={styles().fontTitle}>Landscape and</span><span style={styles().fontTitle}>Platforms</span></p>
                </div>
                <span style={styles().fontSubTitle}>Assessment 2</span>
                <div style={styles().containerResult}>
                    <span style={styles().fontResultTitle}>Congratulations you got</span>
                    <span style={styles().fontResultSubTitle}>100%</span>
                    <span style={styles().fontVoucher}>You received a voucher</span>
                    <img style={styles().imgVoucher} src={voucher} alt="Matuto logo white"/>
                </div>
                    <div onClick={() => submitModal()} style={styles().containerSubmitButton}>
                        <img style={styles().imgBg} src={icn} alt="Matuto logo white"/>
                    </div>
                </div>
            </div>
    )
}

export default AssessmentResultModal