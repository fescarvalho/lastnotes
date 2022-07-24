import { useNoteForm } from "../../context/NoteFormContext";
import { useHighLight } from "../../context/HighLightContext";

import "./Note.css";

function Note({ id, title, description }) {
  const { HighLight, setHighLight } = useHighLight();
  const { setVisibleForm } = useNoteForm();

  return (
    <div
      className={`note ${HighLight === id && " highLight"}`}
      onClick={() => {
        if (HighLight === id) {
          setHighLight(false);
          setVisibleForm(false);
        } else {
          setHighLight(id);
          setVisibleForm(true);
        }
      }}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="description">{description}</p>
    </div>
  );
}

export default Note;
