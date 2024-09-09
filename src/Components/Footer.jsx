import React from 'react'
import styles from "./Footer.module.css"
import DateTimeDisplay from './DateTimeDisplay'

function Footer({ completed, total }) {
    return (
        <div className={styles.Footer}>

            <span>Completed Tasks: <h2>{completed}</h2></span>
            <span>Total Tasks: <h2>{total}</h2></span>
            <DateTimeDisplay/>
            
        </div>
    )
}

export default Footer