import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import styles from './SendMessageFormik.module.css'
import Button from '../../Common/Button/Button'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import Preloader from '../../Common/Preloader/Preloader'



const SendMessageForm = (props) => {
    const { values, touched, errors, handleSubmit, isSubmitting } = props     // Formik props
    const { intl } = props      // react-intl props
    const { onSubmit, phoneIsValid, btnDisabled, submitNum, sendingProgress } = props     // Contacts component props

    const submitFunc = (e) => {
        const { name, message } = values
        e.preventDefault()
        if (!(isSubmitting || btnDisabled)) {   // if isSubmitting or btnDisabled do nothing
            if (phoneIsValid) {
                onSubmit(name, message)
                handleSubmit()
            } else onSubmit()
        }
    }

    const onClick = btnDisabled ? null : submitFunc

    const errorsIsNotEmpty = Object.entries(errors).length !== 0
    const phoneError = !phoneIsValid && submitNum > 0
    const disabled = isSubmitting || btnDisabled || errorsIsNotEmpty || phoneError

    const showMessageErr = errors.message && touched.message ? true : false
    const showNameErr = errors.name && touched.name ? true : false

    const nameHolder = intl.formatMessage({ id: 'contacts.form.p_hold.name' })
    const messageHolder = intl.formatMessage({ id: 'contacts.form.p_hold.message' })
    const buttonTitle = intl.formatMessage({ id: 'contacts.form.button' })

    return (
        <Form className={styles.formikForm} onSubmit={submitFunc}>
            <div>
                <Field type="text" name="name" placeholder={nameHolder} />
                <ErrorMsg message={errors.name} trigger={showNameErr} />
            </div>
            <div>
                <Field name='message' component='textarea'
                    placeholder={messageHolder} cols='30' rows='5' />
                <ErrorMsg message={errors.message} trigger={showMessageErr} />
            </div>
            <div className={styles.buttonArea}>
                <Button title={buttonTitle} type='submit' onClick={onClick} disabled={disabled} />
                {sendingProgress 
                    && <span className={styles.preloader}><Preloader width='33px' /></span>}
            </div>
        </Form>
    )
}


// ------- wrap component with Formik ------>
const schema = yup.object().shape({
    name: yup.string()
        .max(100, <FormattedMessage id='contacts.form.name.max_err' />)
        .required(<FormattedMessage id='contacts.form.name.required_err' />),
    message: yup.string()
        .max(300, <FormattedMessage id='contacts.form.message.max_err' />)
        .required(<FormattedMessage id='contacts.form.message.required_err' />)
})


const SendMessageFormik = withFormik({
    validationSchema: schema,

    mapPropsToValues: (props) => {
        const { name, message } = props
        return {
            name: name || '',
            message: message || ''
        }
    },

    handleSubmit: (v, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            resetForm()
            setSubmitting(false)
        }, 1000)
    },
    displayName: 'BasicForm'
})(SendMessageForm)

// <-------------------------------------------



export default injectIntl(SendMessageFormik)