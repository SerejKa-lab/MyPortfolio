import React from "react";
import styles from "./Contacts.module.css";

function Contacts() {
   return (
      <div className={styles.contacts}>
         <div className={styles.container}>
            <div className={styles.header}>Контакты</div>
            <div className={styles.contactsBox}>
               <input type="text" placeholder='Your name' />
               <input type="email" placeholder = 'E-mail' />
               <textarea placeholder = 'Message' cols="30" rows="5"></textarea>
            </div>
            <div className={styles.btn}>
               <button>Отправить</button>
            </div>
         </div>
      </div>
   );
}

export default Contacts;
