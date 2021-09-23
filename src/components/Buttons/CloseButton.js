import React from 'react'
import styles from './CloseButton.style'
import { StyleRoot } from 'radium'

const CloseButton = (props) => {
    const {onClick, style } = props;

    return (
        <StyleRoot>
            <div onClick={()=> onClick()} style={{...styles().containerClosebtn, ...style}}>
                <span style={styles().btnFont}>X</span>
            </div>
        </StyleRoot>                          
    )
}

export default CloseButton