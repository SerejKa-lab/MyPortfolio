import React from 'react';
import { Route } from 'react-router-dom';
import { ColorThemeProvider } from './ReactContects/ColorThemeContext'
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Slogan from './Components/Slogan/Slogan';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import MyProjects from './Components/MyProjects/MyProjects';
import Biography from './Components/Biography/Biography';
import Greeting from './Components/Greeting/Greeting';

class App extends React.Component {

   componentDidMount() {
      this.restoreState();
   }

   state = {
      spaDisplayMode: false,
      colorTheme: 'maroon'
   }

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

      return (
         <ColorThemeProvider value={this.state.colorTheme}>
            <div className={styles.app + ' ' + styles[`theme_${this.state.colorTheme}`]}>
               <Header
                  setSpaDisplayMode={this.setSpaDisplayMode}
                  spaDisplayMode={this.state.spaDisplayMode}
                  setColorTheme={this.setColorTheme} 
                  colorTheme={this.state.colorTheme} />
               <Greeting spaDisplayMode={this.state.spaDisplayMode} />
               {this.state.spaDisplayMode
                  ? <div className={styles.displaySPA}>
                     <Route className='biogaphyRoute' path='/biography' exact component={Biography} />
                     <Route path='/skills' component={Skills} />
                     <Route path='/projects' component={MyProjects} />
                     <Route path='/slogan' component={Slogan} />
                     <Route path='/contacts' component={Contacts} />
                  </div>
                  : <div>
                     <Biography />
                     <Skills />
                     <MyProjects />
                     <Slogan />
                     <Contacts />
                  </div>
               }
               <Footer spaDisplayMode={this.state.spaDisplayMode} colorTheme={this.state.colorTheme}/>
            </div>
         </ColorThemeProvider>
      );
   }
}
export default App;