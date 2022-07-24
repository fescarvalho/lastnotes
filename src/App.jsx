import Actions from "./components/Actions/Actions";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";

import Notes from "./components/Notes/Notes";
import NotesArea from "./components/NotesArea/NotesArea";
import HighLighContext from "./context/HighLightContext";
import NoteFormProvider from "./context/NoteFormContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <>
      <NoteFormProvider>
        <NoteListProvider>
          <HighLighContext>
            <Header>
              <Logo />
              <Actions />
            </Header>
            <NotesArea>
              <Notes />
            </NotesArea>
          </HighLighContext>
        </NoteListProvider>
      </NoteFormProvider>
    </>
  );
}

export default App;
