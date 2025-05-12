import React from 'react'

export const FetchNotesAPI = async ({ endpoint, setNotes, setIsLoading }) => {
    fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if (data.message === 'No notes found') {
                setNotes([])
            } else {
                setNotes(data)
            }
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
}
