import React from 'react';
import styles from './Slogan.module.css';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Button from '../Button/Button';

function Slogan() {
   return (
      <div className={styles.slogan}>
         <div className={styles.container}>
            <ComponentHeader title = 'Работаю на результат!' />
            <img src="http://fumcsr.org/sites/default/files/File/campleft.jpg" alt="Result" />
            <Button title = 'Предложить работу!' />
         </div>
      </div>
   );
}

export default Slogan;
