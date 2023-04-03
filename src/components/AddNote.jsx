import { useState } from "react";

function AddNote({handleAddNote}){
    const [noteText,setNoteText] = useState('');
    const characterLimit = 200;
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }
    const handleSaveClick = (event) => {
            handleAddNote(noteText);
    }
    return(
        <div className="note new" >
            <textarea 
            cols="10" 
            rows="8"
            placeholder="Type here to Add a new note..."
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote; 