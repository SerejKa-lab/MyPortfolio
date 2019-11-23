import React from "react";
import styles from "./Skills.module.css";
import SkillSubject from "./SkillSubject/SkillSubject";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const Skills = () => {
   let subjects = [
      {
         title: "HTML",
         src:
            "https://im0-tub-by.yandex.net/i?id=7e3a96f8325b8ac20a953490bb87f8aa&n=13",
         description: "Описание опыта HTML",
         id: 0
      },
      {
         title: "CSS",
         src:
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
         description: "Описание опыта CSS",
         id: 1
      },
      {
         title: "React",
         src:
            "https://yt3.ggpht.com/a/AGF-l79gdFQSyzDoqL-sXaq4XXWkQ9TgezvAX-fMXQ=s900-c-k-c0xffffffff-no-rj-mo",
         description: "Описание опыта React",
         id: 2
      }
   ];

   let subjectsComponent = subjects.map(el => (
      <SkillSubject title={el.title} src={el.src} description={el.description} key={el.id} />
   ));

   return (
      <div id='skills' className={styles.skills}>
         <div className={styles.container}>
            <ComponentHeader title = 'Навыки' />
            <div className={styles.skillsBox}>{subjectsComponent}</div>
         </div>
      </div>
   );
}

export default Skills;
