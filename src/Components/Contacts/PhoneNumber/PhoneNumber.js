import React from 'react'
import './PhoneNumber.css'
import 'react-phone-number-input/style.css'
import ru from 'react-phone-number-input/locale/ru'
import en from 'react-phone-number-input/locale/en'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'



const PhoneNumber = ({ phone, setPhone, setPhoneErr, placeholder, locale }) => {

    const onNumberChange = (value) => {
        setPhone(value)
        setPhoneErr(!isValidPhoneNumber(value))
    }

    const labels = locale === 'ru' ? ru : en

    return (
        <div className='phoneNumber'>
            <PhoneInput
                labels={labels}
                placeholder={placeholder}
                value={phone}
                onChange={onNumberChange}
            />
        </div>
    )
}

export default PhoneNumber