
import { FaBan, FaCheck } from 'react-icons/fa'
import styles from './NoteForm.module.css'

const NoteForm = () => {
  return (
    <form className={styles.noteMenu}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input id="title" type="text" placeholder="Informe um titulo" />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea id="note" type="text" rows="10" placeholder="escreva a sua nota"/>
      </div>
      
      <div className={styles.buttons}>
        <button className={styles.cancel}>
          <FaBan className={styles.icon} />
        </button>
        <button type="submit" className={styles.confirm}>
          <FaCheck className={styles.icon}/>
        </button>
      </div>
    </form>
  )
}

export default NoteForm
