import React from 'react'
import './Button.css'

const Styles = [
    'btn--primary',
    'btn--outline'
]

const Sizes = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize
}: any) => {
    const checkButtonStyle = Styles.includes(buttonSize) ? buttonStyle: Styles[0]
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )

}