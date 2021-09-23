import React, { useState } from 'react'
import styles from './TextInput.style'
import colors from "../../helpers/colors"

const TextInput = (props) => {
    const { value, onChange, name } = props;
    const [val, setVal] = useState('');
    const [isActive, setisActive] = useState(false)

    return (
        <div style={{...styles().containerField, ...props.style}}>
            <span style={styles().inputFieldFont}>{props.label}</span>
            <input type={props.type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setisActive(true)}
                    onBlur={() => setisActive(false)}  
                    style={{...{backgroundColor: (isActive || val != '') ? colors.transparent : colors.gray5},
                        ...props.error ? styles().inputFieldError : styles().containerInputField}}
                    />
            {/* {props.error && props.error.message} */}
        </div>
    )
}

export default TextInput 