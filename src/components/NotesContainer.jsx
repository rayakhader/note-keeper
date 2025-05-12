import React from 'react'
import Note from './Note'
import './Notes.css'
import { DeleteNoteAPI } from '../APIs/DeleteNoteAPI'

function NotesContainer({ notes, refetchNotes }) {
    function handleDeleteNote(id) {
        DeleteNoteAPI(id, refetchNotes)
    }
    return (
        <div className='main-container'>
            <div className='notes-container'>
                {notes.length > 0 && notes.map((note) => (
                    <Note key={note._id} note={note} refetchNotes={refetchNotes} onDeleteNote={() => handleDeleteNote(note._id)} />
                ))}
            </div>
        </div>
    )
}

export default NotesContainer
