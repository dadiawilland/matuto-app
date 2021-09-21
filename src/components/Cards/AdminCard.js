import React, { useState } from 'react'
import styles from './AdminCard.style'
import {NavLink} from 'react-router-dom'
import { StyleRoot } from 'radium'
import ProcessButton from '../Buttons/ProcessButton'

const AdminCard = (props) => {

    // const icon = require(`../../assets/${props.src}`).default;
    const [isHovered, setisHovered] = useState(false);
    const icon = require(`../../assets/icon-free-subj-1.png`).default;

    return (
        <StyleRoot>
            <div onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)} style={styles().containerCard}>
                <div style={styles().containerInnerCard}>
                    <div style={styles().containerUpper}>
                        <div style={styles().containerImage}>
                            <img key="img" style={styles().imgIcon} src={icon} alt="Free course logo"/>
                        </div>
                        <div style={styles().containerProfileDetails}>
                            <p style={styles().fontName}>Willand Dadia</p>
                            <p style={styles().fontEmail}>willanddadia@gmail.com</p>
                        </div>
                    </div>
                    <div style={styles().containerLower}>
                        <div style={styles().containerProperty}>
                            <p style={styles().fontPropertyTitle}>Program Level</p>
                            <p style={styles().fontPropertyValue}>2</p>
                        </div>
                        <div style={styles().containerProperty}>
                            <p style={styles().fontPropertyTitle}>Program Status</p>
                            <p style={styles().fontPropertyStatusValue}>Completed</p>
                        </div>
                        <div style={styles().containerProperty}>
                            <p style={styles().fontPropertyTitle}>Affiliation</p>
                            <p style={styles().fontPropertyValue}>BDO corp.</p>
                        </div>
                        <div style={styles().containerProperty}>
                            <p style={styles().fontPropertyTitle}>User status</p>
                            <p style={styles().fontPropertyValue}>Scholar</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </StyleRoot>                                    
    )
}

export default AdminCard