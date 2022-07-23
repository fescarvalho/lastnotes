import Actions from "./components/Actions/Actions";
import Header from "./components/Header/Header"
import Logo from "./components/Logo/logo";


import Notes from "./components/Notes/Notes";
import NotesArea from "./components/NotesArea/NotesArea";

function App() {

  return (
    <>
      <Header >
        <Logo />
        <Actions />
      </Header>
      <NotesArea>
        <Notes />
      
      </NotesArea>
    </>
  );
}

export default App;
