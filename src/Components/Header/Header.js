import React from "react"
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import styles from "./Header.module.css"
import Settings from "./Settings/Settings"

const Header = (props) => {

   const { spaDisplayMode, colorTheme } = props

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <Settings {...props} />
            {spaDisplayMode
               ? <nav className={styles.navigation + ' ' + styles[`theme_${colorTheme}`]}>
                  <NavLink activeClassName={styles.active} to='/biography' exact>
                     <FormattedMessage id='header.nav.biography' /></NavLink>
                  <NavLink activeClassName={styles.active} to='/skills'>
                     <FormattedMessage id='header.nav.skills' /></NavLink>
                  <NavLink activeClassName={styles.active} to='/projects'>
                     <FormattedMessage id='header.nav.projects' /></NavLink>
                  <NavLink activeClassName={styles.active} to='/contacts'>
                     <FormattedMessage id='header.nav.contacts' /></NavLink>
               </nav>
               : <nav className={`${styles.navigation} ${styles.displayHTML} ${styles[`theme_${colorTheme}`]}`}>
                  <a href="#biography"><FormattedMessage id='header.nav.biography' /></a>
                  <a href="#skills"><FormattedMessage id='header.nav.skills' /></a>
                  <a href="#projects"><FormattedMessage id='header.nav.projects' /></a>
                  <a href="#contacts"><FormattedMessage id='header.nav.contacts' /></a>
               </nav>
            }
         </div>
      </div>
   )
}

export default Header
