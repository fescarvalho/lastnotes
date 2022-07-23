import React from 'react'
import Note from '../Note/Note'
import styles from './Notes.module.css'

const Notes = () => {
  return (
    <div className={styles.notes}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  )
}

export default Notes
