import React from 'react'
import styles from './Icon.module.css'
import classNames from 'classnames'



const Icon = ({ name, className, style, size, disabled, onClick=null }) => {

    const iconSize = size ? { fontSize : `${size}rem` } : null
    const iconStyle = { ...style, iconSize }

    const iconClass = classNames(
        'fa',
        `fa-${name}`,
        className,
        {[styles.disabled]: disabled },
        {[styles.function]: onClick}
    )


    return(
        <i className={iconClass} style={iconStyle} onClick={ disabled ? null : onClick} />
    )

}

export default Icon