import React from "react";
import styles from './SkillSubject.module.css'

const SkillSubject = (props) => {
  return (
    <div className={styles.mySkill}>
      <div className={styles.technology}>
        <img src={props.src}
          alt="icon-logo"
        />
        <span className={styles.description}>{props.title}</span>
      </div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
}

export default SkillSubject;
