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
               <p><FormattedMessage id='biography.description' /></p>
            </div>
         </div>
      </div>
   )
}

export default injectIntl(Biography)
