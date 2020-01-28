import React from 'react'
import styles from './SettingsMenu.module.css'


const SettingsMenu = ({display, setSpaDisplayMode, setMenuDisp, setColorTheme}) => {

    const menuStyle = display ? styles.settingsMenu : styles.hideMenu

    const setHtmlMode = () => setSpaDisplayMode(false)
    const setSpaMode = () => setSpaDisplayMode(true)

    const colors = ['blue', 'darkRed', 'green', 'maroon', 'violet']
    const colorButtons = colors.map((color) => {
        return(
            <div className={styles.colorButton+' '+styles[color]} 
                onClick={() => setColorTheme(color)} key={color}/>
        )
    })

    return(
        <div className={menuStyle} onBlur={() => setMenuDisp(false)} tabIndex='0'>
            <div className={styles.dispayMode}>
                <div className={styles.htmlButton} onClick={setHtmlMode}>HTML</div>
                <div className={styles.spaButton} onClick={setSpaMode}>SPA</div>
            </div>
            <div className={styles.colorTheme}>
                {colorButtons}
            </div>
        </div>
    )
}

export default SettingsMenu