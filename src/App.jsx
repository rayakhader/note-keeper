import { useEffect, useState } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';
import Spinner from './components/Spinner';
import Empty from './components/Empty';
import AddNote from './components/AddNote';
import { FetchNotesAPI } from './APIs/FetchNotesAPI';

function App() {
  const [query, setQuery] = useState('')
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchNotes = () => {
    const endpoint = query ?
      `http://localhost:3000/api/notes/search?query=${query}` :
      `http://localhost:3000/api/notes`;
    setIsLoading(true)
    FetchNotesAPI(endpoint, setNotes, setIsLoading)
  }
  useEffect(() => {
    fetchNotes()
  }, [query])
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>My Note Keeper</h1>
          <input className='search-input' onChange={(e) => setQuery(e.target.value)} type='text' placeholder='search...' value={query} />
        </nav>
      </header>
      <AddNote refetchNotes={fetchNotes} />
      {
        isLoading ? <Spinner /> : (
          notes.length === 0 ? <Empty /> :
            <NotesContainer notes={notes} refetchNotes={fetchNotes} />
        )
      }

    </div>
  );
}

export default App;
