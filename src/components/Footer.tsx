import React from 'react'
import styles from './Footer.module.css'


function Footer() {
  return (
    <div>
            <footer className={styles.footer}>
                <p>
                <span>
                    React + TS Todo © {new Date().getFullYear()}
                </span>
                </p>
            </footer>
    </div>
  )
}

export default Footer