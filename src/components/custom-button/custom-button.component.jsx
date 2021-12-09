import React from 'react'
import './custom-button.styles.scss'

function CustomButton({children,...otherProps}) {
    return (
        <button className= "btn btn-lg btn-primary btn-block" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
