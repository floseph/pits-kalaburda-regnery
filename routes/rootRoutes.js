const express = require('express')
const router = express.Router()
const rootController = require('../controller/rootController')

router.get('/', rootController.rootGet)

module.exports = router