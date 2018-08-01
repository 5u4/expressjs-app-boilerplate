const env = process.env;

module.exports = {
    app: {
        connection: env.MONGODB_URI || 'mongodb://localhost:27017/app'
    },

    testing: {
        connection: env.MONGODB_TEST_URI || 'mongodb://localhost:27017/test'
    },
};
