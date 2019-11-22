import React from "react";
import styles from "./Biography.module.css";
import BlockHeader from '../BlockHeader/BlockHeader'

function Biography() {
   return (
      <div className={styles.main}>
         <BlockHeader title = 'Краткая биография' />
         <div className={styles.container}>
            <img
               src="https://avatars.mds.yandex.net/get-pdb/770122/4e5f72f5-a2ea-46d5-9e38-3965a3f34483/s1200"
               alt='portfolio'
            />
            <div className={styles.biography}>
              
            </div>
         </div>
      </div>
   );
}

export default Biography;
