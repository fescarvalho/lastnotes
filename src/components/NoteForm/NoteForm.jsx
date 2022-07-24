import { useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";
import styles from "./NoteForm.module.css";

const NoteForm = () => {
  const { noteList, setNoteList } = useNoteList();
  const {
    title,
    setTitle,
    description,
    setDescription,
    visibleForm,
    setVisibleForm,
  } = useNoteForm();

  function titleHander(e) {
    setTitle(e.target.value);
  }

  function descriptionHander(e) {
    setDescription(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

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

  function cancelHandler(e) {
    e.preventDefault();
    setVisibleForm(false);
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
        <button className={styles.cancel} onClick={cancelHandler}>
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
