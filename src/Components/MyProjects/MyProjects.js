import React from "react";
import styles from "./MyProjects.module.css";
import Project from "./Project/Project";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const MyProjects = () => {
   return (
      <div id='projects' className={styles.myProjects}>
         <div className = {styles.container} >
            <ComponentHeader title = 'Работы' />
            <div className={styles.projectsContainer}>
               <Project />
               <Project />
            </div>
         </div>
      </div>
   );
}

export default MyProjects;
