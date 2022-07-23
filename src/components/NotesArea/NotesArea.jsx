import React from 'react'
import NoteForm from '../NoteForm/NoteForm'
import styles from './NotesAreas.module.css'


const NotesArea = ({children}) => {
  return (
    <article className={styles.notesArea}>
      {children}
      <NoteForm />
    </article>
  )
}

export default NotesArea