import React from 'react';
import styles from './Project.module.css';
import Button from '../../Button/Button';



function Project() {
   return (
      <div className={styles.project}>
         <div className={styles.projectReview}>
            <Button title='Смотреть' />
         </div>
         <div className={styles.desctiption}>
            <div className={styles.desctiptionBox}>
               <div className={styles.descriptionTitle}>Название проекта</div>
               <div className={styles.shortDescription}>Короткое описание</div>
            </div>
         </div>
      </div>
   );
}

export default Project;
