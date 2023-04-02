import { useState } from "react";
import Noteslist from "./components/Noteslist";
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

  return(
    <div className="container">
        <Noteslist notes={Notes} handleAddNote={addNote}/>
    </div>
  )
}

export default App;