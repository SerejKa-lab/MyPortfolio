import React from 'react';
import styles from './SocialIcon.module.css'


const TelegramIcon = ({ colorTheme, ...styleArgs }) => {
    const style = { width: '30px', height: '30px', ...styleArgs }
    return (
        <svg style={style} className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="1 -35 511.99993 511">
            <g className={styles[`theme_${colorTheme}`]}>
                <path d="m121.453125 253.171875 63.554687 158.886719 82.75-82.753906 141.535157 112.503906 102.707031-441.308594-512 
                    205.480469zm-39.933594-47.640625 244.046875-97.945312-194.074218 117.363281zm287.535157-89.25-161.980469 148.1875-19.484375 
                    73.425781-36.035156-90.085937zm-149.851563 219.230469 9.816406-36.996094 15.144531 12.035156zm171.65625 
                    53.394531-147.386719-117.152344 221.902344-203.007812zm0 0" data-original="#000000"
                    className="active-path" data-old_color="#000000" fill="#C8008B"/>
            </g> 
        </svg>
    )
}

export default TelegramIcon;