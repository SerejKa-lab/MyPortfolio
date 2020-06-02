import React, { useEffect } from 'react';
import styles from './CommonError.module.css';


const CommonError = ({message, id, resetError}) => {

    useEffect(() => {
        const timerId = setTimeout(() => resetError(id), 5000)
        return () => clearTimeout(timerId)
    },[resetError, id])

    const keyReset = (e) => {
        if (e.key === 'Enter') resetError(id)
    }

    const closeOnClick = () => resetError(id)

    return(
        <div className={styles.error}>
            {message}
            {<span className={`fa fa-times ${styles.closeIcon}`} aria-hidden="true" 
                onClick={closeOnClick} tabIndex='0' onKeyPress={keyReset}
                aria-label='close error'></span>}
        </div>
    )
}

export default CommonError;