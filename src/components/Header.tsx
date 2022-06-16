import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <h1>React + TS Todo</h1>
        </header>
        <h1>Conteudo...</h1>
    </div>
  )
}

export default Header