import React from 'react'
import { injectIntl } from 'react-intl'
import styles from './Slogan.module.css'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import Button from '../Common/Button/Button'

const Slogan = ({ intl }) => {
   return (
      <div id='slogan' className={styles.slogan}>
         <div className={styles.container}>
            <ComponentHeader title={intl.formatMessage({ id: 'slogan.header' })} />
            <img src="https://newbusiness.su/wp-content/uploads/2019/08/post_5d57cc231e206-695x391.jpeg" alt="Result" />
            <Button title={ intl.formatMessage({ id: 'slogan.button' }) } />
         </div>
      </div>
   )
}

export default injectIntl(Slogan)
