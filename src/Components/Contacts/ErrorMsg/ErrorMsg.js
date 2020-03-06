import React from 'react'
import Icon from '../../Common/Icon/Icon'
import { CSSTransition } from 'react-transition-group'
import './ErrorMsg.css'


const ErrorMsg = ({ message, trigger }) => {
    return (
        <CSSTransition 
            in={trigger} 
            timeout={500}
            classNames='errMsg' 
            mountOnEnter 
            unmountOnExit
        >
            <div className='contacts_errorMessage'>
                <Icon name='exclamation-circle' size={1.3} style={{ color: 'magenta', marginRight: '5px' }} />
                {message}
            </div>
        </CSSTransition>
    )
}

export default ErrorMsg