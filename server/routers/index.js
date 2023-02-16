const express = require('express');
const router = express.Router();
const userRouters = require('./userRouters');
const adminRouters = require('./adminRouters');

router.use('/users', userRouters);
router.use('/admins', adminRouters);


module.exports = router;