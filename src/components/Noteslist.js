import AddNote from './AddNote.jsx';
import Note from './Note.jsx'

function Notelist({notes,handleAddNote,handleDeleteNote}){
    return (
        <div className="notes-list">
            {notes.map((note)=> (
            <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}   

export default Notelist;