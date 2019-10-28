import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <div className={styles.text}>Работаю на результат!</div>
        <img src="http://fumcsr.org/sites/default/files/File/campleft.jpg" alt="Result"/>
        <div className={styles.button}>
          <button>Нанять меня!</button>
        </div>
      </div>
    </div>
    );
}

export default Slogan;
