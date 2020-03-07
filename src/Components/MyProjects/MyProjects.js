import React from 'react'
import { injectIntl } from 'react-intl'
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
               <div className={styles.projectsContainer}>
                  {projectsArr}
               </div>
            </div>
         </div>
      </SPATransition>
   )
}

export default injectIntl(MyProjects)