import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Project.module.css'
import Button from '../../Button/Button'



const Project = ({ intl, projOrder }) => {
   return (
      <div className={styles.project}>
         <div className={styles.projectReview}>
            <Button title={intl.formatMessage({ id: 'projects.button.watch' })} />
         </div>
         <div className={styles.desctiption}>
            <div className={styles.desctiptionBox}>
               <div className={styles.descriptionTitle}>
                  <FormattedMessage id={`projects.proj${projOrder}.title`} />
               </div>
               <div className={styles.shortDescription}>
                  <FormattedMessage id={`projects.proj${projOrder}.desctiption`} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default injectIntl(Project)
