const router = require('express').Router()

// uses notes route
router.use('/api', require('./notesRoute'))

module.exports = router