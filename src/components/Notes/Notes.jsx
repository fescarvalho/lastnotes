import { useEffect } from "react";
import Note from "../Note/Note";
import styles from "./Notes.module.css";
import { useHighLight } from "../../context/HighLightContext";
import { useNoteList } from "../../context/NoteListContext";
import { useNoteForm } from "../../context/NoteFormContext";

const Notes = () => {
  const { noteList, setNoteList } = useNoteList();
  const { HighLight, setHighLight } = useHighLight();
  const { setTitle, setDescription } = useNoteForm();
  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    if (HighLight) {
      const highLightNote = noteList.find((note) => note.id === HighLight);
      setTitle(highLightNote.title);
      setDescription(highLightNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [HighLight]);

  function getLocalNotes() {
    let localNotes = localStorage.getItem("notes");
    if (localNotes === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      localNotes = JSON.parse(localNotes);
      setNoteList(localNotes);
    }
  }

  return (
    <section className={styles.notes}>
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          setHighLight={setHighLight}
          highLight={HighLight}
        />
      ))}
    </section>
  );
};

export default Notes;
