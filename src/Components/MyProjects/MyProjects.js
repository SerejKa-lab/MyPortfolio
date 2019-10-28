import React from "react";
import styles from "./MyProjects.module.css";
import Project from "./Project/Project";

function MyProjects() {
   return (
      <div className={styles.myProjects}>
         <div className = {styles.container} >
            <span className = {styles.header}>Мои работы</span>
            <div className={styles.projectsContainer}>
               <Project />
               <Project />
            </div>
         </div>
      </div>
   );
}

export default MyProjects;
