import React from 'react';
import styles from './Slogan.module.css';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Button from '../Button/Button';

const Slogan = () => {
   return (
      <div id='slogan' className={styles.slogan}>
         <div className={styles.container}>
            <ComponentHeader title = 'Работаю на результат!' />
            <img src="https://newbusiness.su/wp-content/uploads/2019/08/post_5d57cc231e206-695x391.jpeg" alt="Result" />
            <Button title = 'Предложить работу!' />
         </div>
      </div>
   );
}

export default Slogan;
