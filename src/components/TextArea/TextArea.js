import React, { useState } from 'react'
import styles from './TextArea.style'
import colors from "../../helpers/colors"

const TextArea = (props) => {
    const { value, onChange } = props;
    const [val, setVal] = useState('');
    const [isActive, setisActive] = useState(false)

    return (
        <div style={{...styles().containerField, ...props.style}}>
            <span style={styles().inputFieldFont}>{props.label}</span>
            <textarea type={props.type} 
                    value={value}
                    onChange={onChange}
                    onFocus={() => setisActive(true)}
                    onBlur={() => setisActive(false)}  
                    style={{...props.error ? styles().inputFieldError : styles().containerInputField,
                        ...{backgroundColor: (isActive || val != '') ? colors.transparent : colors.gray5}}}
                    />
        </div>
    )
}

export default TextArea 