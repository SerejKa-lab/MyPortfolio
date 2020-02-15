import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './SettingsMenu.module.css'
import { Link } from 'react-router-dom'


const SettingsMenu = (props) => {

    const { spaDisplayMode, setSpaDisplayMode, colorTheme, setColorTheme, 
            locale, setLocale } = props

    const setHtmlMode = () => setSpaDisplayMode(false)
    const setSpaMode = () => setSpaDisplayMode(true)
    const setRuLocale = () => setLocale('ru')
    const setEnLocale = () => setLocale('en')

    const colors = ['blue', 'darkRed', 'green', 'maroon', 'violet']
    const colorButtons = colors.map((color) => {
        return (
            <div className={styles.colorButton + ' ' + styles[color]}
                onClick={() => setColorTheme(color)} key={color} />
        )
    })

    const ruStyle = locale === 'ru' ? styles.active : ''
    const enStyle = locale === 'en' ? styles.active : ''
    const htmlStyle = !spaDisplayMode ? styles.active : ''
    const spaStyle = spaDisplayMode ? styles.active : ''
    const buttonsBlockStyle = `${styles.buttonsBlock} ${styles[`theme_${colorTheme}`]}`

    return (
        <div className={styles.settingsMenu}>
            <div className={buttonsBlockStyle}>
                <div className={styles.langSelect + ' ' + styles.theme_blue}>
                    <span className={ruStyle} onClick={setRuLocale}>
                        <FormattedMessage id='settings.settingsMenu.lang_icon.ru' />
                    </span>
                    <span className={enStyle} onClick={setEnLocale}>
                        <FormattedMessage id='settings.settingsMenu.lang_icon.en' />
                    </span>
                </div>
                <div className={styles.displayStyle + ' ' + styles.theme_blue}>
                    <span onClick={setHtmlMode} className={htmlStyle}><Link to='/biography'>HTML</Link></span>
                    <span onClick={setSpaMode} className={spaStyle}><Link to='/biography'>SPA</Link></span>
                </div>
            </div>
            <div className={styles.colorTheme}>
                {colorButtons}
            </div>
        </div>
    )
}


export default SettingsMenu