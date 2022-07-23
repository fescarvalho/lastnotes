import React from 'react'
import styles from './Note.module.css'


const Note = () => {
  return (
    <div className={styles.note}>
        <h2 className={styles.title}>Titulo</h2>
        <hr />
        <p className={styles.description}>Descricao da nota</p>
    </div>
  )
}

export default Note
