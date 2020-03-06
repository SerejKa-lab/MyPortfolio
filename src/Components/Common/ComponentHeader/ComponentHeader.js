import React from 'react'
import styles from './ComponentHeader.module.css'
import { ColorThemeContext } from '../../../Utils/ReactContects/ColorThemeContext'
import { useContext } from 'react'

const ComponentHeader = ({ title }) => {
    
    const colorTheme = useContext(ColorThemeContext)
    
    return (
        <h2 className={styles.title + ' ' + styles[`theme_${colorTheme}`]} >
            {title}
        </h2>
    )
}


export default ComponentHeader