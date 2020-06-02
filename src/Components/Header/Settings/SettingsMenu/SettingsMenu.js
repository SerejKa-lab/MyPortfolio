import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './SettingsMenu.module.css'
import { Link } from 'react-router-dom'


const SettingsMenu = (props) => {

    const { setMenuDisp, spaDisplayMode, setSpaDisplayMode, colorTheme, setColorTheme,
        locale, setLocale } = props

    const hideMenu = (e) => {
        if (e.keyCode === 27) setMenuDisp(false)
    }
    const setHtmlMode = () => setSpaDisplayMode(false)
    const setSpaMode = () => setSpaDisplayMode(true)
    const setRuLocale = () => setLocale('ru')
    const setRuLocaleKey = (e) => {
        if (e.charCode === 13) setLocale('ru')
    }
    const setEnLocale = () => setLocale('en')
    const setEnLocaleKey = (e) => {
        if (e.charCode === 13) setLocale('en')
    }

    const setColorOnClick = (color) => setColorTheme(color)
        const setColorOnKey = (e, color) => {
            if (e.charCode === 13) setColorTheme(color)
        }

    const colors = ['blue', 'darkRed', 'green', 'maroon', 'violet']

    const renderColorButtons = () => colors.map((color) => {
        return (
            <div className={styles.colorButton + ' ' + styles[color]}
                onClick={() => setColorOnClick(color)} key={color}
                tabIndex='0' onKeyPress={(e) => setColorOnKey(e, color)} />
        )
    })

    const ruStyle = locale === 'ru' ? styles.active : ''
    const enStyle = locale === 'en' ? styles.active : ''
    const htmlStyle = !spaDisplayMode ? styles.active : ''
    const spaStyle = spaDisplayMode ? styles.active : ''
    const buttonsBlockStyle = `${styles.buttonsBlock} ${styles[`theme_${colorTheme}`]}`

    return (
        <div className={styles.settingsMenu} onKeyDown={hideMenu}>
            <div className={buttonsBlockStyle}>
                <div className={styles.langSelect + ' ' + styles.theme_blue}>
                    <span className={ruStyle} onClick={setRuLocale}
                        onKeyPress={setRuLocaleKey} tabIndex='0'>
                        <FormattedMessage id='settings.settingsMenu.lang_icon.ru' />
                    </span>
                    <span className={enStyle} onClick={setEnLocale}
                        onKeyPress={setEnLocaleKey} tabIndex='0'>
                        <FormattedMessage id='settings.settingsMenu.lang_icon.en' />
                    </span>
                </div>
                <div className={styles.displayStyle + ' ' + styles.theme_blue}>
                    <span onClick={setHtmlMode} className={htmlStyle}><Link to='/biography'>HTML</Link></span>
                    <span onClick={setSpaMode} className={spaStyle}><Link to='/biography'>SPA</Link></span>
                </div>
            </div>
            <div className={styles.colorTheme}>
                {renderColorButtons()}
            </div>
        </div>
    )
}


export default SettingsMenu