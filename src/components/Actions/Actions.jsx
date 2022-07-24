import { useNoteForm } from "../../context/NoteFormContext";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import styles from "./Actions.module.css";

const Actions = () => {
  const { visibleForm, setVisibleForm } = useNoteForm();
  function createHandler() {
    if (visibleForm) {
      setVisibleForm(false);
    } else {
      setVisibleForm(true);
    }
  }

  return (
    <div className={styles.actions}>
      <button className={styles.btnCreate} onClick={createHandler}>
        <FaPlus className={styles.icon} />
      </button>
      <button className={styles.btnDelete}>
        <FaPencilAlt className={`${styles.icon} ${styles.disabled}`} />
      </button>
      <button className={styles.btnEdit}>
        <FaTrash className={`${styles.icon} ${styles.disabled}`} />
      </button>
    </div>
  );
};

export default Actions;
