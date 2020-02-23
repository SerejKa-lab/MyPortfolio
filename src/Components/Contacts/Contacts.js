import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import { telegramClient, chatId } from '../../Utils/TelegramClient/TelegramClient'
import styles from './Contacts.module.css'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import SendMessageFormik from './SendMessageFormik/SendMessageFormik'
import ModalWindow from '../Common/ModalWindow/ModalWindow'


const Contacts = ({ intl, locale }) => {

   const [phone, setPhone] = useState(null)
   const [phoneErr, setPhoneErr] = useState(false)
   const phoneIsValid = phone && !phoneErr
   const [submitNum, setSubmitNum] = useState(0)
   const [showModal, setModal] = useState(false)

   const onSubmit = async (name, message) => {
      if (phoneIsValid && name && message) {
         try {
            const tMessage = 
               `ОТ: ${name}, ТЕЛЕФОН: ${phone}, СООБЩЕНИЕ: '${message}'`

            await telegramClient.sendMessage(chatId, tMessage, {
               disable_web_page_preview: true,
               disable_notification: true
            })
            setPhone(null)
            setSubmitNum(0)
            setModal(true)
            
            await telegramClient.getWebhookInfo()
         } catch (err) {
            alert(err)
         }
      } else {
         setSubmitNum(submitNum + 1)
      }
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

               <SendMessageFormik 
                  onSubmit={onSubmit}
                  phoneIsValid={phoneIsValid}
                  btnDisabled={showModal}
                  submitNum={submitNum} />
            </div>
            { showModal 
               && <ModalWindow 
                     showModal={showModal}
                     message={'Your message is sent!\nThank you!'}
                     onClick={() => setModal(false)}
                  /> 
            }
         </div>
      </div>
   )
}

export default injectIntl(Contacts)
