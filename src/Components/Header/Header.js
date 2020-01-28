import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";
import SettingsIcon from '../SettingsIcon/SettingsIcon'
import SettingsMenu from "../SettingsMenu/SettingsMenu";

const Header = ({spaDisplayMode, setSpaDisplayMode, setColorTheme, colorTheme}) => {

   const [showMenu, setMenuDisp] = useState(false)

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.iconWrapper} onClick={() => setMenuDisp(!showMenu)}>
               <SettingsIcon active={showMenu} colorTheme={colorTheme}/>
            </div>
            <SettingsMenu display={showMenu} setSpaDisplayMode={setSpaDisplayMode} 
               setColorTheme={setColorTheme}/>
            {spaDisplayMode
               ? <nav className={styles.navigation+' '+styles[`theme_${colorTheme}`]}>
                  <NavLink activeClassName={styles.active} to='/portfolio/biography' exact>Главная</NavLink>
                  <NavLink activeClassName={styles.active} to='/portfolio/skills'>Навыки</NavLink>
                  <NavLink activeClassName={styles.active} to='/portfolio/projects'>Проекты</NavLink>
                  <NavLink activeClassName={styles.active} to='/portfolio/slogan'>Слоган</NavLink>
                  <NavLink activeClassName={styles.active} to='/portfolio/contacts'>Контакты</NavLink>
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
