import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom'
import styles from './Error404.module.css'
import SPATransition from '../Common/SPATransition/SPATransition'


const Error404 = ({location, spaDisplayMode}) => {
    return(
        <SPATransition trigger={spaDisplayMode}>
            <div className={styles.error404}>
                <h3>
                    <FormattedMessage id='error404.message.nomatch' />
                    <code> "{location.pathname}"</code>.&nbsp;
                    <FormattedMessage id='error404.message.hint' />
                </h3>
            </div>
        </SPATransition>
    )
}

export default withRouter(Error404)