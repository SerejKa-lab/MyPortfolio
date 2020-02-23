import React from 'react'
import styles from './Button.module.css'
import classnames from 'classnames'

const Button = ({title, onClick, disabled, type}) => {

    const btnType = type ? type : null

    const buttonStyle = classnames(
        [styles.button],
        { [styles.isDisabled]: disabled }
    )

    return (
        <button className={buttonStyle} type={btnType} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button