import React from "react";
import styles from "./Contacts.module.css";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Button from "../Button/Button";

const Contacts = () => {
   return (
      <div className={styles.contacts} id = 'contacts'>
         <div className={styles.container}>
            <ComponentHeader title='Контакты' />
            <div className={styles.contactsBox}>
               <input type="text" placeholder='Your name' />
               <input type="email" placeholder = 'E-mail' />
               <textarea placeholder = 'Message' cols="30" rows="5"></textarea>
            </div>
            <Button title = 'Отправить' />
         </div>
      </div>
   );
}

export default Contacts;
