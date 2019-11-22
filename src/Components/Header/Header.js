import React from "react";
import styles from "./Header.module.css";

function Header() {
   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <nav className={styles.navigation}>
               <a className={styles.active} href="№">Обо мне</a>
               <a href="#skills">Навыки</a>
               <a href="#myProjects">Проекты</a>
               <a href="#contacts">Контакты</a>
            </nav>
         </div>
      </div>
   );
}

export default Header;
