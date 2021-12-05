import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import NoteList from './components/NoteList';


function App() {
  const [noteName , setNoteName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [noteClass, setNoteClass] = useState('person');
  

  useEffect(() =>{
    getLocalNotes();
  }, []);

  useEffect(() =>{
    filterHandler();
    saveLocalNotes();
  },[notes, status]);

  const filterHandler = ()=>{
    switch(status){
      case 'person':
        setFilteredNotes(notes.filter((note) => note.class === 'person'));
        break;
      case 'place':
        setFilteredNotes(notes.filter((note) => note.class === 'place'));
        break;
      case 'item':
        setFilteredNotes(notes.filter((note) => note.class === 'item'));
        break;
      case 'event':
        setFilteredNotes(notes.filter((note) => note.class === 'event'));
        break;
      default:
        setFilteredNotes(notes);
        break;
    }
  }

  const saveLocalNotes = () =>{
      localStorage.setItem('notes', JSON.stringify(notes));
  };

  const getLocalNotes =() =>{
    if(localStorage.getItem('notes') ===null){
      localStorage.setItem('notes', JSON.stringify([]));
    }else{
      let noteLocal = JSON.parse(localStorage.getItem("notes"));
      setNotes(noteLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1><i className="fas fa-dice-d20"/> Notes App</h1>
      </header>
      <Form 
        notes={notes} 
        setNotes={setNotes} 
        setNoteName={setNoteName}
        noteName={noteName}
        setStatus={setStatus}
        noteText={noteText}
        setNoteText={setNoteText}
        noteClass={noteClass}
        setNoteClass={setNoteClass}
        />
      <NoteList setNotes={setNotes} notes={notes} filteredNotes={filteredNotes} setStatus={setStatus}/>
    </div>
  );
}

export default App;
