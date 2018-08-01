const express           = require('express');
const router            = new express.Router();
const ExampleController = require('../../app/Http/Controllers/ExampleController');

router.get('/', (req, res) => {res.json({success: true})});
router.post('/users', (req, res) => ExampleController.createUser);

module.exports = router;
