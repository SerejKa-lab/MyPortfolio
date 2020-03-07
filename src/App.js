import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ColorThemeProvider } from './Utils/ReactContects/ColorThemeContext'
import { IntlProvider } from 'react-intl'
import ru from './Locales/ru'
import en from './Locales/en'
import styles from './App.module.css'
import { projects } from './BLL/appData'
import { skills } from './BLL/appData'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import MyProjects from './Components/MyProjects/MyProjects'
import Biography from './Components/Biography/Biography'
import Greeting from './Components/Greeting/Greeting'
import Error404 from './Components/Error404/Error404'

// build locale data object
const locales = { ru, en }

class App extends React.Component {

   componentDidMount() {
      this.restoreState();
   }

   state = {
      spaDisplayMode: false,
      colorTheme: 'blue',
      locale: 'en'
   }

   setLocale = (value) => this.setState({ locale: value }, this.saveState)

   setColorTheme = (color) => {
      if (this.state.colorTheme !== color)
         this.setState({ colorTheme: color }, this.saveState)
   }

   setSpaDisplayMode = (display) => this.setState({ spaDisplayMode: display }, this.saveState)

   saveState = () => {
      let stateToJsonString = JSON.stringify(this.state);
      localStorage.setItem('PortfolioSettings', stateToJsonString);
   }

   restoreState = () => {
      let state = {};
      let jsonStringToState = localStorage.getItem('PortfolioSettings');
      if (jsonStringToState !== null) {
         state = JSON.parse(jsonStringToState);
      }
      this.setState(state)
   }


   render() {

      const { locale, colorTheme, spaDisplayMode } = this.state

      return (
         <IntlProvider locale={locale} messages={locales[locale]} >
            <ColorThemeProvider value={colorTheme}>
               <div className={styles.app + ' ' + styles[`theme_${colorTheme}`]}>
                  <Header
                     setSpaDisplayMode={this.setSpaDisplayMode}
                     spaDisplayMode={spaDisplayMode}
                     setColorTheme={this.setColorTheme}
                     colorTheme={colorTheme}
                     locale={locale}
                     setLocale={this.setLocale} />
                  <Greeting spaDisplayMode={spaDisplayMode} />
                  {spaDisplayMode
                     ? <div className={styles.displaySPA}>
                        <Switch>
                           <Redirect exact from='/' to='/biography' />
                           <Redirect exact from='/portfolio' to='/biography' />
                           <Route exact path='/biography'
                              render={() => <Biography spaDisplayMode={spaDisplayMode} />} />
                           <Route exact path='/skills'
                              render={() => <Skills skills={skills} spaDisplayMode={spaDisplayMode} />} />
                           <Route exact path='/projects'
                              render={() => <MyProjects projects={projects} spaDisplayMode={spaDisplayMode} />} />
                           <Route exact path='/contacts'
                              render={() => <Contacts locale={locale} spaDisplayMode={spaDisplayMode} />} />
                           <Route exact render={() => <Error404 spaDisplayMode={spaDisplayMode} />} />
                        </Switch>
                     </div>

                     : <div>
                        <Biography />
                        <Skills skills={skills} />
                        <MyProjects projects={projects} />
                        <Contacts locale={locale} />
                     </div>
                  }
                  <Footer
                     spaDisplayMode={spaDisplayMode}
                     colorTheme={colorTheme}
                     locale={locale} />
               </div>
            </ColorThemeProvider>
         </IntlProvider>
      );
   }
}
export default App