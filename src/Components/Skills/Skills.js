import React from "react"
import styles from "./Skills.module.css"
import { injectIntl } from 'react-intl'
import SkillSubject from "./SkillSubject/SkillSubject"
import ComponentHeader from "../ComponentHeader/ComponentHeader"

const Skills = ({ intl }) => {

   const subjects = [
      {
         title: "HTML",
         src:
            "https://im0-tub-by.yandex.net/i?id=7e3a96f8325b8ac20a953490bb87f8aa&n=13",
         description: "Описание опыта HTML"
      },
      {
         title: "CSS",
         src:
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
         description: "Описание опыта CSS"
      },
      {
         title: "React",
         src:
            "https://yt3.ggpht.com/a/AGF-l79gdFQSyzDoqL-sXaq4XXWkQ9TgezvAX-fMXQ=s900-c-k-c0xffffffff-no-rj-mo",
         description: "Описание опыта React"
      }
   ]

   const subjectsArr = subjects.map((el, i) => {
      const description = 
         intl.formatMessage({ id: `skills.${el.title.toLowerCase() }.description` })
      return (
         <SkillSubject title={el.title} src={el.src} description={description} key={i} />
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
