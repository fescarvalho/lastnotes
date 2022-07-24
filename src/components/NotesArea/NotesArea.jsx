import React from "react";
import { useNoteForm } from "../../context/NoteFormContext";
import NoteForm from "../NoteForm/NoteForm";
import styles from "./NotesAreas.module.css";

const NotesArea = ({ children }) => {
  const { visibleForm } = useNoteForm();

  return (
    <article className={styles.notesArea}>
      {children}
      {visibleForm && <NoteForm />}
    </article>
  );
};

export default NotesArea;
