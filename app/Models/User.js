const mongoose  = require('mongoose');

/**
 * @property {String} username
 */
const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
});

module.exports = {
    schema: User,
    model: mongoose.model('user', User)
};
