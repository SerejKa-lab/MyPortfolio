import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.name}>Кашко Сергей</span>
        <nav className={styles.linksBox}>
          <a href = '#1' className={styles.link}>1</a>
          <a href = '#2' className={styles.link}>2</a>
          <a href = '#3' className={styles.link}>3</a>
          <a href = '#4' className={styles.link}>4</a>
        </nav>
        <span className={styles.copyright}>Все права защищены</span>
      </div>
    </div>
  );
}

export default Footer;
