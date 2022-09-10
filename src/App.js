import './App.css';
import { Routes, Route } from 'react-router-dom'
import Authors from './views/Authors';
import Books from './views/Books';
import {useState, useEffect} from 'react'
import { getAuthors, postAuthor } from './controllers/api'


function App() {
  const [data, setData] = useState({
    books: [],
    authors: []
  }
  )

  async function readData() {
    const authors = await getAuthors()
    console.log(authors)
    setData((prev) => {
      return {...prev, authors }
    })
  }

  const addAuthor = async (author) => {
      const authors = await postAuthor(author)
      console.log(authors)
      setData((prev) => {
        return {...prev, authors }
      })
  }

  useEffect(() => {
    readData()
  }, [])

  return (
    <div className="App">
      <div>
        <h1>MyLibrary</h1>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/authors" element={<Authors authors={data.authors} addAuthor={addAuthor} />} />
        </Routes>   
      </div>

    </div>
  );
}

export default App;
