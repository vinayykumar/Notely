import AddNote from './AddNote.jsx';
import Note from './Note.jsx'

function Notelist({notes,handleAddNote}){
    return (
        <div className="notes-list">
            {notes.map((note)=> (
            <Note id={note.id} text={note.text} date={note.date}/>))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}   

export default Notelist;