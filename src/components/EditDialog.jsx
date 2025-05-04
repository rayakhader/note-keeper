import React, { useState } from 'react'

function EditDialog({ note, setOpenNote,fetchNotes }) {
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    function handleEditNote() {
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
        ).then((res) => res.json()).then((data) => { console.log(data); setOpenNote(false);fetchNotes() })
    }
    return (
        <div className='edit-dialog'>
            <div className='dialog-content'>
                <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" className='input' value={content} onChange={(e) => setContent(e.target.value)} />
                <div className='dialog-actions'>
                    <button className='btn' onClick={() => setOpenNote(false)}>Cancel</button>
                    <button className='btn' onClick={handleEditNote}>Done</button>
                </div>
            </div>

        </div>
    )
}

export default EditDialog
