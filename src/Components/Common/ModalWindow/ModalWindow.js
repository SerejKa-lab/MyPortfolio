import React, { useEffect } from 'react'
import Portal from '../../../Utils/PortalAPI/Portal'
import styles from './ModalWindow.module.css'
import classNames from 'classnames'
import { ColorThemeContext } from '../../../Utils/ReactContects/ColorThemeContext'
import { useContext } from 'react'
import { Transition } from 'react-transition-group'


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

    return (
        <Portal>
            <Transition
                in={showModal}
                timeout={330}
                mountOnEnter
                unmountOnExit
                appear
            >
                {state => 
                    <div className={styles.modal + ' ' + styles[state]} onClick={onClick}
                        ref={divRef} tabIndex='0' onKeyDown={onClick}>
                        <div className={contentStyles}>
                            {message}
                        </div>
                    </div>
                }
            </Transition>
        </Portal >
    )
}


export default ModalWindow