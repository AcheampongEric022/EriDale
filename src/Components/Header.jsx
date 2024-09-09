import React from 'react'
import styles from "./Header.module.css"
function Header() {
  return (
    <div className={styles.header}>
      <img src="https://media.licdn.com/dms/image/v2/D5603AQF1V-sBVIPJnQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719204776644?e=1731542400&v=beta&t=kDxN2LutbQjQLTxdNcb-0_P-26OU_-25qgEect53XsQ" alt="" />
        <h2>EriDale - ToDo App</h2>
    </div>
  )
}

export default Header