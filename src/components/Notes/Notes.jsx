import React from "react";
import Note from "../Note/Note";
import styles from "./Notes.module.css";
import { useHighLight } from "../../context/HighLightContext";
import { useNoteList } from "../../context/NoteListContext";

const Notes = () => {
  const { noteList, setNoteList } = useNoteList();
  const { highLight, setHighLight } = useHighLight();

  return (
    <section className={styles.notes}>
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          setNoteList={setNoteList}
          setHighLight={setHighLight}
          highLight={highLight}
        />
      ))}
    </section>
  );
};

export default Notes;
