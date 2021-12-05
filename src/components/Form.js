import React from 'react';

const Form = ({noteName, setNoteName, notes, setNotes, setStatus, noteText , setNoteText, noteClass, setNoteClass}) =>{

     function uid() {
        const head = Date.now().toString(36);
        const tail = Math.random().toString(36).substr(2);
        return head + tail;
      }

      const diceIcon = '<i className="fas fa-dice-d20"/>';
      const userIcon = '<i className="fas fa-user"/>';
      const mapIcon = '<i className="fas fa-map"/>';
      const itemIcon = '<i className="fas fa-book"/>';
      const eventIcon = '<i className="fas fa-calendar-days"/>';


    const noteNameHandler = (e) => {
        console.log(e.target.value);
        setNoteName(e.target.value);
    };

    const noteTextHandler = (e) => {
        setNoteText(e.target.value);
    }

    const submitNoteHandler = (e) =>{
        e.preventDefault();
        setNotes([
            ...notes, {name: noteName, text: noteText, class: noteClass, id: uid(), dateCreated: new Date()}
        ]);
        console.log(e.target);
        setNoteName('');
        setNoteText('');
        setNoteClass('person');
    };

    let noteClassHandler = e => {
        setNoteClass(e.target.value);
    }

    return(
        <form className="note-form">

            <input value={noteName} onChange={noteNameHandler} type="text" className="note-name" placeHolder="Name"/>

            <div className="select">
                <select value={noteClass} onChange={noteClassHandler} name="todos" className="filter-notes" defaultValue={"person"}>
                    <option value="person">Person</option>
                    <option value="place">Place</option>
                    <option value="item">Item</option>
                    <option value="event">Event</option>
                </select>
            </div>
            <textarea value={noteText} onChange={noteTextHandler} type='text' className="note-text"/>
            <button onClick={submitNoteHandler} className="note-button" type="submit">
                Add Note <i className="fas fa-plus-square"/>
            </button>
        </form>
    );
};

export default Form;