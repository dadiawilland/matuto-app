import React, { useEffect, useState } from 'react'
import styles from './Step3.style'
import common from './Common.style'
import ProcessButton from '../Buttons/ProcessButton'
import { StyleRoot } from 'radium'

const Step3 = (props) => {

    const [isSelected, setIsSelected] = useState()

    return (
        <div style={styles().containerForm}>
            {/* <span style={common().formTitleFont}>{props.title}</span> */}
            {/* <StyleRoot style={styles().containerGrid}>
                {[1,2,3,4].map((i) => {
                    return (
                        <div onClick={() => setIsSelected(i)} key={i} style={styles(isSelected == i).containerAvatar}>
                            <img style={styles().imgAvatar} src={require(`../../assets/avatar-${i}.png`).default} />
                        </div>
                    )
                })}
            </StyleRoot> */}
            <div style={styles().containerGrid}>
                <span style={styles().fontTitle}>Getting Started</span>
            </div>
            
            <ProcessButton style={{paddingTop: 11}} isNav={false} btnLabel="Select" style={common().containerButton}/>
        </div>

       
    )
}

export default Step3;
