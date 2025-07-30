import { useState, useEffect } from 'react'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}, [])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.content} {note.important ? "!" : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App