const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join.(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// routes to notes.html
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, './public/notes.html'))
})

// routes to index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})


// app.get('/api/notes', (req, res) => {
//   res.json(notes)
// })

// app.post('/api/notes', (req, res) => {
//   notes.push(req.body)
//   res.sendStatus(200)
// })

// app.delete('/api/notes/:id', (req, res) => {
//   const id = req.params.id
//   notes = notes.filter(note => note.id !== id)
//   res.sendStatus(200)
// })

app.listen(process.env.PORT || 3000)


