import React from "react"
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import styles from "./Greeting.module.css"

const Greeting = (props) => {
   return (
      <div className={styles.greetingPage} id='biography'>
         <div className={styles.container}>
         {props.spaDisplayMode
         ? <h1><NavLink to='/biography' className={styles.greeting}>
               <FormattedMessage id='greeting.text' />
            </NavLink></h1>
         : <h1 className={styles.greeting}><FormattedMessage id='greeting.text' /></h1>
         }
         </div>
      </div>
   );
}

export default Greeting;
