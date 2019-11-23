import React from "react";
import styles from "./Biography.module.css";
import ComponentHeader from '../ComponentHeader/ComponentHeader'

const Biography = () => {
   return (
      <div className={styles.biography}>
         <div className={styles.container}>
            <ComponentHeader title='Биография' />
            <div className={styles.biographyBox}>
               <img
                  src="https://avatars.mds.yandex.net/get-pdb/770122/4e5f72f5-a2ea-46d5-9e38-3965a3f34483/s1200"
                  alt='biography'
               />
               <p>Никогда не откладывай на завтра то, что можешь сделать послезавтра. Марк Твен</p>
            </div>
         </div>
      </div>
   );
}

export default Biography;
