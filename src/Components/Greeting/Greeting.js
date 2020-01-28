import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Greeting.module.css";

const Greeting = (props) => {
   return (
      <div className={styles.greetingPage} id='startPage'>
         <div className={styles.container}>
         {props.spaDisplayMode
         ? <h1><NavLink to='/biography' className={styles.greeting}>Сергей Кашко. React-разработчик.</NavLink></h1>
         : <h1 className={styles.greeting}>Сергей Кашко. React-разработчик.</h1>
         }
         </div>
      </div>
   );
}

export default Greeting;
