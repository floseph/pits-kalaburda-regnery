const express = require('express')
const router = express.Router()
const helpController = require('../controller/helpController')

router.get('/', helpController.helpGet)

module.exports = router