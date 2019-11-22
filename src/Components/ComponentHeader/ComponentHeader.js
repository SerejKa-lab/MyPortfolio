import React from 'react';
import styles from './ComponentHeader.module.css';

const ComponentHeader = (props) => {
    return(
        <h2 className = { styles.title } >
            { props.title }
        </h2>
    )
}

export default ComponentHeader;