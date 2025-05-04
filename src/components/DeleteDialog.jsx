import React from 'react'

function DeleteDialog({ setDeleteDialog, onDeleteNote }) {
    function handleClose() {
        setDeleteDialog(false)
    }
    return (
        <div className='delete-dialog'>
            <div className='dialog-content'>
                <h3>Note Deletion</h3>
                <p>Are you certain you wish to delete this Note</p>
                <div className='dialog-actions'>
                    <button className='btn' onClick={handleClose}>Close</button>
                    <button className='btn' onClick={onDeleteNote}>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default DeleteDialog
