const express = require('express')
const router = express.Router()
const honeypotController = require('../controller/honeypotController')

router.get('/', honeypotController.honeypotGet)

module.exports = router