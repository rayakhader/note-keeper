import React, { useState } from 'react'
import UpdateNoteAPI from '../APIS/UpdateNoteAPI'

function EditDialog({ note, onClose, refetchNotes }) {
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    function handleEditNote() {
        UpdateNoteAPI(note, title, content, onClose, refetchNotes)
    }
    return (
        <div className='edit-dialog'>
            <div className='dialog-content'>
                <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" className='input' value={content} onChange={(e) => setContent(e.target.value)} />
                <div className='dialog-actions'>
                    <button className='btn' onClick={onClose}>Cancel</button>
                    <button className='btn' onClick={handleEditNote}>Done</button>
                </div>
            </div>

        </div>
    )
}

export default EditDialog
