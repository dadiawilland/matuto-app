import React, { useState } from 'react'
import styles from './PriceCard.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'
import ProcessButton from '../Buttons/ProcessButton'

const PriceCard = (props) => {

    const icon = require(`../../assets/${props.src}`).default;
    const [isActive, setIsActive] = useState(props.isAlwaysActive);
    // const icon = require(`../../assets/icon-free-subj-1.png`).default;

    return (
        <StyleRoot>
            <div onClick={() => setIsActive((props.isAlwaysActive ? true :!isActive))} style={styles().containerCard}>
                <div style={{...styles().containerInnerCard,
                            ...{boxShadow: isActive ? '0px 2px 10px #00000040' : '0px 2px 10px #00000010'}}}>
                    <div style={styles().containerImage}>
                        <img key="img" style={styles().imgIcon} src={icon} alt="Free course logo"/>
                    </div>
                    <span style={styles().fontTitle}>{props.title}</span>
                    <div style={styles().containerFontContent}>
                        <span style={styles().fontContent}>{props.content}</span>
                    </div>
                    <span style={styles().fontPrice}>{props.price}</span>
                    <span style={styles().fontDescription}>{props.description}</span>
                </div>
            </div>
        </StyleRoot>                                    
    )
}

export default PriceCard