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
    toggleMenuDisp = () => this.setMenuDisp(!this.state.showMenu)
    handleClickOutside = () => this.setMenuDisp(false)
    
    render() {

        const { showMenu } = this.state
        const { colorTheme } = this.props

        return (
            <div className={styles.settings}>
                <div className={styles.iconWrapper}>
                    <SettingsIcon 
                        showMenu={showMenu} 
                        colorTheme={colorTheme} 
                        toggleMenuDisp={this.toggleMenuDisp}
                        setMenuDisp={this.setMenuDisp} />
                </div>
                { showMenu && <SettingsMenu {...this.props} setMenuDisp={this.setMenuDisp} /> }
            </div>
        )
    }
}

export default onClickOutside(Settings)