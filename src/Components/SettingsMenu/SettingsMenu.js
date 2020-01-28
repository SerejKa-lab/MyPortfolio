import React from 'react'
import styles from './SettingsMenu.module.css'


const SettingsMenu = ({display, setSpaDisplayMode, setMenuDisp}) => {

    const menuStyle = display ? styles.settingsMenu : styles.hideMenu

    const setHtmlMode = () => setSpaDisplayMode(false)
    const setSpaMode = () => setSpaDisplayMode(true)

    return(
        <div className={menuStyle} onBlur={() => setMenuDisp(false)} tabIndex={1}>
            <div className={styles.dispayMode}>
                <div className={styles.htmlButton} onClick={setHtmlMode}>HTML</div>
                <div className={styles.spaButton} onClick={setSpaMode}>SPA</div>
            </div>
            <div className={styles.colorTheme}>
                <div className={styles.colorButton+' '+styles.blue} />
                <div className={styles.colorButton+' '+styles.darkRed} />
                <div className={styles.colorButton+' '+styles.lightGreen} />
                <div className={styles.colorButton+' '+styles.maroon} />
                <div className={styles.colorButton+' '+styles.violet} />
            </div>
        </div>
    )
}

export default SettingsMenu