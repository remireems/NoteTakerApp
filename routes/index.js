const router = require('express').Router()

router.use('/api', require('./notesRoute'))

module.exports = router