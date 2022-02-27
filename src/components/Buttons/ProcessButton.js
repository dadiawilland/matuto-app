import React from 'react'
import styles from './ProcessButton.style'
import { NavLink, useLocation } from "react-router-dom";
import { StyleRoot } from 'radium'

const ProcessButton = (props) => {
    const {onClick, isNav, dest, style } = props;
    const location = useLocation().pathname

    const handleClick = () => {
        props.onClick()
        //route to home subscribed
    }

    // TODO: add disabled function

    return (
        <StyleRoot>
            <NavLink onClick={handleClick} style={{textDecoration: 'none'}} to={isNav ? dest : location}>
                <div key="process" style={{...styles().containerProcessBtn, ...style}}>
                    <span style={styles().btnFont}>{props.btnLabel}</span>
                </div>
            </NavLink>
        </StyleRoot>                                    
    )
}

export default ProcessButton