const express = require('express')
const router = express.Router()
const impressumController = require('../controller/impressumController')

router.get('/', impressumController.impressumGet)

module.exports = router