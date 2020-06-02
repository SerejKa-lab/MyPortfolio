import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { telegramClient, chatId } from '../../Utils/TelegramClient/TelegramClient'
import styles from './Contacts.module.css'
import ComponentHeader from '../Common/ComponentHeader/ComponentHeader'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import SendMessageFormik from './SendMessageFormik/SendMessageFormik'
import ModalWindow from '../Common/ModalWindow/ModalWindow'
import ErrorMsg from './ErrorMsg/ErrorMsg'
import SPATransition from '../Common/SPATransition/SPATransition'


const Contacts = ({ intl, locale, spaDisplayMode, setError }) => {

   const [phone, setPhone] = useState(null)
   const [phoneErr, setPhoneErr] = useState(false)
   const phoneIsValid = phone && !phoneErr
   const [submitNum, setSubmitNum] = useState(0)
   const [showModal, setModal] = useState(false)
   const [sendingProgress, setSendingProgress] = useState(false)

   const onSubmit = async (name, message) => {
      try {
         if (phoneIsValid && name && message) {
            setSendingProgress(true)

            const tMessage =
               `ОТ: ${name}, ТЕЛЕФОН: ${phone}, СООБЩЕНИЕ: '${message}'`

            await telegramClient.sendMessage(chatId, tMessage, {
               disable_web_page_preview: true,
               disable_notification: true
            })
            
            setSubmitNum(0)
            setModal(true)
            setPhone(null)

            return {messageIsSent: true}

         } else {
            setSubmitNum(submitNum + 1)
            return {messageIsSent: false}
         }
      } catch (err) {
         setError(err.message)
         return {messageIsSent: false}
      } finally {
         setSendingProgress(false)
      }
   }

   const componentTitle = <FormattedMessage id='contacts.header' />
   const phoneHoder = intl.formatMessage({ id: 'contacts.form.p_hold.phone' })
   const phoneErrMessage = intl.formatMessage({ id: 'contacts.form.p_hold.phone_error' })
   const showPhoneError = (!phone || phoneErr) && submitNum !== 0 ? true : false

   return (
     <SPATransition trigger={spaDisplayMode}>
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
                  <ErrorMsg message={phoneErrMessage} trigger={showPhoneError} />
   
                  <SendMessageFormik
                     onSubmit={onSubmit}
                     phoneIsValid={phoneIsValid}
                     btnDisabled={showModal || sendingProgress}
                     submitNum={submitNum}
                     sendingProgress={sendingProgress} />
               </div>
   
               {showModal
                  && <ModalWindow
                     showModal={showModal}
                     message={'Your message is sent! Thank you!'}
                     onClick={() => setModal(false)}
                  />
               }
            </div>
         </div>
     </SPATransition>
   )
}

export default injectIntl(Contacts)
