import React from 'react';

const Note = (props,{note, notes, setNotes}) => {

    const deleteHandler = ()=>{
        props.setNotes(props.notes.filter((el) => el.id !== props.note.id))
    }

    const completeHandler = ()=>{
        setNotes(notes.map((note) => {
            if(note.id === note.id){
                return {
                    ...note, completed: !note.completed
                }
            }
            return note;
        }))
    }
    
    return(
        // <div className="todo">
            
        //     <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
        //     <button onClick={completeHandler} className="complete-btn">
        //         <i className="fas fa-check"/>
        //     </button>
        //     <button onClick={deleteHandler}className="trash-btn">
        //         <i className="fas fa-trash"/>
        //     </button>
        // </div>

        <div className="note" id={props.note.id}>
            <i className="fas fa-calendar-days"></i>
            <p>
                <span>{props.note.name}</span>
            </p>
            <p>{props.note.text}</p>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default Note;