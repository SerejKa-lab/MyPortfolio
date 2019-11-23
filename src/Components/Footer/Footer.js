import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
   const footerClassName = props.spaDisplayMode ? `${styles.footer} ${styles.footerSPA}` : styles.footer;
   return (
      <div className={footerClassName}>
         <div className={styles.container}>
            <span className={styles.name}>Кашко Сергей</span>
            <nav className={styles.linksBox}>
               <a href='#1'>1</a>
               <a href='#2'>2</a>
               <a href='#3'>3</a>
               <a href='#4'>4</a>
            </nav>
            <span className={styles.copyright}>Все права защищены</span>
         </div>
      </div>
   );
}

export default Footer;
