import React from 'react'
import styles from './ProcessButton.style'
import { NavLink, useLocation } from "react-router-dom";
import { StyleRoot } from 'radium'

const ProcessButton = (props) => {

    const location = useLocation().pathname

    return (
        <StyleRoot>
            <NavLink style={{textDecoration: 'none'}} to={props.isNav ? props.dest : location}>
                <div key="process" style={{...styles().containerProcessBtn, ...props.style}}>
                    <span style={styles().btnFont}>{props.btnLabel}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default ProcessButton