import React from "react"
import styles from './SkillSubject.module.css'
import { ColorThemeConsumer } from '../../../Utils/ReactContects/ColorThemeContext'

const SkillSubject = (props) =>
    <ColorThemeConsumer>
        {(colorTheme) =>
            <div className={styles.mySkill + ' ' + styles[`theme_${colorTheme}`]}>
                <div className={styles.technology}>
                    <img src={props.src} alt='icon-logo' />
                </div>
                <span className={styles.description}>{props.description}</span>
            </div>
        }
    </ColorThemeConsumer>

export default SkillSubject