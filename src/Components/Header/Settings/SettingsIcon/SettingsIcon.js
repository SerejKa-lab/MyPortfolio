import React from 'react'
import styles from './SettingsIcon.module.css'
import classNames from 'classnames'


const SettingsIcon = ({ showMenu, colorTheme, toggleMenuDisp, setMenuDisp, ...styleArgs }) => {
    
    const style = { width: '22px', height: '22px', ...styleArgs }

    const iconStyle = classNames({
        [styles.iconActive]: showMenu,
        [styles[`theme_${colorTheme}`]]: !showMenu
    })

    const toggleMenuClick = () => toggleMenuDisp()
    const toggleMenuKey = (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            e.preventDefault();
            toggleMenuDisp()
        }
        if (e.keyCode === 27) setMenuDisp(false)
    }

    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" 
            style={style} className={styles.icon} tabIndex='0' 
            onClick={toggleMenuClick} onKeyDown={toggleMenuKey} >
    	    <g className={iconStyle}>
                <path d="M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4
                        c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60
                        c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98
                        c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60
                        c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6
                        c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60
                        c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6
                        c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60
                        C512,220.1,507.2,214.1,500.6,212.6z M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75
                        C330,298.4,296.4,332,255,332z"/>
            </g>
        </svg>
    )
}

export default SettingsIcon