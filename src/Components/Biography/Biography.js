import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Biography.module.css'
import ComponentHeader from '../Common/ComponentHeader/ComponentHeader'
import photo from '../../Assets/Images/Photo/photo.jpg'

const Biography = ({ intl }) => {
   return (
      <div className={styles.biography}>
         <div className={styles.container}>
            <ComponentHeader title={intl.formatMessage({ id: 'biography.header' })} />
            <div className={styles.biographyBox}>
               <div className={styles.description}>
                  <img src={photo} alt='biography' />
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
