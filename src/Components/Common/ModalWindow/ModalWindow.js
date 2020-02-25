import React, { useEffect } from 'react'
import Portal from '../../../Utils/PortalAPI/Portal'
import styles from './ModalWindow.module.css'
import classNames from 'classnames'
import { ColorThemeConsumer } from '../../../Utils/ReactContects/ColorThemeContext'


const ModalWindow = ({ showModal, onClick, message }) => {
    
    const divRef = React.createRef()
    useEffect(() => {
        divRef.current.focus()
    })

    return (
        <ColorThemeConsumer>
            {(colorTheme) => {

                const contentStyles = classNames(
                    styles.content,
                    styles[`theme_${colorTheme}`]
                )

                return (
                    <>
                        {showModal
                            && <Portal>
                                <div className={styles.modal} onClick={onClick}
                                    ref={divRef} tabIndex='0' onKeyDown={onClick}>
                                    <div className={contentStyles}>
                                        {message}
                                    </div>
                                </div>
                            </Portal>
                        }
                    </>
                )
            }}
        </ColorThemeConsumer>
    )
}


export default ModalWindow