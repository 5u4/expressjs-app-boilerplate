const express = require('express');
const router  = new express.Router();

router.use('/', (req, res) => {res.json({success: true})});

module.exports = router;
