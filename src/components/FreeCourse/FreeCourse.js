import Reactt, { useState, useEffect }  from 'react'
import styles from './FreeCourse.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StyleRoot } from 'radium'
import NavButton from '../../components/Buttons/NavButton'
import LessonModal from '../Modal/LessonModal'

const FreeCourse = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        setIsModalOpen(true)
        //route to home subscribed
    }

    const handleSubmit = () => {
        setIsModalOpen(false)
    }

    return (
        <div style={styles().containerCardContent}>
            <StyleRoot>
                <div style={styles().containerCardList}>
                    <CommonCard handleClick={ () => setIsModalOpen(true)} src={'icon-free-subj-1.png'} title={'Finance'} content={'The primary objective is to provide a framework, concepts, and tools for analyzing financial decisions based on fundamental principles of modern financial theory. ... The course will also analyze corporate financial policy, including capital structure, cost of capital, dividend policy, and related issues.'}/>
                    <CommonCard handleClick={ () => setIsModalOpen(true)} src={'icon-free-subj-2.png'} title={'Business 101'} content={'The course objective of Business 101 is to gain an understanding of business management, including historical and current management theory, types of managers and roles of managers in an organization.'}/>
                    <CommonCard handleClick={ () => setIsModalOpen(true)} src={'icon-free-subj-3.png'} title={'English Grammar'} content={'English 101 is an introductory writing course; the course will cover all fundamental principles of writing, and will stress the three stages of the writing process (prewriting, writing, and rewriting).'}/>
                    <NavCard src={'icon-cross.png'} title={'Add more courses...'}/>
                </div>
                
            </StyleRoot>
            {isModalOpen ? <LessonModal onSubmit={handleSubmit} onClose={handleCloseModal}/> : null}
        </div>
    )
}

export default FreeCourse