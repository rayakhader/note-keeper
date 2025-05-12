import React from 'react'

const UpdateNoteAPI = ({ note, title, content, onClose, refetchNotes }) => {
    fetch(`http://localhost:3000/api/notes/${note._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        }
    ).then((res) => res.json()).then((data) => { onClose(); refetchNotes() })
}

export default UpdateNoteAPI
