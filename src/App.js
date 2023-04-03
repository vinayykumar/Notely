import { useState } from "react";
import Header from "./components/Header";
import Noteslist from "./components/Noteslist";
import Search from "./components/Search";
import {nanoid} from 'nanoid';

function App(){
  const[Notes,setNotes] = useState([{
    id : nanoid() ,
    text : "Hello meo w",
    date : "03/03/2023"
  },
  {
    id : nanoid() ,
    text : "Hello meo w",
    date : "04/04/2023"
  },
  {
    id : nanoid() , 
    text : "Hello meo w",
    date : "05/05/2023"
  }]);


  const [searchText,setSearchText] = useState('');
  const [darkmode,setdarkmode] = useState(false);

  function addNote(text){
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...Notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id){
      const newNotes = Notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
  }

  return(
    <div className={`${darkmode && 'dark-mode '}`}>
      <div className="container">
        <Header handleToggleDarkMode={setdarkmode} />
        <Search handleSearch={setSearchText}/>
        <Noteslist notes={Notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  )
}

export default App;