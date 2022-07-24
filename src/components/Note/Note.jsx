import { useState } from "react";

import styles from "./Note.module.css";

function Note({ id, title, description }) {
  const [highLight, setHighLight] = useState(false);
  return (
    <div
      className={`${styles.note} ${highLight ? styles.highlight : ""}`}
      onClick={() => {
        setHighLight(!highLight);
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <hr />
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Note;
