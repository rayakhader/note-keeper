import React from 'react'

export const AddNoteAPI = async ({ title, content, reset }) => {

    fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    })
        .then((res) => res.json())
        .then((data) => {
            reset()
            console.log(data)
        }).catch(error => {
            console.error('Error adding note:', error.message);
        });
}
