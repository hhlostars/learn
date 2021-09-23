const express = require('express')

const router = express.Router()

router.use(require('./articles'))
router.use(require('./user'))

module.exports = router