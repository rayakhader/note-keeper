import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';

function Note({ note, fetchNotes, onDeleteNote }) {
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [openNote, setOpenNote] = useState(false)
    function handleOpenNote() {
        setOpenNote(true)
    }
    return (
        <>
            <div className='note-container' onClick={() => handleOpenNote()}>
                <h3 className='note-title'>{note.title}</h3>
                <p className='note-content'>{note.content}</p>
                <p className='note-creationDate'>{note.createdAt}</p>
                <button className='trash-icon' onClick={(e) => {
                    e.stopPropagation()
                    setDeleteDialog(true)
                }}>
                    <FaTrash />
                </button>
            </div>
            {deleteDialog && <DeleteDialog setDeleteDialog={setDeleteDialog} onDeleteNote={onDeleteNote} />}
            {openNote && <EditDialog note={note} setOpenNote={setOpenNote} fetchNotes={fetchNotes} />}
        </>
    )
}

export default Note
