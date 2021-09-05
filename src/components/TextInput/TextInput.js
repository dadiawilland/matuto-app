import React, {useState, useEffect} from 'react'
import styles from './TextInput.style'
import { StyleRoot } from 'radium'
import {NavLink} from 'react-router-dom'
import NavButton from '../../components/Buttons/NavButton'
import colors from "../../helpers/colors"

const TextInput = (props) => {

    const [val, setVal] = useState('');
    const [isActive, setisActive] = useState(false)

    return (
        <div style={{...styles().containerField, ...props.style}}>
            {/* <div> */}
                <span style={styles().inputFieldFont}>{props.label}</span>
                <input type={props.type} 
                        onChange={(e) => setVal(e.target.value)}
                        onFocus={() => setisActive(true)}
                        onBlur={() => setisActive(false)}  
                        style={{...styles().containerInputField,
                            ...{backgroundColor: (isActive || val != '') ? colors.transparent : colors.gray}}}
                        />
            {/* </div> */}
        </div>
    )
}

export default TextInput 