/**
 * Show a welcome page
 * 
 * @param {*} req 
 * @param {*} res 
 */
const webRenderingExample = async (req, res, next) => {
    res.send("<h1>Welcome</h1>");
};

/**
 * Send something that is set in the example middleware
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @param {String} req.example The string that is set on ExampleMiddleware
 */
const middlewareExample = async (req, res) => {
    res.send(req.example);
};

/**
 * Validate request before going in to controller
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @param {Boolean} req.query.message Validator will check this field | required
 */
const validatorExample = async (req, res) => {
    res.send(req.query.message);
};

/**
 * Response 500 internal server error
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const exceptionExample = async (req, res, next) => {
    const InternalServerError = require('../../Exceptions/HttpExceptions/InternalServerErrorHttpException');
    return next(new InternalServerError('Test internal server error'));
};

/**
 * Use service to send a welcome page
 * 
 * @param {*} req 
 * @param {*} res 
 */
const exampleServiceUse = async (req, res) => {
    const ExampleService = require('../Services/ExampleService');

    res.send(await ExampleService.welcome());
};

module.exports = {
    webRenderingExample,
    middlewareExample,
    validatorExample,
    exceptionExample,
    exampleServiceUse,
};
