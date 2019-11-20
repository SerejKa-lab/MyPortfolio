import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Привет!</span>
          <span>Меня зовут Сергей Кашко.</span>
          <span>Я - React-разработчик</span>
        </div>
        <img
          src="https://avatars.mds.yandex.net/get-pdb/1383054/119bc1e9-3111-4203-a2ab-5651b7c945cb/s1200"
          alt = 'portfolio'
        />
      </div>
    </div>
  );
}

export default Main;
