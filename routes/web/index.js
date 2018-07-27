const express = require('express');
const router  = new express.Router();

router.use('/', require('./Example'));

module.exports = router;
