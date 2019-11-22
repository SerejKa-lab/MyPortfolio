import React from "react";
import styles from "./Greeting.module.css";

function Greeting() {
   return (
      <div className={styles.greetingPage}>
         <div className={styles.container}>
            <h1>Сергей Кашко. React-разработчик.</h1>
         </div>
      </div>
   );
}

export default Greeting;
