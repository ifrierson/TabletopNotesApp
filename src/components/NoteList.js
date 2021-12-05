import React from 'react';
import Note from './Note';


const NoteList =  ({notes, setNotes, filteredNotes, setStatus}) => {

    const statusHandler =(e)=>{
        setStatus(e.target.value);
    };

    const testNote = {
        id: "kwjiaqfna3f4ccxq5pp",
        name: "Big Sword",
        pic: "",
        cla: "item",
        text: "Found this in a dungeon."
      };
    
      const testNote2 = {
        id: "kwjiloj4tjitdnyju3p",
        name: "Big Shield",
        pic: "",
        cla: "item",
        text: "Found this in a dungeon as well."
      };
    
      let sampleNoteList = [testNote, testNote2];
    

    return(
        <div className="note-container">
            <div className="note-filter">
                <select onChange={statusHandler} name="todos" className="filter-notes">
                    <option value="all">All</option>
                    <option value="person">Person</option>
                    <option value="place">Place</option>
                    <option value="item">Item</option>
                    <option value="event">Event</option>
                </select>
            </div>
            <ul className="note-list">
                 {filteredNotes.map((note) => (
                    <Note
                        setNotes={setNotes} 
                        notes={notes}
                        note={note}
                    />
                    ))
                }   

                    {/* {sampleNoteList.map((note) =>(
                        <Note note={note}/>
                    ))} */}
            </ul>
        </div>
    )
};

export default NoteList