const ExampleMiddleware = (req, res, next) => {
    req.example = 'Example';
    next();
};

module.exports = ExampleMiddleware;
