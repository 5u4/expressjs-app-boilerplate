const router            = require('express').Router();
const ExampleController = require('../../app/Http/Controllers/ExampleController');
const ExampleMiddleware = require('../../app/Http/Middlewares/ExampleMiddleware');
const ExampleValidator  = require('../../app/Validators/ExampleValidator');

router.get('/', ExampleController.webRenderingExample);
router.get('/middleware', ExampleMiddleware, ExampleController.middlewareExample);
router.get('/validator', ExampleValidator, ExampleController.validatorExample);
router.get('/exception', ExampleController.exceptionExample);
router.get('/service', ExampleController.exampleServiceUse);

module.exports = router;
