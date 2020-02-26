import React from 'react'
import { injectIntl } from 'react-intl'
import styles from './MyProjects.module.css'
import Project from './Project/Project'
import ComponentHeader from '../ComponentHeader/ComponentHeader'

const MyProjects = ({ intl }) => {

   const projects = [
      { title: 'tasksManager', GHLink: 'https://github.com/SerejKa-lab/TasksManager', 
         projectLink: 'https://serejka-lab.github.io/TasksManager' },
      { title: 'netWork', GHLink: 'https://github.com/SerejKa-lab/NetWork', 
         projectLink: 'https://serejka-lab.github.io/NetWork' },
      { title: 'portfolio', GHLink: 'https://github.com/SerejKa-lab/MyPortfolio', 
         projectLink: 'https://serejka-lab.github.io/MyPortfolio' },
   ]

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