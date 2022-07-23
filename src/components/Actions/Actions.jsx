import React from 'react'
import {FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'
import styles from './Actions.module.css'

const Actions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.btnCreate}>
        <FaPlus className={styles.icon} />
      </button>
      <button className={styles.btnDelete}  >
        <FaPencilAlt className={`${styles.icon} ${styles.disabled}`} />
      </button>
      <button className={styles.btnEdit}>
       <FaTrash className={`${styles.icon} ${styles.disabled}`} />
      </button>
      
    </div>
  )
}

export default Actions
