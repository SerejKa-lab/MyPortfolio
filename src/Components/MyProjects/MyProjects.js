import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './MyProjects.module.css'
import Project from './Project/Project'
import ComponentHeader from '../Common/ComponentHeader/ComponentHeader'
import SPATransition from '../Common/SPATransition/SPATransition'

const MyProjects = ({ intl, projects, spaDisplayMode }) => {

   const projectsArr = projects.map((proj, i) => 
      <Project title={proj.title} GHLink={proj.GHLink} projectLink={proj.projectLink} key={i} />)

   return (
      <SPATransition trigger={spaDisplayMode}>
         <div id='projects' className={styles.myProjects}>
            <div className = {styles.container} >
               <ComponentHeader title={ intl.formatMessage({ id: 'projects.header' }) } />
               <div className={styles.loginMessage}>
                  <FormattedMessage id='projects.loginMessage.start' />
                  <a className={styles.samuraiLink} tabIndex='-1'
                     href='https://social-network.samuraijs.com/' 
                     target='_blank' rel='noopener noreferrer'>
                     https://social-network.samuraijs.com/
                  </a>
                  <FormattedMessage id='projects.loginMessage.end' />
                  <div className={styles.testAccount}>
                     <span>email: free@samuraijs.com</span>
                     <span>password: free</span>
                  </div>
               </div>
               <div className={styles.projectsContainer}>
                  {projectsArr}
               </div>
            </div>
         </div>
      </SPATransition>
   )
}

export default injectIntl(MyProjects)