const router = require('express').Router()
let notes = require('../db/db.json')

router.get('/notes', (req, res) => {
  res.json(notes)
})

router.post('/notes', (req, res) => {
  let newNote = req.body
  let newNoteId = notes.length
  newNote.id = newNoteId

  notes.push(newNote)

  res.sendStatus(200)
})

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id
  
  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
})

module.exports = router