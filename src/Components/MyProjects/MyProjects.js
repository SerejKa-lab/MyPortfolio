import React from "react"
import { injectIntl } from 'react-intl'
import styles from "./MyProjects.module.css"
import Project from "./Project/Project"
import ComponentHeader from "../ComponentHeader/ComponentHeader"

const MyProjects = ({ intl }) => {

   const projects = [
      { title: 'Проект 1', description: 'Описание проекта' },
      { title: 'Проект 2', description: 'Описание проекта' },
      { title: 'Проект 3', description: 'Описание проекта' },
   ]

   const projectsArr = projects.map((proj, i) => {
      const title = intl.formatMessage({ id: `projects.proj${i+1}.title`})
      const description = intl.formatMessage({ id: `projects.proj${i+1}.desctiption`})
      return (
         <Project title={title} description={description} key={i} projOrder={i+1} />)
   })

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