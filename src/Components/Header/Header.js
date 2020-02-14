import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";
import Settings from "../Settings/Settings";

const Header = (props) => {

   const { spaDisplayMode, colorTheme } = props

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <Settings { ...props } />
            {spaDisplayMode
               ? <nav className={styles.navigation+' '+styles[`theme_${colorTheme}`]}>
                  <NavLink activeClassName={styles.active} to='/biography' exact>Биография</NavLink>
                  <NavLink activeClassName={styles.active} to='/skills'>Навыки</NavLink>
                  <NavLink activeClassName={styles.active} to='/projects'>Проекты</NavLink>
                  <NavLink activeClassName={styles.active} to='/slogan'>Слоган</NavLink>
                  <NavLink activeClassName={styles.active} to='/contacts'>Контакты</NavLink>
               </nav>
               : <nav className={`${styles.navigation} ${styles.displayHTML} ${styles[`theme_${colorTheme}`]}`}>
                  <a href="#biography">Биография</a>
                  <a href="#skills">Навыки</a>
                  <a href="#projects">Проекты</a>
                  <a href="#slogan">Слоган</a>
                  <a href="#contacts">Контакты</a>
               </nav>
            }
         </div>
      </div>
   );
}

export default Header;
