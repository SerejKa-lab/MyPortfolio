import React from 'react';
import styles from './Portfolio.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Slogan from './Slogan/Slogan';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import MyProjects from './MyProjects/MyProjects';

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
    );
}

export default Portfolio;
