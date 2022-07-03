const express = require('express')
const router = express.Router()
const versandinfoController = require('../controller/versandinfoController')

router.get('/', versandinfoController.versandinfoGet)

module.exports = router