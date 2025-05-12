import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import EditDialog from './EditDialog';

function Note({ note, refetchNotes, onDeleteNote }) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    function handleOpenEditDialog() {
        setIsEditDialogOpen(true)
    }
    function handleCloseEditDialog() {
        setIsEditDialogOpen(false)
    }
    function handleOpenDeleteDialog(e) {
        e.stopPropagation()
        setIsDeleteDialogOpen(true)
    }
    function handleCloseDeleteDialog() {
        setIsDeleteDialogOpen(false)
    }
    return (
        <>
            <div className='note-container' onClick={handleOpenEditDialog}>
                <h3 className='note-title'>{note.title}</h3>
                <p className='note-content'>{note.content}</p>
                <p className='note-creationDate'>{note.createdAt}</p>
                <button className='trash-icon' onClick={handleOpenDeleteDialog}>
                    <FaTrash />
                </button>
            </div>
            {isDeleteDialogOpen && <isDeleteDialogOpen onClose={handleCloseDeleteDialog} onDeleteNote={onDeleteNote} />}
            {isEditDialogOpen && <EditDialog note={note} onClose={handleCloseEditDialog} refetchNotes={refetchNotes} />}
        </>
    )
}

export default Note
