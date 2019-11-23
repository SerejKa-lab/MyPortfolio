import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Greeting.module.css";

function Greeting(props) {
   return (
      <div id='biography' className={styles.greetingPage}>
         <div className={styles.container}>
         {props.spaDisplayMode
         ? <h1><NavLink to='/' className={styles.greeting}>Сергей Кашко. React-разработчик.</NavLink></h1>
         : <h1 className={styles.greeting}>Сергей Кашко. React-разработчик.</h1>
         }
         </div>
      </div>
   );
}

export default Greeting;
