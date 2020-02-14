import React from 'react'
import styles from './Settings.module.css'
import SettingsIcon from './SettingsIcon/SettingsIcon'
import SettingsMenu from './SettingsMenu/SettingsMenu'
import onClickOutside from 'react-onclickoutside'
// onClickOutside supports class components



class Settings extends React.Component {

    state = {
        showMenu: false
    }

    setMenuDisp = (value) => this.setState({ showMenu: value })
    handleClickOutside = () => this.setMenuDisp(false)

    render() {

        const { showMenu } = this.state
        const { colorTheme } = this.props

        return (
            <div className={styles.settings}>
                <div className={styles.iconWrapper} onClick={() => this.setMenuDisp(!showMenu)}>
                    <SettingsIcon showMenu={showMenu} colorTheme={colorTheme} />
                </div>
                { showMenu && <SettingsMenu {...this.props} /> }
            </div>
        )
    }
}

export default onClickOutside(Settings)