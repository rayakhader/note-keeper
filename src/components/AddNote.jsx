import React, { useState } from 'react'
import { AddNoteAPI } from '../APIs/AddNoteAPI'

function AddNote({ refetchNotes }) {
    const [expandAdd, setExpandAdd] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    function expandAddNote() {
        setExpandAdd(true)
    }
    const reset = () => {
        setTitle('')
        setContent('')
        setExpandAdd(false)
        refetchNotes()
    }
    function handleAddNote(e) {
        e.stopPropagation()

        if (!title.trim() || !content.trim()) {
            alert("Title and content are required.");
            return;
        }

        AddNoteAPI(title, content, reset)
    }

    return (
        <div className='add-note'>
            <div className='add-note-form' onClick={expandAddNote}>
                <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder={expandAdd ? 'Title' : 'Type a note...'} />
                {expandAdd && (
                    <>
                        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='input' placeholder='Note content...' />
                        <div className='btn-container'>
                            <button className='btn' onClick={(e) => { e.stopPropagation(); setExpandAdd(false) }}>Cancel</button>
                            <button className='btn' onClick={(e) => handleAddNote(e)}>Add</button>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default AddNote
