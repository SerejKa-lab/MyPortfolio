import React from "react";
import styles from "./MyProjects.module.css";
import Project from "./Project/Project";

function MyProjects() {
  return (
    <div className={styles.myProjects}>
      <div className={styles.container}>
          <Project />
          <Project />       
        </div>
    </div>
  );
}

export default MyProjects;
