import React, { useEffect } from 'react'
import Portal from '../../../Utils/PortalAPI/Portal'
import styles from './ModalWindow.module.css'
import classNames from 'classnames'
import { ColorThemeContext } from '../../../Utils/ReactContects/ColorThemeContext'
import { useContext } from 'react'


const ModalWindow = ({ showModal, onClick, message }) => {

    const divRef = React.createRef()
    useEffect(() => {
        divRef.current.focus()
    })

    const colorTheme = useContext(ColorThemeContext)

    const contentStyles = classNames(
        styles.content,
        styles[`theme_${colorTheme}`]
    )

    if (showModal) return (
        <Portal>
            <div className={styles.modal} onClick={onClick}
                ref={divRef} tabIndex='0' onKeyDown={onClick}>
                <div className={contentStyles}>
                    {message}
                </div>
            </div>
        </Portal>
    )
}


export default ModalWindow