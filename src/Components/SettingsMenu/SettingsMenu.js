import React from 'react'
import styles from './SettingsMenu.module.css'
import { Link } from 'react-router-dom'


const SettingsMenu = ({display, setSpaDisplayMode, setColorTheme}) => {

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
        <div className={menuStyle}>
            <div className={styles.dispayMode}>
                <Link to='/biography'><div className={styles.htmlButton} onClick={setHtmlMode}>HTML</div></Link>
                <Link to='/biography'><div className={styles.spaButton} onClick={setSpaMode}>SPA</div></Link>
            </div>
            <div className={styles.colorTheme}>
                {colorButtons}
            </div>
        </div>
    )
}

export default SettingsMenu