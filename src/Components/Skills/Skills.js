import React from "react"
import styles from "./Skills.module.css"
import { injectIntl } from 'react-intl'
import SkillSubject from "./SkillSubject/SkillSubject"
import ComponentHeader from "../Common/ComponentHeader/ComponentHeader"
import SPATransition from "../Common/SPATransition/SPATransition"

const Skills = ({ intl, skills, spaDisplayMode }) => {

   const skillsArr = skills.map((el, i) => {
      const description =
         intl.formatMessage({ id: `skills.${el.subject.toLowerCase()}.description` })
      return (
         <SkillSubject src={el.src} description={description} key={i} />
      )
   })

   return (
      <SPATransition trigger={spaDisplayMode}>
         <div id='skills' className={styles.skills}>
            <div className={styles.container}>
               <ComponentHeader title={intl.formatMessage({ id: 'skills.header' })} />
               <div className={styles.skillsBox}>{skillsArr}</div>
            </div>
         </div>
      </SPATransition>
   )
}

export default injectIntl(Skills)
