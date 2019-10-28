import React from "react";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.header}>Контакты</div>
        <div className={styles.contactsBox}>
          <p>Имя</p>
         <input type="text"/>
         <p>Контакты</p>
         <input type="text"/>
         <p>Сообщение</p>
         <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.btn}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
