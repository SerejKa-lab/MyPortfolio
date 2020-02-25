import React from 'react'
import styles from './Tooltip.module.css'
import classNames from 'classnames'


const Tooltip = ({ hint, position='top', onClick }) => {

    const tooltipStyle = classNames(
        styles.tooltip,
        styles[position]
    )

    return(
        <div className={tooltipStyle}>
            {hint}
            <i className={'fa fa-times '+ styles.delete} onClick={onClick} />
        </div>
    )
}

export default Tooltip