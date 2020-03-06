import React from 'react'
import styles from './Tooltip.module.css'
import './TooltipTransition.css'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import { CSSTransition } from 'react-transition-group'


const Tooltip = ({ hint, position = 'top', onClick, displayHint }) => {

    const tooltipStyle = classNames(
        styles.tooltip,
        styles[position]
    )

    return (
        <CSSTransition
            in={displayHint}
            timeout={{ enter: 330, exit: 500 }}
            classNames='tt'
            mountOnEnter
            unmountOnExit 
        >
            <div className={tooltipStyle}>
                {hint}
                <Icon name='times' className={styles.delete} onClick={onClick} />
            </div>
        </CSSTransition>
    )
}

export default Tooltip