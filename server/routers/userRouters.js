const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');

router.get('/items', userController.getItems)
router.get('/items/:id', userController.getItemById)


module.exports = router;