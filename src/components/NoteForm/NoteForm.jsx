import { useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteList } from "../../context/NoteListContext";
import styles from "./NoteForm.module.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { noteList, setNoteList } = useNoteList();

  function titleHander(e) {
    setTitle(e.target.value);
  }

  function descriptionHander(e) {
    setDescription(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (title || description === null) {
      setError("Campo não pode ficar em branco");
    } else {
      setNoteList([
        ...noteList,
        {
          id: String(Math.floor(Math.random() * 1000)),
          title,
          description,
        },
      ]);
      setDescription("");
      setTitle("");
    }
  }

  return (
    <form className={styles.noteMenu}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          type="text"
          placeholder="Informe um titulo"
          value={title}
          onChange={titleHander}
        />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          id="note"
          type="text"
          rows="10"
          placeholder="escreva a sua nota"
          value={description}
          onChange={descriptionHander}
        />
      </div>

      <div className={styles.buttons}>
        <button className={styles.cancel}>
          <FaBan className={styles.icon} />
        </button>
        <button
          onClick={submitHandler}
          type="submit"
          className={styles.confirm}
        >
          <FaCheck className={styles.icon} />
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
