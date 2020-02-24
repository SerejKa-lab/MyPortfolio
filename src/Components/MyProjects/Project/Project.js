import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Project.module.css'
import Button from '../../Common/Button/Button'
import { ColorThemeConsumer } from '../../../Utils/ReactContects/ColorThemeContext'


const Project = ({ intl, title, GHLink, projectLink }) => {

   const projectReviewStyle = styles.projectReview + ' ' + styles[title]

   return (
      <ColorThemeConsumer>
         {(colorTheme) =>
            <div className={styles.project}>
               <div className={projectReviewStyle}>
                  <a href={projectLink} target='_blank' rel='noopener noreferrer'>
                     <Button title={intl.formatMessage({ id: 'projects.button.watch' })} />
                  </a>
               </div>
               <div className={styles.desctiption}>
                  <div className={styles.desctiptionBox}>
                     <div className={styles.gitHubLink + ' ' + styles[`theme_${colorTheme}`]}>
                        <a href={GHLink} target='_blank' rel='noopener noreferrer'>
                           <FormattedMessage id='projects.github.title' />
                        </a>
                     </div>
                     <div className={styles.shortDescription}>
                        <FormattedMessage id={`projects.${title}.description`} />
                     </div>
                  </div>
               </div>
            </div>
         }
      </ColorThemeConsumer>
   )
}

export default injectIntl(Project)
