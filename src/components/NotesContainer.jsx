import React from 'react'
import Note from './Note'
import './Notes.css'
import AddNote from './AddNote';

function NotesContainer({ notes, fetchNotes }) {
    function handleDeleteNote(id) {
        fetch(`http://localhost:3000/api/notes/${id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to delete the note');
                }
                fetchNotes()
            })
            .catch((error) => {
                console.error('Error deleting note:', error);
            });
    }
    return (
        <div className='main-container'>
            <AddNote fetchNotes={fetchNotes} />
            <div className='notes-container'>
                {notes.length > 0 && notes.map((note) => (
                    <Note key={note._id} note={note} fetchNotes={fetchNotes} onDeleteNote={() => handleDeleteNote(note._id)} />
                ))}
            </div>
        </div>
    )
}

export default NotesContainer
