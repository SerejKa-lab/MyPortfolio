import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Biography.module.css'
import ComponentHeader from '../ComponentHeader/ComponentHeader'

const Biography = ({ intl }) => {
   return (
      <div className={styles.biography}>
         <div className={styles.container}>
            <ComponentHeader title={intl.formatMessage({ id: 'biography.header' })} />
            <div className={styles.biographyBox}>
               <img
                  src="https://avatars.mds.yandex.net/get-pdb/770122/4e5f72f5-a2ea-46d5-9e38-3965a3f34483/s1200"
                  alt='biography'
               />
              <div className={styles.description}>
                  <h2><FormattedMessage id='biography.welcome' /></h2>
                  <p><FormattedMessage id='biography.born' /></p>
                  <p><FormattedMessage id='biography.scool' /></p>
                  <p><FormattedMessage id='biography.university' /></p>
                  <p><FormattedMessage id='biography.work_ligo' /></p>
                  <p><FormattedMessage id='biography.work_yandex' /></p>
                  <h2><FormattedMessage id='biography.personal_qualities.header' /></h2>
                  <p><FormattedMessage id='biography.personal_qualities' /></p>
                  <h2><FormattedMessage id='biography.interests' /></h2>
                  <p><FormattedMessage id='biography.self_development' /></p>
              </div>
            </div>
         </div>
      </div>
   )
}

export default injectIntl(Biography)
