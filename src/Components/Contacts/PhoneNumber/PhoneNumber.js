import React, { useState } from 'react'
import './PhoneNumber.css'
// here used .css file instead of .module.css to get acsess to PhoneInput styling
import 'react-phone-number-input/style.css'
import ru from 'react-phone-number-input/locale/ru'
import en from 'react-phone-number-input/locale/en'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { injectIntl } from 'react-intl'
import Tooltip from '../../Common/Tooltip/Tooltip'



const PhoneNumber = ({ phone, setPhone, setPhoneErr, placeholder, locale, intl }) => {

    const onNumberChange = (value) => {
        setPhone(value)
        setPhoneErr(!isValidPhoneNumber(value))
    }

    const [displayHint, setHint] = useState(false)
    const [hintClosedNumb, setCount] = useState(0)
    const showFirstHint = () => {
        if (hintClosedNumb === 0) {
            setHint(true)
        }
    }
    const showHint = () => setHint(true)
    const hideHint = () => {
        setHint(false)
        setCount(hintClosedNumb+1)
    }
    const hideHintOnEsc = (e) => {
        if (e.keyCode === 27) hideHint()
    }

    const labels = locale === 'ru' ? ru : en
    const hint = intl.formatMessage({ id: 'contacts.form.phone_number.hint' })

    return (
        <div className='phoneNumber_wrapper'>
            <div className='phoneNumber' onClick={showFirstHint} onKeyDown={hideHintOnEsc}>
                <PhoneInput
                    labels={labels}
                    placeholder={placeholder}
                    value={phone}
                    onChange={onNumberChange}
                />
            </div>
            {displayHint && <Tooltip hint={hint} onClick={hideHint} />}
            { hintClosedNumb > 0 && <i className={'fa fa-question-circle question'} onClick={showHint} /> }
        </div>
    )
}

export default injectIntl(PhoneNumber)