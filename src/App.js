import React from 'react';
import { Route } from 'react-router-dom';
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
   state = {
      spaDisplayMode: false
   }

   setDisplayMode = () => {
      this.setState({ spaDisplayMode: !this.state.spaDisplayMode })
   }

   render() {
      return (
         <div className={styles.app}>
            <Header setDisplayMode={this.setDisplayMode} spaDisplayMode={this.state.spaDisplayMode} />
            <Greeting spaDisplayMode={this.state.spaDisplayMode} />
            {this.state.spaDisplayMode
               ? <div className = {styles.displaySPA}>
                  <Route className='biogaphyRoute' path='/' exact component={Biography} />
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
            <Footer spaDisplayMode = {this.state.spaDisplayMode} />
         </div>
      );
   }
}
export default App;