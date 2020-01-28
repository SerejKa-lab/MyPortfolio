import React from 'react';
import styles from './ComponentHeader.module.css';
import { ColorThemeConsumer } from '../../ReactContects/ColorThemeContext';

const ComponentHeader = ({ title }) =>
    <ColorThemeConsumer>
        {(colorTheme) =>
            <h2 className={styles.title + ' ' + styles[`theme_${colorTheme}`]} >
                {title}
            </h2>
        }
    </ColorThemeConsumer>


export default ComponentHeader;