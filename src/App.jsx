import { useEffect, useState } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';
import Spinner from './components/Spinner';
import Empty from './components/Empty';

function App() {
  const [query, setQuery] = useState('')
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchNotes = () => {
    const endpoint = query ?
      `http://localhost:3000/api/notes/search?query=${query}` :
      `http://localhost:3000/api/notes`;

    setIsLoading(true)
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(data.message === 'No notes found')
        if (data.message === 'No notes found') {
          setNotes([])
        } else {
          setNotes(data)
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
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
      {
        isLoading ? <Spinner /> : (
          notes.length === 0 ? <Empty /> :
            <NotesContainer notes={notes} fetchNotes={fetchNotes} />
        )
      }

    </div>
  );
}

export default App;
