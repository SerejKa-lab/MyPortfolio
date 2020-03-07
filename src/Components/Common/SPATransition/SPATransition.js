import React from 'react'
import styles from './SPATransition.module.css'
import { Transition } from 'react-transition-group'


const SPATransition = ({ children, trigger }) =>
    <Transition
        in={trigger}
        timeout={1250}
        appear
    >
        {state =>
            <div className={styles[state]} >
                {children}
            </div>
        }
    </Transition>

export default SPATransition