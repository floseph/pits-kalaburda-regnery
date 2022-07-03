const express = require('express')
const router = express.Router()
const faqController = require('../controller/faqController')

router.get('/', faqController.faqGet)

module.exports = router