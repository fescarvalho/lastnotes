import React from 'react'
import styles from './NotesAreas.module.css'


const NotesArea = ({children}) => {
  return (
    <article className={styles.notesArea}>
    {children}
    </article>
  )
}

export default NotesArea