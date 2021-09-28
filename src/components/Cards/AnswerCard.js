import React, { useState, useEffect } from 'react'
import styles from './AnswerCard.style'
import CloseButton from '../Buttons/CloseButton';
import icn from '../../assets/icon-arrow-white.png'
import lessonIcon from '../../assets/icon-lesson.png'

const AnswerCard = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div onClick={() => setIsSelected(!isSelected)} style={styles(isSelected).containerChoice}>
            <span style={styles(isSelected).fontChoice}>{props.title}</span>
        </div>
                        
    )
}

export default AnswerCard