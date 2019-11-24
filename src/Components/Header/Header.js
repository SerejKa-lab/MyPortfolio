import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = (props) => {

   const onSetClick = () => {
      props.setDisplayMode()
   }

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <NavLink to = '/MyPortfolio'>
               <img src="https://avatars.mds.yandex.net/get-dialogs/1676983/b298e77d9920f3e0409e/orig" 
                  alt="settings" className={styles.ToggleModeIcon} onClick={ onSetClick } />
            </NavLink>
            {props.spaDisplayMode
               ? <nav className={styles.navigation}>
                  <NavLink activeClassName={styles.active} to='/MyPortfolio' exact>Главная</NavLink>
                  <NavLink activeClassName={styles.active} to='/MyPortfolio/skills'>Навыки</NavLink>
                  <NavLink activeClassName={styles.active} to='/MyPortfolio/projects'>Проекты</NavLink>
                  <NavLink activeClassName={styles.active} to='/MyPortfolio/slogan'>Слоган</NavLink>
                  <NavLink activeClassName={styles.active} to='/MyPortfolio/contacts'>Контакты</NavLink>
               </nav>
               : <nav className={`${styles.navigation} ${styles.displayHTML}`}>
                  <a href="#startPage">Биография</a>
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
