const express = require('express')
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/', controller.use);

module.exports = router;