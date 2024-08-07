const express = require('express');
const loginRoute = require('./login');

const router = express.Router();

router.use('/login', loginRoute);

module.exports = router;
