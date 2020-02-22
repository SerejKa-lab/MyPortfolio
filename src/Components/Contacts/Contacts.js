import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import { telegramClient, chatId } from '../../Utils/TelegramClient/TelegramClient'
import styles from './Contacts.module.css'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import SendMessageFormik from './SendMessageFormik/SendMessageFormik'


const Contacts = ({ intl, locale }) => {

   const [phone, setPhone] = useState('')
   const [phoneErr, setPhoneErr] = useState(false)
   const phoneIsValid = phone && !phoneErr
   const [submitNum, setSubmitNum] = useState(0)

   const onSubmit = (name, message) => {
         if (phoneIsValid && name && message) {
            const tMessage = `ОТ: ${name}, ТЕЛЕФОН: ${phone}, СООБЩЕНИЕ: '${message}'`

            telegramClient.sendMessage(chatId, tMessage, {
               disable_web_page_preview: true,
               disable_notification: true
            }).then(() => {
               setPhone('')
               setSubmitNum(0)
               alert('your message is sent')
            })
            telegramClient.getWebhookInfo().catch(() => {
               alert('something went wrone...')
            })
         }
         setSubmitNum(submitNum + 1)
   }

   const componentTitle = intl.formatMessage({ id: 'contacts.header' })
   const phoneHoder = intl.formatMessage({ id: 'contacts.form.p_hold.phone' })
   const phoneErrMessage = intl.formatMessage({ id: 'contacts.form.p_hold.phone_error' })


   return (
      <div className={styles.contacts} id='contacts'>
         <div className={styles.container}>
            <ComponentHeader title={componentTitle} />
            <div className={styles.messageBox}>
               <PhoneNumber 
                  placeholder={phoneHoder}
                  setPhoneErr={setPhoneErr} 
                  phone={phone} 
                  setPhone={setPhone}
                  locale={locale} />
               {(!phone || phoneErr) && submitNum !==0
                  && <div className={styles.errorField}>{phoneErrMessage}</div> }

               <SendMessageFormik onSubmit={onSubmit} phoneIsValid={phoneIsValid} />
            </div>
         </div>
      </div>
   )
}

export default injectIntl(Contacts)
