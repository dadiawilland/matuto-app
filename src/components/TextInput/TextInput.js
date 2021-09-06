import React, { useState } from 'react'
import styles from './TextInput.style'
import colors from "../../helpers/colors"

const TextInput = (props) => {

    const [val, setVal] = useState('');
    const [isActive, setisActive] = useState(false)

    return (
        <div style={{...styles().containerField, ...props.style}}>
            <span style={styles().inputFieldFont}>{props.label}</span>
            <input type={props.type} 
                    onChange={(e) => setVal(e.target.value)}
                    onFocus={() => setisActive(true)}
                    onBlur={() => setisActive(false)}  
                    style={{...styles().containerInputField,
                        ...{backgroundColor: (isActive || val != '') ? colors.transparent : colors.gray}}}
                    />
        </div>
    )
}

export default TextInput 