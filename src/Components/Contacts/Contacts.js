import React from 'react'
import { injectIntl } from 'react-intl'
import styles from './Contacts.module.css'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import Button from '../Button/Button'

const Contacts = ({ intl }) => {
   return (
      <div className={styles.contacts} id = 'contacts'>
         <div className={styles.container}>
            <ComponentHeader title={ intl.formatMessage({ id: 'contacts.header' }) } />
            <div className={styles.contactsBox}>
               <input type='text' placeholder={ intl.formatMessage({ id: 'contacts.form.p_hold.name' }) } />
               <input type='email' placeholder={ intl.formatMessage({ id: 'contacts.form.p_hold.email' }) } />
               <textarea placeholder ={ intl.formatMessage({ id: 'contacts.form.p_hold.message' }) } 
                  cols='30' rows='5'></textarea>
            </div>
            <Button title={ intl.formatMessage({ id: 'contacts.form.button' }) } />
         </div>
      </div>
   )
}

export default injectIntl(Contacts)
