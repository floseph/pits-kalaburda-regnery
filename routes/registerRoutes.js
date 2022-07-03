const express = require('express')
const router = express.Router()
const registerController = require('../controller/registerController')

router.get('/', registerController.registerGet)

router.post('/', registerController.registerPost)

module.exports = router