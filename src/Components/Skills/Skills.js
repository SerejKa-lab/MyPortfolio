import React from "react"
import styles from "./Skills.module.css"
import { injectIntl } from 'react-intl'
import SkillSubject from "./SkillSubject/SkillSubject"
import ComponentHeader from "../ComponentHeader/ComponentHeader"

const Skills = ({ intl, skills }) => {

   const skillsArr = skills.map((el, i) => {
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
         <div className={styles.skillsBox}>{skillsArr}</div>
      </div>
   </div>
)
}

export default injectIntl(Skills)
