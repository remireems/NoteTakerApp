const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// uses routes folder to get api routes
app.use(require('./routes'))

// routes to notes.html
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, './public/notes.html'))
})

// routes to index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

// deploys on heroku or localhost:3000
app.listen(process.env.PORT || 3000)