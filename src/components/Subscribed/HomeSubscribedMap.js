import Reactt, { useState, useEffect }  from 'react'
import styles from './HomeSubscribedMap.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import "react-multi-carousel/lib/styles.css";
import { StyleRoot } from 'radium'
import LevelOption from '../SelectOption/LevelOption';
import ProcessButton from '../Buttons/ProcessButton';
import icon from '../../assets/icon-track.png'
import LessonSubscribedModal from '../Modal/LessonSubscribedModal';
import AssessmentModal from '../Modal/AssessmentModal';
import AssessmentResultModal from '../Modal/AssessmentResultModal';

const HomeSubscribedMap = () => {


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalAssessmentOpen, setIsModalAssessmentOpen] = useState(false)
    const [isModalResultOpen, setIsModalResultOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setIsModalAssessmentOpen(false)
        setIsModalResultOpen(false)
    }

    const handleSubmit = () => {
        setIsModalOpen(false)
        setIsModalAssessmentOpen(true)
    }

    const handleSubmitAssessment = () => {
        setIsModalAssessmentOpen(false)
        setIsModalResultOpen(true)
    }

    const handleSubmitResult = () => {
        setIsModalResultOpen(false)
    }


    return (
        <div style={styles().containerHome}>
             <div style={styles().containerNumber1}>
                <span style={styles().fontNumber}>1</span>
            </div>
            <div style={styles().containerNumber2}>
                <span style={styles().fontNumberDisabled}>2</span>
            </div>
            <div style={styles().containerNumber3}>
                <span style={styles().fontNumberDisabled}>3</span>
            </div>
            <div style={styles().containerNumber4}>
                <span style={styles().fontNumberDisabled}>4</span>
            </div>
            <div style={styles().containerNumber5}>
                <span style={styles().fontNumberDisabled}>5</span>
            </div>
            <img key="img" style={styles().imgIcon} src={icon} alt="Free course logo"/>

            <div style={styles().containerDescription}>
                <span  style={styles().fontDescription}>Business English and Communication</span>
            </div>
            <span style={styles().fontTitle}>Level 1</span>
            <span style={styles().fontSubTitle}>Fundamentals and Essential</span>
            <ProcessButton onClick={() => setIsModalOpen(true)} isNav={false} btnLabel="Begin" style={styles().containerButton}/>
            {isModalOpen ? <LessonSubscribedModal onSubmit={handleSubmit} onClose={handleCloseModal}/> : null}
            {isModalAssessmentOpen ? <AssessmentModal onSubmit={handleSubmitAssessment} onClose={handleCloseModal}/> : null}
            {isModalResultOpen ? <AssessmentResultModal onSubmit={handleSubmitResult} onClose={handleCloseModal}/> : null}
        </div>
    )
}

export default HomeSubscribedMap