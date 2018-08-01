const mongoose  = require('mongoose');
const dbConfigs = require('../configs/database');

/* set connection string */
const connectionString = (process.env.NODE_ENV === 'test')
    ? dbConfigs.testing.connection
    : dbConfigs.app.connection;

/* connect to mongodb */
mongoose.connect(connectionString, {useNewUrlParser: true});

module.exports = mongoose;
