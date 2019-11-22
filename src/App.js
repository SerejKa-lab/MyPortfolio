import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Slogan from './Components/Slogan/Slogan';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import MyProjects from './Components/MyProjects/MyProjects';
import Biography from './Components/Biography/Biography';
import Greeting from './Components/Greeting/Greeting';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Greeting />
      <Biography />
      <Skills />
      <MyProjects />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
    );
}

export default App;