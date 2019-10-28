import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}>Кашко Сергей</div>
        <div className={styles.linksBox}>
          <div className={styles.link}>1</div>
          <div className={styles.link}>2</div>
          <div className={styles.link}>3</div>
          <div className={styles.link}>4</div>
        </div>
        <div className={styles.copyright}>2019 Все права защищены</div>
      </div>
    </div>
  );
}

export default Footer;
