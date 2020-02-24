import React from "react"
import styles from "./Skills.module.css"
import { injectIntl } from 'react-intl'
import SkillSubject from "./SkillSubject/SkillSubject"
import ComponentHeader from "../ComponentHeader/ComponentHeader"
import html from '../../Assets/Images/Skills/html.png'
import css from '../../Assets/Images/Skills/css.png'
import react from '../../Assets/Images/Skills/react.png'
import redux from '../../Assets/Images/Skills/redux.png'
import rest from '../../Assets/Images/Skills/rest.png'
import git from '../../Assets/Images/Skills/git.png'

const Skills = ({ intl }) => {

   const subjects = [
      {
         subject: "HTML",
         src: html,
      },
      {
         subject: "CSS",
         src: css,
      },
      {
         subject: "Git",
         src: git,
      },
      {
         subject: "React",
         src: react,
      },
      {
         subject: "redux",
         src: redux,
      },
      {
         subject: "rest",
         src: rest,
      }
   ]

   const subjectsArr = subjects.map((el, i) => {
      const description = 
         intl.formatMessage({ id: `skills.${el.subject.toLowerCase() }.description` })
      return (
         <SkillSubject src={el.src} description={description} key={i} />
      )
   })

return (
   <div id='skills' className={styles.skills}>
      <div className={styles.container}>
         <ComponentHeader title={intl.formatMessage({ id: 'skills.header' })} />
         <div className={styles.skillsBox}>{subjectsArr}</div>
      </div>
   </div>
)
}

export default injectIntl(Skills)
