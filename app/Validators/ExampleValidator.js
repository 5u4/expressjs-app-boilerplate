const Joi      = require('joi');
const validate = require('express-validation');

const exampleValidator = validate({
    query: {
        message: Joi.string().required(),
    }
})

module.exports = exampleValidator;
