import React from 'react'

export const DeleteNoteAPI = ({ id, refetchNotes }) => {
    fetch(`http://localhost:3000/api/notes/${id}`, {
        method: 'DELETE'
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to delete the note');
            }
            refetchNotes()
        })
        .catch((error) => {
            console.error('Error deleting note:', error);
        });
}
