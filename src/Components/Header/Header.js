import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <a href="#main">Главная</a>
          <a href="#skills">Навыки</a>
          <a href="#myProjects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
