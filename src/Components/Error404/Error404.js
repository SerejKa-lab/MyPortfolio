import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom'
import styles from './Error404.module.css'


const Error404 = (props) => {
    return(
        <div className={styles.error404}>
            <h3>
                <FormattedMessage id='error404.message.nomatch' />
                <code> "{props.location.pathname}"</code>.&nbsp;
                <FormattedMessage id='error404.message.hint' />
            </h3>
        </div>
    )
}

export default withRouter(Error404)