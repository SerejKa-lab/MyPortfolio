import React from "react"
import styles from './SkillSubject.module.css'
import { ColorThemeContext } from '../../../Utils/ReactContects/ColorThemeContext'
import { useContext } from "react"

const SkillSubject = (props) => {

    const colorTheme = useContext(ColorThemeContext)

    return (
        <div className={styles.mySkill + ' ' + styles[`theme_${colorTheme}`]}>
            <div className={styles.technology}>
                <img src={props.src} alt='icon-logo' />
            </div>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}

export default SkillSubject