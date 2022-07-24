import { useNoteForm } from "../../context/NoteFormContext";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import styles from "./Actions.module.css";
import { useHighLight } from "../../context/HighLightContext";
import { useNoteList } from "../../context/NoteListContext";

const Actions = () => {
  const { visibleForm, setVisibleForm, setTitle, setDescription } =
    useNoteForm();
  const { HighLight, setHighLight } = useHighLight();
  const { noteList, setNoteList } = useNoteList();

  function createHandler() {
    if (visibleForm && HighLight) {
      setTitle("");
      setDescription("");
      setHighLight(false);
    } else {
      setVisibleForm(!visibleForm);
    }
  }

  function editHandler() {
    if (HighLight) {
      const highLightedNote = noteList.find((note) => note.id === HighLight);
      setTitle(highLightedNote.title);
      setDescription(highLightedNote.description);
      setVisibleForm(!visibleForm);
    }
  }

  function deleteHandler() {
    if (HighLight) {
      setTitle("");
      setDescription("");
      setHighLight(false);

      const highLightedNote = noteList.findIndex(
        (note) => note.id === HighLight
      );
      noteList.splice(highLightedNote, 1);

      setNoteList([...noteList]);
    }
  }

  return (
    <div className={styles.actions}>
      <button className={styles.btnCreate} onClick={createHandler}>
        <FaPlus className={styles.icon} />
      </button>
      <button className={styles.btnDelete} onClick={editHandler}>
        <FaPencilAlt
          className={`${styles.icon} ${!HighLight && styles.disabled}`}
        />
      </button>
      <button className={styles.btnEdit} onClick={deleteHandler}>
        <FaTrash
          className={`${styles.icon} ${!HighLight && styles.disabled}`}
        />
      </button>
    </div>
  );
};

export default Actions;
