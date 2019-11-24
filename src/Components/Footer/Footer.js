import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
   const footerClassName = props.spaDisplayMode ? `${styles.footer} ${styles.footerSPA}` : styles.footer;
   return (
      <div className={footerClassName}>
         <div className={styles.container}>
            <span className={styles.name}>Кашко Сергей</span>
            <nav className={styles.linksBox}>
               <a className = {styles.socialVK} href='https://vk.com/id28901' target='_blank' rel='noopener noreferrer'> </a>
               <a className = {styles.socialTelegram} href='tg://resolve?domain=Sergey_Kashko'> </a>
               <a className = {styles.socialPhone} href='tel:+375295625799'> </a>
            </nav>
            <span className={styles.copyright}>2019. Все права защищены</span>
         </div>
      </div>
   );
}

export default Footer;
