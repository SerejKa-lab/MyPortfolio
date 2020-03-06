import React from 'react'
import { injectIntl } from 'react-intl'
import styles from './MyProjects.module.css'
import Project from './Project/Project'
import ComponentHeader from '../Common/ComponentHeader/ComponentHeader'

const MyProjects = ({ intl, projects }) => {

   const projectsArr = projects.map((proj, i) => 
      <Project title={proj.title} GHLink={proj.GHLink} projectLink={proj.projectLink} key={i} />)

   return (
      <div id='projects' className={styles.myProjects}>
         <div className = {styles.container} >
            <ComponentHeader title={ intl.formatMessage({ id: 'projects.header' }) } />
            <div className={styles.projectsContainer}>
               {projectsArr}
            </div>
         </div>
      </div>
   )
}

export default injectIntl(MyProjects)