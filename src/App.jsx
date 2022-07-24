import Actions from "./components/Actions/Actions";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/logo";
import NoteForm from "./components/NoteForm/NoteForm";

import Notes from "./components/Notes/Notes";
import NotesArea from "./components/NotesArea/NotesArea";
import HighLighContext from "./context/HighLightContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <>
      <HighLighContext>
        <NoteListProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </NoteListProvider>
      </HighLighContext>
    </>
  );
}

export default App;
