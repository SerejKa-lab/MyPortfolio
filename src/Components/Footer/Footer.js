import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './Footer.module.css'
import VkIcon from '../SocialIcons/VkIcon'
import TelegramIcon from '../SocialIcons/TelegramIcon'
import ViberIcon from '../SocialIcons/ViberIcon'
import PhoneIcon from '../SocialIcons/PhoneIcon'

const Footer = ({spaDisplayMode, colorTheme, locale}) => {
   const footerClassName = spaDisplayMode ? `${styles.footer} ${styles.footerSPA}` : styles.footer
   const fullNameStyle = locale === 'ru' 
      ? styles.name+' '+styles.ruLang
      : styles.name+' '+styles.enLang
   const copyRightStyle = locale === 'ru'
   ? styles.copyright+' '+styles.ruLang
   : styles.copyright+' '+styles.enLang
   
   return (
      <div className={footerClassName}>
         <div className={styles.container}>
            <span className={fullNameStyle}><FormattedMessage id='footer.name' /></span>
            <nav className={styles.linksBox}>
               <a href='https://vk.com/id28901' target='_blank' rel='noopener noreferrer'>
                  <VkIcon colorTheme={colorTheme} />
               </a>
               <a href='viber://chat?add=375295625799'><ViberIcon colorTheme={colorTheme} /></a>
               <a href='tg://resolve?domain=Sergey_Kashko'><TelegramIcon colorTheme={colorTheme} /></a>
               <a href='tel:+375295625799'><PhoneIcon colorTheme={colorTheme} /></a>
            </nav>
            <span className={copyRightStyle}><FormattedMessage id='footer.rights' /></span>
         </div>
      </div>
   )
}

export default Footer
